<template>
    <div class="posts">
        <div class="post-card content-box" v-for="edge in $static.allBlog.edges" :key="edge.node.id">
            <div class="post-card__header"><g-image width="770px" height="380px" class="post-card__image" :src="edge.node.featuredImage"/></div>
            <div class="post-card__content">
                <h2 class="post-card__title">{{ edge.node.title }}</h2>
                <p class="post-card__description">{{ edge.node.excerpt }}</p>

                <g-link class="post-card__link" :to="edge.node.path"></g-link>
            </div>
        </div>
    </div>
</template>

<static-query>
{
  allBlog (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        excerpt
        featuredImage
        path
      }
    }
  }
}
</static-query>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f3f7f9;
  font-size: 20px;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
.content-box {
  background-color: #fff;
  max-width: 750px;
  margin: 0 auto;
  padding: 70px;
  border-radius: 5px;
  transition: transform .3s,background-color .3s,box-shadow .6s;
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);
}
.post-card {
  margin-bottom: 70px;
  position: relative;

  &__header {
    margin: calc(70px*-1) calc(70px*-1) calc(70px/2) calc(70px*-1);
    overflow: hidden;
    border-radius: 5px 5px 0 0 ;
    height: 400px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;

  }
}

.blog {
  &__headline {
    text-align: center;
    margin: 50px auto;
    font-size: 50px;
  }
}
</style>