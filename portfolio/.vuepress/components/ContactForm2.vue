<template>
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
    >
    <input type="hidden" name="form-name" value="ask-question" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>

    ...
    <button>Submit</button>
  </form>
</template>
<script>

import axios from "axios";

export default {
  name: "QAForm",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
    }
  },
  data () {
    return {
      form: {
        askPerson: ""
      },
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>