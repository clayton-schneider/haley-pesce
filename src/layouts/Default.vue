<template>
  <div class="layout">
    <header class="header background--purple">
      <div class="header__container">
        <div class="logo-container"><g-image src="~/assets/imgs/logo.png" width="55px"></g-image></div>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </div>

    </header>
    <slot/>

    <section class="section footer" id="footer">
      <h3 class="footer__content">©2019 by HCP Lifestyle | Created by <a href="www.simply-sprout.com">Simply Sprout</a></h3>
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

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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
    width: 80%;
    margin: auto;
    align-items: center;
  }
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

.background {
  &--purple {
    background-color: #232543
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

</style>
