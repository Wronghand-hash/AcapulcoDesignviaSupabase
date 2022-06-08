<i18n lang="yaml">
en:
  profile: 'My Profile'
  myAddress: 'My address'
  accountInformation: 'Account Information'
  proccessing: 'Processing'
  sent: 'Sent'
  delivered: 'Delivered'
fa:
  profile: 'پروفایل من'
  myAddress: 'آدرس من'
  accountInformation: 'اطلاعات حساب'
  proccessing: 'در حال پردازش'
  sent: 'فرستاده شد'
  delivered: 'تحویل داده شده'
</i18n>

<template>
  <div class="h-screen w-screen bg-Indigo-900">
    <div
      class="flex flex-col absolute justify-items-center justify-center align-center w-full h-screen"
    >
      <LazyHydrate on-interaction>
        <Insights ref="Insights" />
      </LazyHydrate>
    </div>
    <div class="flex flex-col justify-center h-full w-full align-center">
      <div class="h-full w-full backGround">
        <div class="w-full h-3/4">
          <div class="w-full h-3/6">
            <div
              class="w-full h-1/3 bg-mainGreen flex flex-col items-start justify-center"
            >
              <h2
                class="p-4 flex font-mainFont text-mainBlue font-extrabold justify-center items-center space-x-1 lg:text-3xl text-2xl"
              >
                <NuxtLink v-if="$route.path.toString().includes('fa')" to="/fa">
                  <span
                    class="transform scale-125 span flex justify-center items-center"
                    ><v-icon dark x-large color=""
                      >mdi-chevron-double-left</v-icon
                    ></span
                  >
                </NuxtLink>
                <NuxtLink v-else to="/">
                  <span
                    class="transform scale-125 span flex justify-center items-center"
                    ><v-icon dark x-large color=""
                      >mdi-chevron-double-left</v-icon
                    ></span
                  >
                </NuxtLink>

                <span class="flex justify-center items-center">
                  <v-icon x-large dark class="transform scale-125 mr-4"
                    >mdi-home-edit-outline</v-icon
                  >
                  {{ $t('myAddress') }}
                </span>
              </h2>
            </div>
            <div
              class="w-full h-2/3 bg-CoolGray-900 flex flex-col items-center justify-between p-7"
            >
              <div class="w-full flex space-x-2">
                <v-text-field
                  color="red lighten-5"
                  dark
                  label="City"
                  rounded
                  dense
                  filled
                  class=" "
                ></v-text-field>
                <v-text-field
                  color="red lighten-5"
                  dark
                  label="Province"
                  rounded
                  dense
                  filled
                ></v-text-field>
              </div>
              <div class="w-full">
                <v-text-field
                  color="red lighten-5"
                  dark
                  label="Address"
                  rounded
                  dense
                  filled
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="w-full h-3/6 ordersDiv">
            <div class="w-full h-1/3 flex items-center bg-mainRed">
              <h1 class="p-5 items-center flex text-3xl">
                <v-icon x-large dark>mdi-account-edit-outline</v-icon>
                <span
                  class="font-mainFont text-mainBlue font-extrabold text-5xl ml-2"
                >
                  {{ $t('accountInformation') }}
                </span>
              </h1>
            </div>
            <div
              class="w-full h-2/3 bg-CoolGray-900 flex flex-col items-center justify-between p-7"
            >
              <div class="flex w-full space-x-2">
                <v-text-field
                  color="blue darken-4"
                  dark
                  label="Name"
                  required
                  rounded
                  dense
                  filled
                ></v-text-field>
                <v-text-field
                  color="red lighten-5"
                  dark
                  label="Last name"
                  hint="example of helper text only on focus"
                  rounded
                  dense
                  filled
                ></v-text-field>
              </div>
              <div class="flex w-full space-x-2">
                <v-text-field
                  color="red lighten-5"
                  dark
                  label="Phone Number"
                  required
                  rounded
                  dense
                  filled
                ></v-text-field>
                <v-select
                  color="red lighten-5"
                  dark
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                  rounded
                  dense
                  filled
                ></v-select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-1/4 flex space-x-2 align-center justify-center p-4"
        >
          <div
            class="h-full w-full flex flex-col items-center justify-around lg:justify-between Tabs"
            @click="toggleDialog('Processing')"
          >
            <img
              src="~/assets/images/processing.png"
              class="w-20 h-24 object-contain"
              alt=""
            />
            <h2
              class="text-2xl lg:text-5xl text-center font-mainFont text-mainBlue font-bold"
            >
              {{ $t('proccessing') }}
            </h2>
          </div>
          <div
            class="Tabs h-full w-full flex flex-col justify-around lg:justify-between items-center"
            @click="toggleDialog('Order')"
          >
            <img
              src="~/assets/images/sent.png"
              class="w-20 h-24 object-contain"
              alt=""
            />
            <h2
              class="text-2xl lg:text-5xl text-center font-mainFont text-mainBlue font-bold"
            >
              {{ $t('sent') }}
            </h2>
          </div>
          <div
            class="Tabs h-full w-full flex flex-col items-center justify-around lg:justify-between"
            @click="toggleDialog('Delivery')"
          >
            <img
              src="~/assets/images/arrived1.png"
              class="w-20 h-20 object-contain"
              alt=""
            />
            <h2
              class="text-2xl lg:text-5xl text-center font-mainFont text-mainBlue font-bold"
            >
              {{ $t('delivered') }}
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
    this.$store.dispatch('fetchOrders')
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
* {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
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

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
