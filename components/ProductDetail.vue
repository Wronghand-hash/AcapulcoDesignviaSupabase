<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      class="dialog"
      width="900px"
      :fullscreen="$vuetify.breakpoint.smOnly"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="learnMore flex py-1 px-5 justify-center align-center bg-green-300 rounded-full"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span class="checkoutText pl-2 font-mainFont text-2xl">
            Learn More!
          </span>
          <v-icon large class="pink--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>

      <div class="w-full h-dialog flex">
        <div class="w-2/5 h-full bg-mainRed">
          <!-- <img
            src="~/assets/images/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
            alt=""
            class=""
          /> -->
        </div>

        <div class="w-3/5 p-9 p-7 bg-gray-100 flex-col flex justify-around">
          <div class="flex justify-between flex-grow-0">
            <h1
              class="lg:text-5xl text-4xl text-blueGray-900 font-bold font-mainFont"
            >
              {{ product.title }}
              <h3 class="text-gray-600 font-thin text-2xl font-mainFont">
                {{ product.catagory }}
              </h3>
            </h1>
            <h1
              class="lg:text-5xl text-4xl text-blueGray-900 font-bold font-mainFont"
            >
              {{ product.price }}$
            </h1>
          </div>

          <div class="h-4/5">
            <h2 class="text-mainBlue font-mainFont text-3xl font-thin">
              Desctiption
            </h2>
            <p class="text-gray-500 text-2xl font-thin font-mainFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              explicabo aut cum veniam iste aliquid
            </p>
          </div>
          <div
            v-for="item in cartItem"
            :key="item.id"
            class="flex align-center self-end justify-center"
          >
            <v-btn
              small
              x-large
              fab
              plain
              class="minus"
              color="#00ffaa"
              @click="decrementQuantity(item)"
            >
              <v-icon x-large>mdi-minus</v-icon></v-btn
            >
            <p class="px-3 text-6xl font-extrabold text-mainBlue font-mainFont">
              {{ item.quantity }}
            </p>
            <v-btn
              light
              x-large
              fab
              plain
              class="plus"
              color="#00ffaa"
              @click="incrementQuantity(item)"
              ><v-icon x-large>mdi-plus</v-icon></v-btn
            >
          </div>
          <div class="flex justify-around h-1/5 space-x-5">
            <button
              class="learnMoreBtn flex flex-col align-center justify-center rounded-full"
              @click.stop="addToCart"
            >
              <v-icon
                color="white
"
                class="lg:pb-2 lg:pl-2"
                >mdi-basket-plus-outline</v-icon
              >
            </button>
            <button
              class="bg-mainBlue text-mainRed flex flex-col align-center justify-center rounded-full"
            >
              <v-icon
                color="white
"
                class="lg:pb-2 lg:pl-2"
                >mdi-share-variant</v-icon
              >
            </button>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      dialog: false,

      cart: [],

      Product: {
        item: this.product,
        quantity: 1,
      },
    }
  },
  computed: {
    cartTotalAmount() {
      return this.$store.getters.cartItemCount
    },
    cartItem() {
      return this.$store.state.cart
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('AddToCart', this.Product)
    },
    incrementQuantity(Product) {
      this.$store.commit('incerementQuantity', Product)
    },
    decrementQuantity(Product) {
      this.$store.commit('decrementQuantity', Product)
    },
  },
}
</script>

<style scoped>
.learnMoreBtn {
  background-color: #ff4a68;
  color: #120129;
  transition: ease-in-out 0.2s;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}

.learnMore {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.learnMore:hover {
  transform: scale(1.05);
  filter: brightness(0.5);
}

.learnMore:active {
  transform: scale(0.95);
  filter: brightness(1);
}
</style>
