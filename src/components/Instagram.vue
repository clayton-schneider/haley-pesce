<template>
    <div class="instagram">
        <div class="instagram__container">
            <h3 class="instagram__headline">Hungry?</h3>
            <h4 class="instagram__subtitle">For good eats follow me on <a class="instagram__link" href="https://www.instagram.com/hcp_eats/" target="_blank">Instagram</a></h4>
            <div class="instagram__gallery">
                <div class="instagram__image-container" v-for="edge in $static.allinstagram.edges" :key="edge.node.id">
                  <g-image class="instagram__image" :src="edge.node.url"/>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
{
  allinstagram (order: ASC, perPage: 8) {
    edges {
      node {
        id
        url
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
      display: grid;
      grid-template-columns: repeat(1, auto);
      justify-items: center;
      align-items: center;
      grid-gap: 10px;
      margin: 40px auto 0 auto;

      @media screen and (min-width: 850px) {
        grid-template-columns: repeat(2, auto);
      }
      @media screen and (min-width: 1880px) {
        grid-template-columns: repeat(4, auto);
      }
    }

    &__image-container {
      height: 300px;
      width: 300px;
      transition: 0.25s;
      @media (min-width: $breakpoint-mobile) {
        width: 400px;
        height: 400px;
      }
      &:hover {
          opacity: 0.9;
      }
    }

    &__image {
          width: 100%;
          height: 100%;
    }
    
}
</style>