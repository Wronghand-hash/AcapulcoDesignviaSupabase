<template>
  <div class="p-5">
    <div class="mainContainer w-full h-full rounded-2xl">
      <div class="w-full h-full flex justify-center flex-row items-center">
        <form
          class="w-full h-full flex flex-col justify-center items-center"
          @submit.prevent="passwordReset"
        >
          <div class="w-full">
            <input
              v-model="password"
              class="inputField w-full px-5 py-8 rounded-t-2xl"
              type="email"
              placeholder="new password"
            />
          </div>
          <div class="flex justify-center p-2">
            <input
              type="submit"
              class="actionButton font-bold px-4 py-2 rounded"
              :value="loading ? 'Updating' : 'Update'"
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
  props: {
    session: String,
  },
  data() {
    return {
      loading: false,
      password: '',
    }
  },

  methods: {
    async passwordReset() {
      try {
        this.loading = true
        const { error } = await this.$supabase.auth.api.updateUser(
          this.session.access_token,
          { password: this.password }
        )

        if (error) throw error
        alert('your password has been updated')
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
  background-color: #E8AC76;
}
</style>
