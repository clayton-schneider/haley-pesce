<template>
    <div class="blog">
        <h2 class="blog__headline">Follow My Recent Adventures!</h2>
        <div class="blog__container">
            <div class="blog__post" v-for="edge in $static.allBlog.edges"
                :key="edge.node.id">
                <a :href="edge.node.path">
                <div class="blog__image-container"><g-image class="blog__image" :src= "edge.node.featuredImage"/></div>
                <div class="blog__content">
                    <h3 class="blog__title">{{edge.node.title}}</h3>
                    <p class="blog__excerpt">{{edge.node.excerpt}}</p>
                </div>
                </a>
            </div>
        </div>
        <g-link class="nav__link" to="/blog"><button class="btn btn--blue center center">More Adventures!</button></g-link>
    </div>
</template>

<static-query>
{
  allBlog (sortBy: "date", perPage: 3, order: DESC) {
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

<style lang="scss">
$breakpoint-tablet: 1040px;
$breakpoint-mobile: 768px;

a {
    color: inherit;
    text-decoration: inherit;
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
        transition: transform .3s,background-color .3s, box-shadow .6s;
        box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);

        @media (min-width: $breakpoint-tablet) {
          margin: 0 10px;
          max-width: 450px;
        }
    }

    &__post:hover {
        background-color: #FFEFF2;
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
    }

    &__image-container {
        margin: 0;
        height: 300px;
        width: 100%;
        border-radius: 5px 5px 0 0;
        overflow: hidden
    }

    &__image {
        height: 100%;
        width: 100%;
        object-fit: cover;
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

.center {
    display: block;
    margin: 0 auto;
}
</style>