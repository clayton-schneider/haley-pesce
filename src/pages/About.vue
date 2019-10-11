<template>
  <Layout>
    <section>
      <div class="left">
        <h1>About</h1>
        <p>Welcome to my page! My name is Haley Pesce and I am a 21 year old with a passion for the world around me and all if has to offer. Join my journey and see how you can become the best version of yourself! I believe within each person lives great untapped potential. This can be unleashed through living a wholesome and gratifying lifestyle. Fitness and healthy eating have been two things that my life has always centralized around, and now I am sharing my suggestions with YOU! I invite you to explore my site, learn about my passions, and explore what excites and interests you as well in the world of lifestyle, nutrition, and fitness.</p>
      </div>
      <div class="right">
        <div class="about__image-container"></div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss" scoped>

$breakpoint-large: 1520px;
$breakpoint-tablet: 1040px;
$breakpoint-mobile: 830px;

section {
  display: flex;
  flex-wrap: wrap-reverse;
}

.left {
  flex: 100%;
  margin: 50px;
  text-align: center;
  @media (min-width: $breakpoint-tablet) {
    text-align: left;
  }
  @media (min-width: $breakpoint-tablet) {
    flex: 1;
  }

  h1 {
    color: #64b5ac;
    font-size: 50px;
    font-weight: 300;
  }

  p {
    font-size: 14px;
    color: #7a7a7a;
    line-height: 2;
  }
}

.right {
  flex: 100%;
  @media (min-width: $breakpoint-tablet) {
    flex: 1;
  }
}

.about {

  &__image-container {
    width: 100%;
    min-height: 300px;
    background-image: url("~@/assets/imgs/about.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: $breakpoint-mobile) {
      min-height: 500px;
    }
    @media (min-width: $breakpoint-tablet) {
      min-height: 800px;
    }
  }


}
</style>