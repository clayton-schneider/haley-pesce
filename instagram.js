const axios = require('axios');
const puppeteer = require('puppeteer');

class Instagram {
    constructor(userInfo) {
        const { username, password, appId, appSecret, redirectURI } = userInfo;
        this.username = username;
        this.password = password;
        this.appId = appId;
        this.appSecret = appSecret;
        this.redirectURI = redirectURI;
        this.instaURL = 'https://api.instagram.com/oauth/access_token';
        this.authenticateURL = `https://api.instagram.com/oauth/authorize?client_id=${this.appId}&redirect_uri=${this.redirectURI}&scope=user_profile,user_media&response_type=code`;
    }

    async getAuthCode() {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
        
            await page.goto(this.authenticateURL);
            await page.waitForSelector('button');
    
            await page.type("input[name='username']", this.username);
            await page.type("input[name='password']", this.password);
            await page.click("button[type='submit']");
            await page.waitForNavigation();
    
            // probably where errors will occur when insta is updated and new class is generated
            await page.click('.y3zKF');
            await page.waitForNavigation();
    
            const url = page.url();
            let authCode = url.split('code=')[1];
            authCode = authCode.slice(0, -2);
    
            this.authCode = authCode;
            await browser.close();
        } catch (err) {
            console.log(err);
            throw new Error('Error getting auth code');
        }

    }

    async getToken() {
        try {
            const response = await axios({
                method: 'post',
                url: this.instaURL,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: this.formUrlEncoded({
                    client_id: this.appId,
                    client_secret: this.appSecret,
                    grant_type: 'authorization_code',
                    redirect_uri: this.redirectURI,
                    code: this.authCode
                })
            });
            this.userId = response.data.user_id;
            this.accessToken = response.data.access_token
        } catch (err) {
            console.log(err);
            throw new Error('Error getting access token');
        }
    }

    async getData() {
        try {
            const { data } = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url&access_token=${this.accessToken}`);
            return data;
        } catch(err) {
            console.log(err);
            throw new Error('Error getting data');
        }

    }

    async init() {
        await this.getAuthCode();
        await this.getToken();
        const userData = await this.getData();
        return userData;
    }

    formUrlEncoded(x) {
        return Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');
    }
}

module.exports = Instagram;



