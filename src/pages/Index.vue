<template>
  <body>

    <section class="section main-site background--main" id="landing" :style="{ height: screenHeight + 'px' }">
      <header>
        <div class="logo-container"><g-image src="~/assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/test">home</g-link>
        </nav>
      </header>
      <div class="main-site__content">
        <div class="main-site__container">
          <h1 class="main-site__header">Haley Pesce</h1>
          <p class="main-site__typewriter"></p>
      </div>
        </div>
    </section>

    <section class="section blog" id="blog"  :style="{ minHeight: 1254 + 'px' }">
      
      <div class="section__left background--blue" id="fixBlog" :style="{ top: blogTop + 'px' }">
        <div class="section__info" :style="{ height: screenHeight + 'px' }">
          <div class="middle text--align-center text--white">
            <h2 class="blog__header">Follow My <br> Adventures</h2>
            <button class="btn btn--blue btn__text--lrg btn--slightly-rounded">More Adventures!</button>
          </div>
        </div>

      </div>

      
      <div class="section__right">
        <div class="blog-post" v-for="(item) in $page.blog.edges" :key="item.node.id">
          <a :href="item.node.path" class="blog-post__container">
            <div class="blog-post__image-container">
              <g-image class="blog-post__image" :src="item.node.featuredImage"/>
            </div>
            <div class="blog-post__info">
              <h1 class="blog-post__title">{{ item.node.title }}</h1>
              <p class="blog-post__excerpt">{{ item.node.content }}</p>
              <p class="blog-post__more">READ MORE</p>
            </div>
          </a>
        </div>


        <!-- <div class="blog-post">
          <a class="blog-post__container" href="">
            <div class="blog-post__image-container">
              <g-image class="blog-post__image" width="850" src="~/assets/imgs/blog-post-one.jpg"/>
            </div>
            <div class="blog-post__info">
              <h1 class="blog-post__title">Title #1</h1>
              <p class="blog-post__excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti odio repellendus velit a temporibus. Consequatur at quis voluptatum quos.</p>
              <p class="blog-post__more">READ MORE</p>
            </div>
          </a>
        </div> -->

        <!-- <div class="blog-post">
          <a class="blog-post__container" href="">
            <div class="blog-post__image-container">
              <g-image class="blog-post__image" width="850" src="~/assets/imgs/blog-post-two.jpg"/>
            </div>
            <div class="blog-post__info">
              <h1 class="blog-post__title">Title #1</h1>
              <p class="blog-post__excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti odio repellendus velit a temporibus. Consequatur at quis voluptatum quos.</p>
              <p class="blog-post__more">READ MORE</p>
            </div>
          </a>
        </div> -->
      </div>

    </section>

    <section class="section instagram" id="instagram" :style="{ minHeight: instaHeight + 'px' }">
      
      <div class="section__left">
        <div class="instagram__container">
          <div class="instagram__image" v-for="(item, index) in $page.instagram.edges" :key="index"><a :href="item.node.url" target="_blank">
            <g-image :src="item.node.stdRes"/>
          </a></div>
        </div>
      </div>

      <div class="section__right background--purple" id="fixInsta" :style="{ top: instaTop + 'px' }">
        <div class="section__info" :style="{ height: screenHeight + 'px' }">
          <div class="middle text--align-center text--white">
            <h2 class="blog__header">Want more good eats?</h2>
            <button class="btn btn--purple btn__text--lrg btn--slightly-rounded">More Food!</button>
          </div>
        </div>
      </div>

    </section>

    <section class="section footer" id="footer">
      <h3 class="footer__content">©2019 by HCP Lifestyle | Created by <a href="www.simply-sprout.com">Simply Sprout</a></h3>
    </section>
        
  </body>
</template>

