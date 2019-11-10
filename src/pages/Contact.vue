<template>
  <Layout>
    <section>
      <div class="left">
        <g-image height="650px" src="../assets/imgs/contact.jpg"/>

      </div>
      <div class="right">
        <h1 class="right__headline">Contact Me!</h1>
        <form class="form" name="contact" method="POST" data-netlify="true" action="/contact">
          <div class="form__name">
            <input type="hidden" name="form-name" value="contact" />
            <label for="form-field-name" class="form__label">Name</label>
            <input size="1" type="text" name="form_fields[name]" id="form-field-name" class="form__input">
          </div>
          <div class="form__email">
            <label for="form-field-email" class="form__label">Email</label>
            <input size="1" type="email" name="form_fields[email]" id="form-field-email" class="form__input" required="required" aria-required="true">
          </div>
          <div class="form__message">
            <label for="form-field-message" class="form__label">Message</label>
            <textarea class="form__textarea" name="form_fields[message]" id="form-field-message" rows="4"></textarea>
          </div>
          <button type="submit" class="form__button">Submit</button>

        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1040px;
$breakpoint-mobile: 768px;

section {
  display: flex;
  flex-wrap: wrap;
}

.left {
  flex: 1;
  margin: 50px;
  display: none;
  @media (min-width: $breakpoint-mobile) {
    display: block;
  }
}

.right {
  flex: 1;
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

    &__headline {
      color: #64b5ac;
      font-size: 35px;
      font-weight: 300;
      @media (min-width: $breakpoint-mobile) {
        font-size: 50px;
      }
    }

  p {
    font-size: 20px;
    color: #7a7a7a;
    line-height: 1.5;
  }
}



.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
  @media (min-width: $breakpoint-mobile) {
    width: 430px;
  }

  &__label {
    flex: 100%;
    font-size: 20px;
    color: #777777;
  }
  

  &__input {
    flex: 100%;
    border-radius: 5px;
    line-height: 2;
    border: 1px solid #707070;
    outline: none;
  }

  &__textarea {
    border-radius: 5px;
    border: 1px solid #707070;
    outline: none;
  }

  &__name {
    // flex: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: $breakpoint-mobile) {
      width: 182px;
    }
  }

  &__email {
    // flex: 50%;
    margin: 35px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: $breakpoint-mobile) {
      margin: 0;
      width: 182px;
    }
  }

  &__message {
    // flex: 100%;
    width: 430px;
    display: flex;
    flex-direction: column;
    margin: 35px 0;
  }

  &__button {
    border: 2px solid #54A09E;
    background-color: #54A09E;
    color: #fff;
    padding: 12px 60px;
    margin: 0 auto;
    border-radius: 5px;
    width: 430px;
    font-size: 20px;

    &:hover {
      background-color: #fff;
      color: #64b6ac;
      transition: 0.25s ease-in-out
    }
  }
}
</style>