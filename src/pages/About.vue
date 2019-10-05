<template>
  <Layout>
    <section>
      <div class="left">
        <h1>About</h1>
        <p>Welcome to my page! My name is Haley Pesce and I am a 21 year old with a passion for the world around me and all if has to offer. Join my journey and see how you can become the best version of yourself! I believe within each person lives great untapped potential. This can be unleashed through living a wholesome and gratifying lifestyle. Fitness and healthy eating have been two things that my life has always centralized around, and now I am sharing my suggestions with YOU! I invite you to explore my site, learn about my passions, and explore what excites and interests you as well in the world of lifestyle, nutrition, and fitness.</p>
      </div>
      <div class="right">
        <g-image height="650px" src="~/assets/imgs/about.jpg"/>
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
section {
  display: flex;
}

.left {
  flex: 1;
  margin: 50px;

  h1 {
    color: #64b5ac;
    font-size: 50px;
    font-weight: 300;
  }

  p {
    font-size: 20px;
    color: #7a7a7a;
    line-height: 1.5;
  }
}

.right {
  flex: 1;
}
</style>