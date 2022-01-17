<i18n lang="yaml">
en:
  join: 'Join Us!'
  login: 'Login'
  google: 'Sign in with Google'
  noAccount: 'Dont have an account?'
fa:
  join: 'به ما بپیوندید'
  login: 'ورود'
  google: 'ورود از طریق حساب گوگل'
  noAccount: 'هنوز حسابی ندارید؟'
</i18n>

<template>
  <div class="main">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-btn
              v-bind="attrs"
              dark
              x-large
              depressed
              fab
              class=""
              color="transparent"
              @click="dialog = true"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon large>mdi-login-variant</v-icon>
            </v-btn>
          </template>
          <span class="text-3xl">{{ $t('join') }}</span>
        </v-tooltip>
      </template>
      <div>
        <v-form
          dark
          class="loginForm px-5 lg:px-10 pt-8"
          @submit.prevent="signInUser"
        >
          <!-- <v-text-field
            v-model="displayName"
            light
            class=""
            required
            label="Name"
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
          <div
            class="flex lg:space-x-8 space-x-3 justify-center align-center mt-5"
          >
            <button
              class="loginBtn flex align-center justify-center"
              type="submit"
            >
              <span class="learnMoreText px-4 font-semibold py-2">
                {{ $t('login') }}
                <v-icon color="white" class="">mdi-login-variant</v-icon>
              </span>
            </button>
          </div>
        </v-form>
        <div
          class="flex loginForm px-5 lg:px-10 pb-8 pt-3 flex-col justify-center align-center"
        >
          <button
            class="learnMoreBtn flex align-center justify-center w-full"
            @click="googleSignIn"
          >
            <span class="learnMoreText px-4 font-semibold py-2">
              {{ $t('google') }}
              <v-icon medium color="red" class="transform lg:scale-110"
                >mdi-google</v-icon
              >
            </span>
          </button>
          <p class="signup py-4 mt-5 text-3xl font-semibold text-mainBlue">
            {{ $t('noAccount') }}
          </p>
          <SignupDialog class="" />
          <PasswordResetDialog />
        </div>
        <p v-if="error" class="errorText font-mainFont text-3xl">
          {{ error }}
        </p>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {
    SignupDialog: () => import('../components/SignupDialog.vue'),
    PasswordResetDialog: () => import('../components/PasswordResetDIalog.vue'),
  },
  data: () => ({
    dialog: false,

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
    displayName: '',
    error: '',
  }),
  methods: {
    googleSignIn() {
      this.$store
        .dispatch('signInWithGoogle')
        .then((result) => {
          // store the user ore wathever
          this.$forceUpdate()
          this.$router.push('/')
          this.dialog = false
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    },
    signInUser() {
      try {
        setTimeout(async function () {
          const { error } = await this.$supabase.auth.signIn({
            email: this.email,
            password: this.password,
          })
          if (error) throw error
          alert('you are logged in')
        }, 3000)
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.email = ''
        this.password = ''
      }
    },
  },
}
</script>

<style scoped>
.learnMoreBtn {
  font-size: 25px;
  background-color: transparent;
  color: #120129;
  border: 2px solid #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
.loginBtn {
  font-size: 25px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}

.loginBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}

.loginText,
.googleText {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
  text-transform: capitalize;
}

.signup,
.title {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
.loginForm {
  background: rgb(255, 255, 255);
}

.errorText {
  /* font-family: 'Acme', sans-serif; */
  font-size: 1.3em;
  background-color: white;
  color: crimson;
}
</style>
