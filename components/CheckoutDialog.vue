<i18n lang="yaml">
en:
  checkout: 'Checkout'
  shippingDetail: 'Shipping Detail'
  submit: 'Submit'
  shoppingSummary: 'Shopping Summary'
  delete: 'Delete'
  shoppingSum: 'Shopping Sum'
fa:
  checkout: 'ادامه ی خرید'
  shippingDetail: 'اطلاعات ارسال'
  submit: 'تایید'
  shoppingSummary: 'خلاصه ی سبد خرید'
  delete: 'پاک کردن'
  shoppingSum: 'هزینه ی پرداختی'
</i18n>

<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      hide-overlay
      class="dialog"
    >
      <template #activator="{ on, attrs }">
        <button
          class="checkoutBtn p-4 lg:py-3 flex justify-center align-center"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span class="pl-4 checkoutText font-mainFont text-2xl lg:text-4xl">
            {{ $t('checkout') }}
          </span>
          <v-icon x-large class="pink--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>
      <div id="main" class="h-screen w-screen">
        <div
          class="flex h-full absolute w-full flex-col justify-items-center justify-center"
        >
          <LazyHydrate on-interaction>
            <PaymentDialog ref="PaymentDialog" class="self-center m-10" />
          </LazyHydrate>
        </div>

        <!-- <div class="hidden self-start absolute lg:flex">
          <v-btn x-large class="ml-4 mt-5" icon dark @click="dialog = false">
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
        </div> -->
        <div class="h-full w-full flex align-center justify-center">
          <div class="w-full h-full backGround">
            <div
              class="w-full lg:h-3/5 h-2/4 flex justify-center align-center flex-col"
            >
              <div
                class="w-full h-auto flex items-center bg-mainGreen lg:p-5 p-1"
              >
                <h1 class="flex items-center">
                  <span class="span transform scale-125" @click="dialog = false"
                    ><v-icon dark x-large color=""
                      >mdi-chevron-double-left</v-icon
                    ></span
                  >
                  <v-icon x-large dark>mdi-notebook-check</v-icon>
                  <span
                    class="font-mainFont text-mainBlue font-extrabold text-4xl"
                  >
                    {{ $t('shippingDetail') }}
                  </span>
                </h1>
              </div>
              <div
                class="grid grid-cols-2 grid-rows-4 grid-flow-row w-full lg:h-3/4 h-4/5 bg-CoolGray-800 p-5 gap-4"
              >
                <div>
                  <v-text-field
                    v-model="order.FullName"
                    color="blue darken-4"
                    dark
                    label="Full Name"
                    class=""
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <!-- <div class="">
                  <v-text-field
                    v-model="order.lastName"
                    color="red lighten-5"
                    dark
                    label="Last name"
                    hint="example of helper text only on focus"
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div> -->
                <div>
                  <v-text-field
                    v-model="order.City"
                    color="red lighten-5"
                    dark
                    label="City"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="order.Province"
                    color="red lighten-5"
                    dark
                    label="Province"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="order.PhoneNumber"
                    color="red lighten-5"
                    dark
                    label="Phone Number"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>

                <div>
                  <v-text-field
                    v-model="order.Email"
                    :rules="emailRules"
                    dark
                    dense
                    filled
                    rounded
                    label="E-mail"
                    required
                  />
                </div>
                <div>
                  <v-text-field
                    v-model="order.Password"
                    dark
                    dense
                    filled
                    rounded
                    required
                    label="Password"
                  />
                </div>

                <div class="col-span-2">
                  <v-text-field
                    v-model="order.Address"
                    color="red lighten-5"
                    dark
                    label="Address"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <button
                    class="font-mainFont w-full text-3xl text-mainBlue font-bold rounded-full bg-Rose-400 transition ease-in duration-200 hover:bg-red-200 px-4 py-2"
                  >
                    {{ $t('submit') }}
                  </button>
                </div>

                <!-- <div>
                  <div class="mt-3 d-flex flex-column justify-end align-center">
                  </div>
                </div> -->
              </div>
            </div>

            <div class="w-full lg:h-2/5 h-2/4">
              <div class="bg-mainGreen">
                <h1 class="pa-5 flex items-center">
                  <v-icon x-large dark>mdi-cart-arrow-right</v-icon>
                  <span
                    class="font-mainFont text-mainBlue font-extrabold text-4xl"
                  >
                    {{ $t('shoppingSummary') }}
                  </span>
                </h1>
              </div>

              <div
                class="w-full h-3/4 flex lg:p-7 flex-col lg:flex-row p-4 bg-Indigo-800"
              >
                <div
                  class="w-full lg:w-5/6 h-full overflow-x-scroll self-start lg:gap-2 grid grid-cols-2 lg:grid-cols-4"
                >
                  <div
                    v-for="item in cart"
                    :key="item.id"
                    class="w-full h-full flex backGround flex-col justify-center align-center self-start"
                  >
                    <div
                      class="w-2/3 h-full flex justify-center align-center space-x-3"
                    >
                      <img
                        class="float-left rounded-full lg:w-24 lg:h-24 h-20 w-20"
                        :src="item.item.image"
                      />
                      <div
                        class="space-y-2 flex justify-end flex-col align-start"
                      >
                        <h1 class="font-mainFont font-extrabold text-2xl">
                          {{ item.item.title }}
                        </h1>
                        <button
                          class="py-1 bg-Rose-300 border-2 border-pink-800 rounded-full"
                          @click.prevent="removeCartProduct(item)"
                        >
                          <span
                            class="px-5 font-mainFont text-2xl text-pink-800"
                          >
                            {{ $t('delete') }}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="lg:w-1/6 w-full h-full lg:space-y-4 flex lg:flex-col space-x-4 justify-around align-center"
                >
                  <h1
                    class="font-mainFont text-center text-3xl flex justify-center items-center bg-white p-5 rounded-lg text-mainBlue font-semibold"
                  >
                    {{ $t('shoppingSum') }} : {{ total }} IRL
                  </h1>
                  <button
                    class="checkoutBtn lg:p-4 p-2"
                    @click="submitOrderDetail"
                  >
                    <span class="pl-4 checkoutText font-mainFont text-2xl">
                      {{ $t('checkout') }}
                    </span>
                    <v-icon x-large class="pink--text text--darken-2 sm:hidden"
                      >mdi-arrow-right-circle</v-icon
                    >
                  </button>
                </div>
              </div>
            </div>
            <!-- <div
                class="
                  items
                  flex
                  container
                  align-center
                  rounded-xl
                  m-px
                  flex-col
                "
              >
                <p v-for="item in cartItem" :key="item.id">
                  {{ item.item.title }}
                </p>
              </div>
              <div
                v-if="cartTotalPrice"
                class="
                  total
                  flex flex-end
                  m-3
                  flex-row
                  align-start
                  justify-content-end
                "
              >
                <img class="w-16 m-px" src="~/assets/images/buy-button.png" alt="" />
                total: {{ cartTotalPrice }}$
              </div> -->
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    PaymentDialog: () => import('../components/PaymentDialog.vue'),
  },
  data() {
    return {
      order: {
        Email: '',
        Password: '',
        FullName: null,
        City: null,
        Province: null,
        Address: null,
        PhoneNumber: null,
        Age: null,
      },
      dialog: false,
      loading: false,
      orderDetailId: null,

      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    },
    total() {
      return this.cartTotalPrice + 15
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    removeCartProduct(Product) {
      this.$store.dispatch('removeCartProduct', Product)
    },
    async submitOrderDetail() {
      this.loading = true
      try {
        if (this.user) {
          const { data, error } = await this.$supabase
            .from('order-detail')
            .insert([
              {
                'user-id': this.user.id,
                'full-address': this.order.Address,
                city: this.order.City,
                province: this.order.Province,
                'phone-number': this.order.PhoneNumber,
                'full-name': this.order.FullName,
              },
            ])
          if (error) throw error
          this.orderDetailId = data[0].id
          alert('orderDetail added')
        } else {
          alert('pleaes sign in to your account')
        }
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.submitOrder()
      }
    },
    async submitFunciton(item) {
      try {
        console.log(this.orderDetailId)
        const { error } = await this.$supabase.from('order-items').insert([
          {
            'order-detail-id': this.orderDetailId,
            product_item: item.item.id,
            product_quantity: item.quantity,
          },
        ])
        console.log(item.quantity)
        if (error) throw error
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        alert('operation Completed')
      }
    },
    async submitOrder() {
      await this.cart.forEach((item) => {
        this.submitFunciton(item)
      })
      alert('orderItems added')
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
.span {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.span:hover {
  filter: brightness(0.2);
}

.backGround {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
}

.saveBtn {
  /* background-color: #0baf78; */
  /* border: 3px solid #0baf78; */
  /* color: #f3f3f3; */
  transition: ease-in-out 0.5s;
}
.saveBtn:hover {
  background-color: #120129;
  color: #ff4a68;
  /* background-color: #d4e300;
  color: #001d2f; */
  /* border: 3px solid #0793c2; */
}
.dialog {
  z-index: 300;
}
/* .checkoutText {
  font-family: 'Lato', sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
} */
.checkoutBtn {
  background-color: #63fdc2;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
}
.checkoutBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
.checkoutBtn:active {
  transform: scale(1.05);
  filter: brightness(0.5);
}
/* .checkoutBtnNew {
  font-size: 30px;
  border: solid 2px #120129;
  color: #ff4a68;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.checkoutBtnNew:hover {
  color: #120129;
  background-color: #ff4a68;
} */
.items {
  color: #120129;
  font-size: 26px;
}
.total {
  text-transform: capitalize;
  font-size: 30px;
}

/* input[type='radio'] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type='radio'] + label span:hover,
input[type='radio'] + label:hover span {
  transform: scale(1.2);
}

input[type='radio']:checked + label span {
  background-color: #3490dc;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type='radio']:checked + label {
  color: #3490dc;
} */
</style>
