<template>
  <div class="main">
    <div class="w-screen h-screen">
      <form class="signupForm bg-red-500" @submit.prevent="createUser">
        <!-- <v-text-field
          v-model="displayName"
          :rules="displayNameRules"
          light
          class=""
          required
          label="Name"
        /> -->
        <input
          v-model="displayName"
          label="Display Name"
          type="email"
          autocomplete="username"
          required
          class=""
          placeholder="enter username"
        />
        <input
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          type="email"
          autocomplete="username"
          required
          class=""
          placeholder="enter email"
        />
        <input
          v-model="password"
          :rules="passwordRules"
          type="password"
          required
          autocomplete
          class=""
          placeholder="enter password"
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
            <span class="px-3"> Signup </span>
          </button>
        </div>

        <p v-if="error" class="pt-6 errorText">
          {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
export default {
  data: () => ({
    valid: true,
    // displayName: '',
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
    createUser() {
      this.$store
        .dispatch('signUp', {
          email: this.email,
          password: this.password,
          displayName: this.displayName,
        })
        .then((data) => {
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = err
        })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

.main {
  font-family: 'Yanone Kaffeesatz', sans-serif;
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
