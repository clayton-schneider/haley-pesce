<template>
  <body>

    <section class="section main-site background--main" id="landing" :style="{ height: screenHeight + 'px' }">
      <header>
        <div class="logo-container"><g-image src="~/assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </header>
      <div class="main-site__content">
        <div class="main-site__container">
          <h1 class="main-site__header">Haley Pesce</h1>
          <p class="main-site__typewriter"></p>
      </div>
        </div>
    </section>

    <section class="section blog" id="blog"  :style="{ minHeight: screenHeight + 'px' }">
      
      <div class="section__left background--blue" id="needsFixing" :style="{ top: blogTop + 'px' }">
        <div class="section__info" :style="{ height: screenHeight + 'px' }">
          <div class="middle text--align-center text--white">
            <h2 class="blog__header">My Blog</h2>
            <button class="btn btn--blue btn__text--lrg btn--slightly-rounded">More Adventures!</button>
          </div>
        </div>

      </div>
      <div class="section__right">
        <div class="blog-post">
          <a class="blog-post__container" href="">
            <g-image class="blog-post__image" src="~/assets/imgs/blog-post-one.jpg"/>
            <div class="blog-post__info">
              <h1 class="blog-post__title">Title #1</h1>
              <p class="blog-post__excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti odio repellendus velit a temporibus. Consequatur at quis voluptatum quos.</p>
              <p class="blog-post__more">READ MORE</p>
            </div>

          </a>
        </div>

       <div class="blog-post">
          <a class="blog-post__container" href="">
            <g-image class="blog-post__image" src="~/assets/imgs/blog-post-two.jpg"/>
            <h1 class="blog-post__title">Summer Recipe - Apple, Cherry Crisp</h1>
            <p class="blog-post__excerpt">In my travels this Summer, I found myself on Chebeague Island in Maine with my family. It was a beautiful island of only 341 inhabitants...</p>
            <p class="blog-post__more">READ MORE</p>
          </a>
        </div>

      </div>
    </section>

    <section class="section instagram background-color--red" id="instagram" :style="{ minHeight: screenHeight + 'px' }">

    </section>

    <section class="section background-color--teal" id="test" :style="{ minHeight: screenHeight + 'px' }">

    </section>
    
  </body>




</template>

<script>
export default {
  metaInfo: {
    title: 'Haley Pesce - Lifestyle Blog!'
  },
  data: function() {
    return {
      screenHeight: 0,
      blogTop: 0
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getScreenHeight)
      this.getScreenHeight();
    });
    this.setupViewport();
    this.typewriter(['Food Enthusiast', 'Traveler', 'Lifestyle'], 1500);
  },
  methods: {
    getScreenHeight() {
      this.screenHeight = window.innerHeight;
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
        const needsFixing = document.getElementById('needsFixing');
        entries.forEach((entry) => {
          if (entries.length < 2) {
            if(entry.target.id == 'landing' && !entry.isIntersecting) {
                needsFixing.classList.add("fixed");
            } else if (entry.target.id == 'landing' && entry.isIntersecting) {
                needsFixing.classList.remove("fixed");
            } else if (entry.target.id == 'instagram' && entry.isIntersecting) {
                needsFixing.classList.remove("fixed");
                vm.blogTop = vm.setTopSection('blog');
            } else if(entry.target.id == 'instagram' && !entry.isIntersecting) {
                needsFixing.classList.add("fixed");
                vm.blogTop = 0;
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

        let typeSpeed = 300;

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
  min-height: 20vh;
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
  
.blog-post {
  overflow: hidden;
  position: relative;
  width: 100%;
  left: 0;

  &__container {
    display: block;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
  }

  &__container::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 15s transform linear;
  }

  &__image:hover {
    transform: scale(2);
  }

  &__info {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }

}  

}
.instagram {
  background-color: green;
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

.background-color {

  &--teal {
    background-color: teal;
  }

  &--red {
    background-color: red;
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

  &--slightly-rounded {
    border-radius: 3px;
  }

  &__text {
    font-size: 15px;

    &--lrg {
      font-size: 20px;
    }
  }

}

.btn:focus {
  outline: none;
}



</style>
