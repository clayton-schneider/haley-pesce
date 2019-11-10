<template>
    <div class="instagram">
        <div class="instagram__container">
            <h3 class="instagram__headline">Hungry?</h3>
            <h4 class="instagram__subtitle">For good eats follow me on <a class="instagram__link" href="https://www.instagram.com/hcp_eats/" target="_blank">Instagram</a></h4>
            <div class="instagram__gallery">
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
                <div class="instagram__image"><g-image width="400px" src="../assets/imgs/insta.jpg"/></div>
            </div>
        </div>
    </div>
</template>

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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 40px;
        @media (min-width: $breakpoint-tablet) {
          justify-content: space-between;
        }
    }

    &__image {
        overflow: hidden;
        margin-bottom: 20px;
        height: 300px;
        min-width: 300px;
        transition: 0.25s ease-in;
        @media (min-width: $breakpoint-mobile) {
          min-width: 400px;
          height: 400px;
        } 

        &:hover {
            opacity: 0.9;
        }
    }
    
}
</style>