<i18n lang="yaml">
en:
  signUp: 'Signup'
  enter: 'Enter'
  confirmation: 'Check your email for confirmation'

fa:
  signUp: 'حساب جدید'
  enter: 'ورود'
  confirmation: 'لینک تایید اکانت به ایمیلتون ارسال شد'
</i18n>

<template>
  <div class="main">
    <v-dialog max-width="600px">
      <template #activator="{ on, attrs }">
        <button
          class="flex hover:text-mainBlue align-center signUpBtn bg-transparent rounded-full py-2 font-mainFont font-bold text-3xl px-4"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large color="#120129">mdi-account-key</v-icon>
          <span class="px-3"> {{ $t('signUp') }} </span>
        </button>
      </template>
      <div>
        <v-form dark class="signupForm pa-10" @submit.prevent="createUser">
          <!-- <v-text-field
          v-model="displayName"
          :rules="displayNameRules"
          light
          class=""
          required
          label="Name"
        /> -->
          <!-- <v-text-field
            v-model="displayName"
            light
            label="Display Name"
            type="email"
            autocomplete="username"
            required
            class=""
          /> -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            light
            label="E-mail"
            type="email"
            autocomplete="username"
            required
            class=""
          />
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            light
            type="password"
            required
            autocomplete
            class=""
            label="Password"
          />
          <!-- <v-text-field
          v-model="passwordRepeat"
          :rules="passwordRepeatRules"
          light
          type="password"
          required
          autocomplete
          class=""
          label="Repeat Your Password"
        /> -->
          <div class="text-center">
            <button
              class="flex hover:text-mainBlue align-center signUpBtn bg-transparent rounded-full py-2 font-mainFont font-bold text-3xl px-4"
              type="submit"
            >
              <v-icon large color="#120129">mdi-account-key</v-icon>
              <span class="px-3"> {{ $t('enter') }} </span>
            </button>
          </div>

          <p v-if="error" class="pt-6 errorText">
            {{ error }}
          </p>
        </v-form>
      </div>
      <v-alert
        v-show="confirmation"
        border="bottom"
        color="blue"
        type="success"
        class="text-3xl font-black"
      >
        {{ $t('confirmation') }}
      </v-alert>
    </v-dialog>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
export default {
  data: () => ({
    valid: true,
    confirmation: false,
    displayName: '',
    // displayNameRules: [
    //   (v) => !!v || 'Name is required',
    //   (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    // ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) =>
        !!(v || '').match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
    ],
    // passwordRepeat: '',
    // passwordRepeatRules: [
    //   (v) => (!!v && v) === this.match || 'Values do not match',
    // ],
    error: '',
  }),
  methods: {
    async createUser() {
      try {
        this.loadingSignUp = true
        const { error } = await this.$supabase.auth.signUp(
          {
            email: this.email,
            password: this.password,
          },
          {
            data: {
              username: this.displayName,
              email: this.email,
            },
          }
        )
        if (error) throw error
        this.confirmation = true
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.email = ''
        this.password = ''
        this.displayName = ''
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}

.signup-text {
  font-size: 1.7em;
  color: rgb(73, 73, 73);
  /* font-family: 'Acme', sans-serif; */
  font-weight: 800;
  text-transform: capitalize;
}
.signupText {
  /* font-family: 'Acme', sans-serif; */
  text-transform: capitalize;
  font-weight: 800;
  font-size: 1.7em;
}

.errorText {
  /* font-family: 'Acme', sans-serif; */
  font-size: 1.3em;
  background-color: white;
  color: crimson;
}
.signupForm {
  background: rgb(255, 255, 255);
}

.signUpBtn {
  color: #ff4a68;
  transition: ease-in-out 0.3s;
  border: solid 2px #ff4a68;
}
.signUpBtn:hover {
  background-color: #ff4a68;
  color: #120129;
}
</style>