<page-query>
query {
  blog: allBlog(sortBy: "DESC") {
    edges {
      node {
        id
        title
        content
        path
        featuredImage (width: 850)
      }
    }
  }
  instagram: allinstagram {
    edges {
      node {
        url
        stdRes
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Haley Pesce - Lifestyle Blog!'
  },
  data: function() {
    return {
      screenHeight: 0,
      instaHeight: 0,
      blogTop: 0,
      instaTop: 0
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getScreenHeight)
      this.getScreenHeight();
    });
    this.setupViewport();
    this.setInstaHeight();
    this.typewriter(['Food Enthusiast', 'Traveler', 'Lifestyle'], 1500);
  },
  methods: {
    getScreenHeight() {
      this.screenHeight = window.innerHeight;
    },
    setInstaHeight() {
      const height = document.querySelector('.instagram__container').offsetHeight;
      this.instaHeight = height;
    }, 
    setTopSection(section) {
      const elemHeight = document.getElementById(section).offsetHeight;
      const topHeight = elemHeight - this.screenHeight + 1;
      return topHeight;
    },
    setupViewport() {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
      };
      const vm = this;
      let observer = new IntersectionObserver(beTouching, options);
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });      
      function beTouching(entries) {
        const fixBlog = document.getElementById('fixBlog');
        const fixInsta = document.getElementById('fixInsta')
        entries.forEach((entry) => {
          if (entries.length < 2) {
            if(entry.target.id == 'landing' && !entry.isIntersecting) {
                fixBlog.classList.add("fixed");
                fixInsta.classList.remove("fixed");
            } else if (entry.target.id == 'landing' && entry.isIntersecting) {
                fixBlog.classList.remove("fixed");
                fixInsta.classList.remove("fixed");
            } else if (entry.target.id == 'instagram' && entry.isIntersecting) {
                fixBlog.classList.remove("fixed");
                fixInsta.classList.remove("fixed");
                vm.blogTop = vm.setTopSection('blog');
            } else if(entry.target.id == 'instagram' && !entry.isIntersecting) {
                fixBlog.classList.add("fixed");
                fixInsta.classList.remove("fixed");
                vm.blogTop = 0;
            } else if (entry.target.id == 'blog' && !entry.isIntersecting) {
                fixInsta.classList.add("fixed");
            } else if (entry.target.id == 'footer' && entry.isIntersecting) {
                fixInsta.classList.remove("fixed");
                vm.instaTop = vm.setTopSection('instagram');
            } else if (entry.target.id == 'footer' && !entry.isIntersecting) {
                fixInsta.classList.add("fixed");
                vm.instaTop = 0;
            } else{
              fixInsta.classList.remove("fixed");
            }
          }
        })
      }
    },
    typewriter(wordGroup, waitTime = 3000) {
      let words = wordGroup;
      let txt = '';
      let wordIndex = 0;
      let wait = parseInt(waitTime, 10);
      let isDeleting = false;

      (function type() {
        const current = wordIndex % words.length;
        const fullTxt = words[current];

        if(isDeleting) {
          txt = fullTxt.substring(0, txt.length - 1);
        } else {
          txt = fullTxt.substring(0, txt.length + 1);
        }

        document.querySelector('.main-site__typewriter').textContent = txt;

        let typeSpeed = 150;

        if(isDeleting) {
          typeSpeed /=2;
        }

        if (!isDeleting && txt == fullTxt) {
          typeSpeed = wait;
          isDeleting = true;
        } else if (isDeleting && txt === '') {
          isDeleting = false;
          wordIndex++;
          typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
      })();
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.main-site {
  z-index: 300;

  &__content {
    display: flex;
    min-height: 80vh;
    width: 80%;
    margin: auto;
    align-items: center;
    justify-content: center;

  }

  &__container {
    flex: 1;
  }

  &__header {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    flex: 1;
    margin: 5px 0;
  }

  &__typewriter {
    color: #fff;
    position: relative;
    font-size: 30px;
    margin: 0;
    height: 50px;
  }

  &__typewriter::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    border-right: 2px solid white;
  }
}

header{
  display: flex;
  width: 80%;
  margin: auto;
  align-items: center;
  min-height: 15vh;
}

.logo-container {
  flex: 3;
}

.nav {
  display: flex;
  flex: 1;
  justify-content: space-around;
  &__link {
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    text-decoration: none;
  }

  &__link:hover {
    color: #ceabb1;
  }
}

.blog{
  
  &__header {
    font-family: 'handlee', cursive;
    font-size: 75px;
    color: #fff;
  }
}
  
.blog-post {

  padding: 50px;
  
  a {
    color: #000;
  }


  &__container {
    width: 100%;

  }

  &__image-container {
    height: 300px;;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__info {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }

  &__title {
    font-weight: bold;
    font-size: 1.602em;
    margin: 2.75rem 0 1rem;
  }

  &__excerpt {
    margin-bottom: 1.25em;
    font-size: 20px;
    color: #444;
  }

}  

.footer {
  display: flex;
  justify-content: center;

  a {
    color: #181818;
    text-decoration: none;
  }

  &__content {
    font-size: 14px;
    color: #181818;
  }

}
.instagram {

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
  }
  
}

.section {
  position: relative;
  z-index: 200;
  background-color: #fff;

  &__left {
    position: absolute;
    width: 50%;
    top: 0;
    left: 0;
    z-index: 200;
  }

  &__left.fixed {
    position: fixed;
  }

  &__info:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  &__right {
    position: relative;
    width: 50%;
    left: 50%;
    z-index: 100;
  }

    &__right.fixed {
    position: fixed;
  }

  &__content {
    overflow: hidden;
    position: relative;
    width: 100%;
    left: 0;
  }
}

.middle {
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}

.text {

  &--align-center {
    text-align: center;
  }

  &--white {
    color: white;
  }
}

.background {
  &--main {
    background: linear-gradient(0deg,rgba(35, 37, 68, 0.7),rgba(35, 37, 68, 0.7)),url('~@/assets/imgs/hero.jpg') bottom center; 
    background-size: cover;
  }

  &--blue {
    background-color: #64B6AC;
  }

  &--purple {
    background-color: #232543;
  }

  &--pink {
    background-color: #ceabb1;
  }
}

.btn {
  border-style: solid;
  border-width: 2px;
  padding: 12px 60px;
  background-color: rgba(0,0,0,0);

  &--blue {
    border-color: #fff;
    color: #fff;
  }
  &--blue:hover {
    background-color: #fff;
    color: #64b6ac;
    transition: 0.25s ease-in-out
  }

  &--purple {
    border-color: #fff;
    color: #fff;
  }

  &--purple:hover {
    background-color: #fff;
    color: #232543;
    transition: 0.25s ease-in-out;
  }

  &--slightly-rounded {
    border-radius: 3px;
  }

  &__text {
    font-size: 15px;

    &--lrg {
      font-size: 20px;
    }
  }

  &:focus{
    outline: none;
  }

}

</style>
