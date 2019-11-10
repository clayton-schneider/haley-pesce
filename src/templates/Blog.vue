<template>
  <Layout>

    <div class="post">
      <h2 class="post__title">{{ $page.blog.title }}</h2>
      <div class="post__container">
        <div class="post__image-container"><g-image class="post__image" :src="$page.blog.featuredImage"/></div>
        <div class="post__content" v-html="$page.blog.content">
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query ($path: String!) {
	blog (path: $path) {
    title
    content
    featuredImage (width: 860)
  }
}
</page-query>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.blog.title,
      meta: [
        {
          name: 'description',
          content: this.$page.blog.content
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1040px;

:root {
  --space: 35px;
  --radius: 5px;
  --title-color: #000;

}

.post {
  text-align: center;
  margin: 0 auto;

  &__title {
    margin-top: 75px;
    font-size: 32px;
    
  }

  &__container {
    max-width: 860px;
    margin: 0 10px 25px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);
    background-color: #fff;

    @media (min-width: $breakpoint-tablet) {
      margin: 0 auto;
    }
  }

  &__image-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    margin: 0;
    padding: 2s5px 20px;
    font-size: 14px;
    color: #777777;
    line-height: 2.5;
    text-align: left;
    @media (min-width: $breakpoint-tablet) {
      padding: 50px 40px;
    }
  }

}
</style>