<template>
  <body>
    <div class="landing">
      <header class="site__header">
        <nav>
          <g-link to="/">Home</g-link>
          <g-link to="/about">About</g-link>
          <g-link to="/blog">Blog</g-link>
          <g-link to="/contact">Contact</g-link>
        </nav>
      </header>

      <div class="large-hero">
        <g-image class="large-hero__image" src="~/assets/imgs/hero.jpg"/>
        <div class="large-hero__text-content">
          <h1 class="large-hero__title">Haley Pesce</h1>
          <h2 class="large-hero__typewriter">Traveler</h2>
          <h2 class="large-hero__typewriter">Food Enthusiast</h2>
          <h2 class="large-hero__typewriter">Lifestyle</h2>
        </div>
      </div>
    </div>

    <section class="blog">
      <div class="blog__left">
        <h3 class="blog__header"></h3>
        <h4 class="blog__subtitle"></h4>
        <button class="btn"></button>
      </div>
      <div class="blog__right">

      </div>

    </section>

    <section class="instagram">
      <div class="instagram__left">
        <div class="row">
          <div class="img"></div>
          <div class="img"></div>
        </div>
        <div class="row">
          <div class="img"></div>
          <div class="img"></div>
        </div>
        <div class="row">
          <div class="img"></div>
          <div class="img"></div>
        </div>
        <div class="row">
          <div class="img"></div>
          <div class="img"></div>
        </div>
        <div class="row">
          <div class="img"></div>
          <div class="img"></div>
        </div>
      </div>
      <div class="instagram__right">

      </div>
    </section>




    <div class="blog">
      <h2 class="blog__section-header">Follow my recent adventures</h2>

      <div class="blog__post">
        <h3 class="blog--title">Title</h3>
        <h4 class="blog--date">Date</h4>
        <p class="blog--excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat facilis vel autem quam porro eum quis error inventore quaerat?</p>
        <h5 class="blog--read-more">Read More >></h5>
      </div>
      
      <button>More</button>
    </div>

    <div class="instagram">
      <div class="instagram__row">
        <g-image/>
        <g-image/>
        <g-image/>
        <g-image/>
      </div>


    </div>
    
  </body>




</template>

<script>
export default {
  metaInfo: {
    title: 'Haley Pesce - Lifestyle Blog!'
  }
}
</script>

<style lang="scss" scoped>
.landing {
  background-image: url(~@/assets/imgs/hero.png);
  background-repeat: no-repeat;
  background-size: cover;
}




</style>
