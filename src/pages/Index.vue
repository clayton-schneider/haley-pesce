<template>
  <main>

    <section class="landing background--main">
      <header>
        <div class="logo-container"><g-image src="../assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </header>
      <div class="landing__content">
        <div class="landing__container">
          <h1 class="landing__header">Haley Pesce</h1>
          <p class="landing__typewriter"></p>
        </div>
      </div>
    </section>

    <BlogHome/>

    <Instagram/>

    <section class="footer">
        <h4 class="footer__text">©2019 by HCP Lifestyle | Created by <a href="https://www.simply-sprout.com">Simply Sprout</a></h4>
    </section>
  </main>
</template>

<script>
import Instagram from '~/components/Instagram.vue'
import BlogHome from '~/components/BlogHome.vue'

export default {
  components: {
    Instagram,
    BlogHome
  },
  metaInfo: {
    title: 'Haley Pesce - Lifestyle Blog!'
  },
  data: function() {
    return {

    }
  },
  mounted: function() {
    this.typewriter(['Food Enthusiast', 'Traveler', 'Lifestyle'], 1500);
  },
  methods: {
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

        document.querySelector('.landing__typewriter').textContent = txt;

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
@import url('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');

$breakpoint-tablet: 1040px;
$breakpoint-mobile: 768px;

main {
  font-family: 'Arvo', serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.footer {
    padding-top: 55px;
    background-color: #f2f7f9;

    a {
        color: #777777;
    }

    &__text {
        margin: 10px 0;
        font-size: 10px;
        color: #777777;
        @media (min-width: $breakpoint-tablet) {
          font-size: 14px;
        }
    }
}

.landing {
  z-index: 300;
  min-height: 100vh;

  &__content {
    display: flex;
    min-height: 85vh;
    width: 80%;
    margin: auto;
    align-items: center;
  }

  &__container {
    flex: 1;
  }

  &__header {
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    flex: 1;
    margin: 5px 0;
    @media (min-width: $breakpoint-tablet) {
      font-size: 60px;
      text-align: left;
    }
    
  }

  &__typewriter {
    color: #fff;
    position: relative;
    font-size: 22px;
    text-align: center;
    margin: 0;
    height: 50px;
    @media (min-width: $breakpoint-tablet) {
      font-size: 30px;
      text-align: left;
    }
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
  width: 90%;
  @media (min-width: $breakpoint-mobile) {
    width: 80%
  }
  margin: auto;
  align-items: center;
  min-height: 15vh;
}

.logo-container {
  flex: 1;
  @media (min-width: $breakpoint-tablet) {
    flex: 3;
  }
}

.nav {
  display: flex;
  flex: 2;
  @media (min-width: $breakpoint-tablet) {
    flex: 1;
  }
  justify-content: space-around;

  &__link {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }

  &__link:hover {
    color: #ceabb1;
  }
}

.background {
    &--main {
        background: linear-gradient(0deg,rgba(35, 37, 68, 0.7),rgba(35, 37, 68, 0.7)),url('~@/assets/imgs/hero.jpg') bottom center; 
        background-size: cover;
    }
}

.center {
    display: block;
    margin: auto;
}

.btn {
    border-style: none;
    padding: 12px 60px;
    background-color: rgba(0,0,0,0);
    border-radius: 5px;

    &--blue {
        border: 2px solid #54A09E;
        background-color: #54A09E;
        color: #fff;
    }

    &--blue:hover {

        background-color: #fff;
        color: #64b6ac;
        transition: 0.25s ease-in-out
    }
}




</style>
