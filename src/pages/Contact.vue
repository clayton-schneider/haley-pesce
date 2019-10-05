<template>
  <Layout>
    <section>
      <div class="left">
        <g-image height="650px" src="~/assets/imgs/contact.jpg"/>

      </div>
      <div class="right">
        <h1 class="txt-center">Contact Me!</h1>
        <form class="form" action="">
          <div class="form__name">
            <input size="1" type="text" name="form_fields[name]" id="form-field-name" class="" placeholder="Name">
            <label for="form-field-name" class="">Name</label>
          </div>
          <div class="form__email">
            <label for="form-field-email" class="elementor-field-label elementor-screen-only">Email</label>
            <input size="1" type="email" name="form_fields[email]" id="form-field-email" class="" placeholder="Email" required="required" aria-required="true">
          </div>
          <div class="form__message">
            <label for="form-field-message" class="elementor-field-label elementor-screen-only">Message</label>
            <textarea class="" name="form_fields[message]" id="form-field-message" rows="4" placeholder="Message"></textarea>
          </div>
          <div class="form__button">
            <button>Submit</button>
          </div>

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
section {
  display: flex;
}

.left {
  flex: 1;
  margin: 50px;
}

.right {
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

.txt-center {
  text-align: center;
}



.form {
  display: flex;
  flex-wrap: wrap;

  &__name {
    width: 50%;
  }

  &__email {
    width: 50%;
  }

  &__message {
    width: 100%;
  }
}
</style>