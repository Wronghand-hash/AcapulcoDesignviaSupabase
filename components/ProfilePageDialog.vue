<template>
  <div class="main">
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
      class="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          light
          depressed
          color="transparent"
          v-on="on"
          @click="dialog = true"
        >
          <v-icon>mdi-account-check</v-icon>

          <span class="text-xl font-bold text-center ProfileText"
            >My Profile</span
          >
        </v-btn>
      </template>

      <div id="main" class="h-screen w-screen">
        <!-- <div class="hidden self-start absolute lg:flex">
          <v-btn x-large class="ml-4 mt-5" icon dark @click="dialog = false">
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
        </div> -->
        <div
          class="absolute flex flex-col justify-items-center justify-center align-center w-full h-screen"
        >
          <LazyHydrate on-interaction>
            <Insights ref="Insights" />
          </LazyHydrate>
        </div>
        <div
          class="flex flex-col justify-center h-full w-full align-center lg:p-11"
        >
          <div class="h-full w-full backGround">
            <div class="w-full h-3/4">
              <div class="w-full h-3/6">
                <div
                  class="w-full h-1/3 bg-green-400 flex flex-col align-start justify-center"
                >
                  <h2
                    class="p-4 flex font-mainFont text-mainBlue font-extrabold justify-center align-center space-x-1 lg:text-3xl text-2xl"
                  >
                    <span
                      class="transform scale-125 span"
                      @click="dialog = false"
                      ><v-icon dark x-large color=""
                        >mdi-chevron-double-left</v-icon
                      ></span
                    >

                    <span class="flex justify-center align-end">
                      <v-icon x-large dark class="transform scale-125 mr-4"
                        >mdi-home-edit-outline</v-icon
                      >
                      My Address
                    </span>
                  </h2>
                </div>
                <div
                  class="w-full h-2/3 bg-CoolGray-900 grid grid-cols-2 grid-rows-2 p-5"
                >
                  <div>
                    <v-text-field
                      v-model="user.City"
                      color="red lighten-5"
                      dark
                      label="City"
                      required
                      rounded
                      dense
                      filled
                      class="pr-3"
                    ></v-text-field>
                  </div>
                  <div>
                    <v-text-field
                      v-model="user.Province"
                      color="red lighten-5"
                      dark
                      label="Province"
                      required
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </div>
                  <div class="col-span-2 mt-2">
                    <v-text-field
                      v-model="user.Address"
                      color="red lighten-5"
                      dark
                      label="Address"
                      required
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </div>
                </div>
              </div>
              <div class="w-full h-3/6 ordersDiv">
                <div class="w-full h-1/3 bg-red-400">
                  <h1 class="pa-5 flex text-3xl">
                    <v-icon x-large dark>mdi-account-edit-outline</v-icon>
                    <span
                      class="font-mainFont text-mainBlue font-extrabold text-5xl ml-2"
                    >
                      Account Information
                    </span>
                  </h1>
                </div>
                <div
                  class="w-full h-2/3 bg-CoolGray-900 p-5 grid grid-cols-2 grid-rows-2"
                >
                  <div>
                    <v-text-field
                      v-model="username"
                      color="blue darken-4"
                      dark
                      label="Name"
                      class="pr-3"
                      required
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </div>
                  <div class="">
                    <v-text-field
                      v-model="user.email"
                      color="red lighten-5"
                      dark
                      label="Last name"
                      hint="example of helper text only on focus"
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </div>
                  <div>
                    <v-text-field
                      v-model="user.phoneNumber"
                      color="red lighten-5"
                      dark
                      label="Phone Number"
                      class="pr-3 mt-2"
                      required
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </div>
                  <div>
                    <v-select
                      v-model="order.Age"
                      color="red lighten-5"
                      dark
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                      rounded
                      dense
                      filled
                      class="mt-2"
                    ></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full h-1/4 flex space-x-2 align-center justify-center p-4"
            >
              <div
                class="h-full w-full flex flex-col lg:flex-row align-center justify-around lg:flex-row lg:justify-center align-center Tabs space-x-5"
                @click="toggleDialog('Processing')"
              >
                <img
                  src="~/assets/images/processing.png"
                  class="transform translate-x-4 lg:translate-x-0 lg:scale-110 w-20 object-contain"
                  alt=""
                />
                <h2
                  class="text-2xl lg:text-6xl font-mainFont text-mainBlue font-bold"
                >
                  Processing
                </h2>
              </div>
              <div
                class="Tabs h-full w-full flex flex-col justify-around lg:flex-row lg:justify-center align-center lg:space-x-5"
                @click="toggleDialog('Sent')"
              >
                <img
                  src="~/assets/images/sent.png"
                  class="w-20 object-contain"
                  alt=""
                />
                <h2
                  class="text-2xl lg:text-6xl font-mainFont text-mainBlue font-bold"
                >
                  Sent
                </h2>
              </div>
              <div
                class="Tabs h-full w-full flex flex-col lg:flex-row align-center justify-around lg:flex-row lg:justify-center align-center lg:space-x-5"
                @click="toggleDialog('Delivery')"
              >
                <img
                  src="~/assets/images/arrived1.png"
                  class="w-20 object-contain"
                  alt=""
                />
                <h2
                  class="text-2xl lg:text-6xl font-mainFont text-mainBlue font-bold"
                >
                  Delivered
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
            class="
              bg-mainBlue
              w-11/12
              lg:h-2/6
              h-5/6
              rounded-3xl
              font-mainFont
              mainDiv
            "
          >
            <div class="w-full h-full flex align-start p-7">
              <v-icon x-large dark>mdi-notebook-check</v-icon>
              <h1 class="text-4xl font-mainFont text-mainRed">
                <span class="ml-3"> Your Shipping Details </span>
              </h1>
              <div
                class="
                  flex flex-col
                  text-2xl
                  self-center
                  justify-center
                  items-center
                  text-gray-200
                "
              >
                <p>{{ order.Name }}</p>
                <p>{{ order.lastName }}</p>
                <p>{{ order.City }}</p>
                <p>{{ order.phoneNumber }}</p>
                <p>{{ order.Address }}</p>
                <div
                  v-for="item in orderProduct"
                  :key="item.id"
                  class="flex flex-row justify-contents-around"
                >
                  <p>{{ item.item.title }}</p>
                  <p>{{ item.quantity }}</p>
                </div>
              </div>
            </div>
          </div> -->
      </div>
    </v-dialog>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate,
    Insights: () => import('../components/Insights.vue'),
  },
  data() {
    return {
      insightTitle: null,
      dialog: false,
      error: null,
      emailSending: false,
      username: '',

      order: [],
      orderProduct: [],
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    },
  },

  mounted() {
    this.getProfile()
  },
  methods: {
    async getProfile() {
      try {
        this.loading = true
        this.$store.dispatch('setUser', this.$supabase.auth.user())

        const { data, error, status } = await this.$supabase
          .from('users')
          .select(`username`)
          .eq('id', this.$store.state.user.id)
          .single()

        if (error && status !== 406) throw error

        if (data) {
          console.log(data)
          this.username = data.username
        }
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },

    toggleDialog(Title) {
      this.insightTitle = Title
      this.$refs.Insights.toggleDialog(this.insightTitle)
    },
    // sendVerifyEmail() {
    //   this.emailSending = true
    //   const user = firebase.auth().currentUser
    //   const actionCodeSettings = {
    //     url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
    //   }
    //   user
    //     .sendEmailVerification(actionCodeSettings)
    //     .then(() => {
    //       this.emailSending = false
    //     })
    //     .catch((error) => {
    //       this.emailSending = false
    //       this.error = error.message
    //     })
    // },
  },
}
</script>

<style scoped>
.Tabs {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.Tabs:hover {
  transform: scale(1.03);
  filter: brightness(0.5);
}

.Tabs:active {
  transform: scale(1.02);
  filter: brightness(0.8);
}

.profilePageBtn {
  font-size: 1.7em;
  color: rgb(73, 73, 73);
  font-family: 'Acme', sans-serif;
  font-weight: 800;
  text-transform: capitalize;
}
span {
  text-align: center;
  font-size: 1.3em;
  display: flex;
  justify-self: center;
  align-self: center;
}
.editBtn {
  transition: ease-in-out 0.5s;
}

.editBtn:hover {
  color: #ff4a68;
  background-color: #120129;
}

.backGround {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}
.span {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.span:hover {
  filter: brightness(0.2);
}

.ProfileText {
  font-family: 'Acme', sans-serif;
}

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
