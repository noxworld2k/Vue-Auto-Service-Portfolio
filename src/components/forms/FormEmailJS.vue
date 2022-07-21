<template>
  <div class="form__box flex__one">
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" required="required">
      <label>Email</label>
      <input type="email" name="user_email" required="required">
      <label>Message</label>
      <textarea required="required" name="message"></textarea>
      <label class="checkbox">
        <input type="checkbox" required="required" name="checkbox">
        <span>I agree to the terms and conditions</span>
      </label>
      <button class="btn__send-emailjs" type="submit" value="Send" :disabled="sendStatus.length > 1">Send</button>
    </form>
    <div class="message__result" v-if="sendStatus.length > 1 ">
      {{ sendStatus }}
    </div>
  </div>

</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "FormEmailJS",
  data() {
    return {
      sendStatus: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm("service_0qmkssq", "template_yp4zw2l", this.$refs.form, "HXGMavF3GHeyGRM3U")
        .then((result) => {
          this.sendStatus = `Success: Message has been send`;
          console.log(result)
        }, (error) => {
          this.sendStatus = `Error: message has not send`;
          console.log(error)
        });
    }
  },
};
</script>