<i18n lang="yaml">
en:
  reset: 'Reset your Password'
  enter: 'Please Enter your Email so we can send you a reset link'
  send: 'Send'
fa:
  reset: 'بازیابی پسوورد فراموش شده'
  enter: 'لطفا ایمیل خود را وارد کنید تا ما برایتان لینک بازیابی را ایمیل کنیم'
  send: 'بفرست'
</i18n>
<template>
  <v-dialog v-model="dialog" max-width="900px" transition="dialog-transition">
    <template #activator="{ on, attrs }">
      <button
        class="resetyourpasswordBtn mt-5 px-4 py-2 rounded-full border-b-4 border-mainBlue"
        v-bind="attrs"
        v-on="on"
      >
        <span
          class="signup-text px-3 capitalize text-3xl font-mainFont font-semibold text-mainBlue"
        >
          {{ $t('reset') }}
        </span>
      </button>
    </template>

    <div class="bg-LightBlue-600 w-full h-full flex align-center flex-col">
      <v-btn
        x-large
        class="mt-6 pa-3 self-start"
        icon
        light
        @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="w-full h-full p-6 flex align-center flex-col">
        <h1
          class="font-mainFont font-extrabold text-4xl text-mainBlue text-center my-6 text-5xl"
        >
          {{ $t('enter') }}
        </h1>
        <input
          v-model="email"
          class="mb-6 shadow-2xl bg-white w-full border-8 rounded-full border-mainBlue py-2 px-4 focus:border-mainRed focus:border-8"
          placeholder="forexample@example.com"
          type="text"
        />
        <button
          class="py-2 px-5 lg:px-13 text-mainRed font-bold text-3xl rounded-full font-mainFont bg-mainBlue hover:bg-mainRed hover:text-mainBlue transition-all"
          @click="resetPassword"
        >
          {{ $t('send') }}
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      email: '',
      showSuccess: false,
      errorMsg: '',
    }
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''
      try {
        await this.$fire.auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
      } catch (err) {
        this.errorMsg = err.message
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
</style>
