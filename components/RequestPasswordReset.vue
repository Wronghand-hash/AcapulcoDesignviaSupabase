<template>
  <div class="p-5">
    <div class="mainContainer w-full h-full rounded-2xl">
      <div class="w-full h-full flex justify-center flex-row items-center">
        <form
          class="w-full h-full flex flex-col justify-center items-center"
          @submit.prevent="recoverPassword"
        >
          <div class="w-full">
            <input
              v-model="email"
              class="inputField w-full px-5 py-8 rounded-t-2xl"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div class="flex justify-center p-2">
            <input
              type="submit"
              class="cursor-pointer actionButton font-bold px-4 py-2 rounded"
              :value="loading ? 'Loading' : 'request recovery link'"
              :disabled="loading"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  methods: {
    async recoverPassword() {
      // login user through supabase magiclink and requests an open session for password recovery via passwordReset component
      try {
        this.loading = true
        const { error } = await this.$supabase.auth.api.resetPasswordForEmail(
          this.email,
          {
            redirectTo: 'http://localhost:3000/loginPage',
          }
        )

        if (error) throw error
        alert('check your inbox for recovery link')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.actionButton{
  background-color: #840032;
  color: white;
}
</style>