<template>
  <body>

    <section class="landing background--main">
      <header>
        <div class="logo-container"><g-image src="~/assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </header>
      <div class="landing__content">
        <div class="landing__container">
          <h1 class="landing__header">Haley Pesce</h1>
          <p class="landing__typewriter">asdf</p>
        </div>
      </div>
    </section>

    <section class="blog">
        <h2 class="blog__headline">Follow My Recent Adventures!</h2>
        <div class="blog__container">
            <div class="blog__post" >
                <div class="blog__image"><g-image width="450" height="300" src="~/../static/uploads/japan.png"/></div>
                <div class="blog__content">
                    <h3 class="blog__title">Japan Is Bad</h3>
                    <p class="blog__excerpt">Japan is bad</p>

                    <g-link to=""></g-link>
                </div>
            </div>
            <div class="blog__post" >
                <div class="blog__image"><g-image width="600" height="300" src="~/../static/uploads/blog-post-two.jpg"/></div>
                <div class="blog__content">
                    <h3 class="blog__title">Summer Recipe – Apple, Cherry Crisp</h3>
                    <p class="blog__excerpt">In my travels this Summer, I found myself on Chebeague Island in Maine with my family. It was a beautiful island of only 341 inhabitants.</p>
                </div>
            </div>
            <div class="blog__post" >
                <div class="blog__image"><g-image width="600" height="300" src="~/../static/uploads/blog-post-one.jpg"/></div>
                <div class="blog__content">
                    <h3 class="blog__title">Welcome to HCP Lifestyle</h3>
                    <p class="blog__excerpt">Hello Everyone! My name is Haley Christine Pesce and I am a rising Senior at Babson College. Throughout my life, I have placed huge importance on fitness and maintaining proper nutrition.</p>
                </div>
            </div>
        </div>
        <g-link class="nav__link" to="/blog"><button class="btn btn--blue center">More Adventures!</button></g-link>
    </section>

    <section class="instagram">
        <div class="instagram__container">
            <h3 class="instagram__headline">Hungry?</h3>
            <h4 class="instagram__subtitle">For good eats follow me on <a class="instagram__link" href="https://www.instagram.com/hcp_eats/" target="_blank">Instagram</a></h4>
            <div class="instagram__gallery">
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="~/assets/imgs/insta.jpg"/></div>

            </div>
        </div>
    </section>

    <section class="footer">
        <h4 class="footer__text">©2019 by HCP Lifestyle | Created by <a href="https://www.simply-sprout.com">Simply Sprout</a></h4>
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

    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');

$breakpoint-tablet: 1040px;
$breakpoint-mobile: 768px;

body {
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
        font-size: 14px;
        color: #777777;
    }
}
.instagram {
    padding-top: 145px;
    background-color: #f2f7f9;

    &__link {
      text-decoration: none;
      color: #54A09E;
    }

    &__container {
        margin: 0 20px;
        @media (min-width: $breakpoint-tablet) {
          margin: 0 120px;
        }
    }

    &__headline {
        margin: 0;
        font-size: 35px;
        text-align: center;
        @media (min-width: $breakpoint-tablet) {
          font-size: 50px;
          text-align: left;
        }
        
    }

    &__subtitle {
        margin: 0;
        font-size: 20px;
        color: #F27A8F;
        text-align: center;
        @media (min-width: $breakpoint-tablet) {
          font-size: 24px;
          text-align: left;
        }
    }

    &__gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 40px;
        @media (min-width: $breakpoint-tablet) {
          justify-content: space-between;
        }
    }

    &__image {
        overflow: hidden;
        margin-bottom: 20px;
        height: 300px;
        min-width: 300px;
        transition: 0.25s ease-in;
        @media (min-width: $breakpoint-mobile) {
          min-width: 400px;
          height: 400px;
        } 

        &:hover {
            opacity: 0.9;
        }
    }
    
}

.blog {
    padding-top: 145px;
    background-color: #f2f7f9;

    &__headline {
        margin: 0;
        text-align: center;
        font-size: 35px;
        @media (min-width: $breakpoint-tablet) {
          font-size: 50px;
        }
    }

    &__container {
        margin: 25px 0;
        @media (min-width: $breakpoint-mobile) {
          margin: 50px 0;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    &__post {
        border-radius: 5px;
        margin: 0 10px 25px 10px;
        max-width: 350px;
        background-color: #fff;
        // transition: 0.75s ease;
        transition: transform .3s,background-color .3s,box-shadow .6s;
        box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);

        @media (min-width: $breakpoint-mobile) {
          margin: 0 10px;
          max-width: 450px;
        }
    }

    &__post:hover {
        background-color: #FFEFF2;
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
    }

    &__image {
        margin: 0;
        height: 300px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
    }

    &__content {
        margin: 0;
        padding: 50px 40px 0 40px;
        min-height: 350px;
    }

    &__title {
        font-size: 24px;
        font-weight: 300;
        margin: 0 0 20px 0;
        @media (min-width: $breakpoint-mobile) {
          font-size: 30px;
        }
    }

    &__excerpt {
        margin: 0;
        font-size: 14px;
        color: #777777;
        line-height: 2.5;
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
