<template>
  <body>
    <header class="site-header">
      <g-image class="logo" src="~/assets/logo.png" height="110px"/>
      <nav>
        <g-link to="/">Home</g-link>
        <g-link to="/about">About</g-link>
        <g-link to="/blog">Blog</g-link>
        <g-link to="/contact">Contact</g-link>
      </nav>
    </header>

    <div class="large-hero">
      <g-image class="large-hero__image" src="~/assets/hero.jpg"/>
      <div class="large-hero__text-content">
        <h1 class="large-hero--title">Haley Pesce</h1>
        <h2 class="large-hero--typewriter">Traveler</h2>
        <h2 class="large-hero--typewriter">Food Enthusiast</h2>
        <h2 class="large-hero--typewriter">Lifestyle</h2>
      </div>
    </div>

    <div class="blog">
      <h2>Follow my recent adventures</h2>

      <div class="blog__post">
        <h3>Title</h3>
        <h4>Date</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat facilis vel autem quam porro eum quis error inventore quaerat?</p>
        <h5>Read More >></h5>
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
.site-header {
  position: absolute;
  z-index: 2;
}

.large-hero {
  position: relative;

  &__image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  &__text-content {
    position: absolute;
    top: 0;
    left: 0;
  }
}


</style>
