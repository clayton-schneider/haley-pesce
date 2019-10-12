<template>
  <div class="layout">
    <header class="header background--purple">
      <div class="header__container">
        <div class="logo-container"><g-image src="~/assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/test">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </div>

    </header>
    
    <slot/>

    <section class="footer">
        <h4 class="footer__text">©2019 by HCP Lifestyle | Created by <a href="https://www.simply-sprout.com">Simply Sprout</a></h4>
    </section>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');

$breakpoint-tablet: 1040px;
$breakpoint-mobile: 768px;

body {
  font-family: 'Arvo', serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header{
  min-height: 15vh;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    width: 90%;
    @media (min-width: $breakpoint-mobile) {
      width: 80%
    }
    margin: auto;
    align-items: center;
  }
}

.logo-container {
  flex: 1;
  @media (min-width: $breakpoint-tablet) {
    flex: 3;
  }
}

.nav {
  display: flex;
  flex: 3;
  justify-content: space-around;
  @media (min-width: $breakpoint-tablet) {
    flex: 1;
  }

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
  &--purple {
    background-color: #232543
  }
}

.footer {
  display: flex;
  justify-content: center;
  padding-top: 55px;

  a {
    color: #777777;
    text-decoration: none;
  }

  &__text {
      margin: 10px 0;
      font-size: 14px;
      color: #777777;
  }

}

</style>
