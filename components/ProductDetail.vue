<template>
  <div>
    <v-dialog v-model="dialog" class="dialog" fullscreen>
      <template #activator="{ on, attrs }">
        <button
          class="learnMore flex py-1 px-5 justify-center align-center bg-mainGreen rounded-full"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span class="checkoutText text-mainBlue pl-2 font-mainFont text-2xl">
            Learn More!
          </span>
          <v-icon large class="blue--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>

      <div
        class="w-screen h-full bg-green-100 p-9 space-y-4 lg:space-x-6 lg:space-y-0 productDetail flex flex-col lg:flex-row"
      >
        <div
          class="lg:w-3/4 w-full lg:h-full h-3/4 filter drop-shadow-2xl rounded-lg flex justify-center"
        >
          <no-ssr>
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
            >
            </ProductZoomer>
          </no-ssr>
        </div>
        <div
          class="lg:w-1/4 w-full lg:h-full h-1/4 rounded-lg bg-green-500"
        ></div>

        <!-- <v-icon light x-large class="m-7">mdi-chevron-double-left</v-icon> -->
        <!-- <div class="w-2/5 h-full bg-mainRed">
          
        </div> -->
        <!-- <div class="w-3/5 p-9 flex-col flex justify-around">
          <div class="flex justify-between flex-grow-0">
            <h1
              class="md:text-5xl text-4xl text-blueGray-900 font-bold font-mainFont"
            >
              {{ product.title }}
              <h3 class="text-gray-600 font-thin text-2xl font-mainFont">
                {{ product.catagory }}
              </h3>
            </h1>
            <h1
              class="md:text-5xl text-4xl text-blueGray-900 font-bold font-mainFont"
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
                class="md:pb-2 md:pl-2"
                >mdi-basket-plus-outline</v-icon
              >
            </button>
            <button
              class="bg-mainBlue text-mainRed flex flex-col align-center justify-center rounded-full"
            >
              <v-icon
                color="white
"
                class="md:pb-2 md:pl-2"
                >mdi-share-variant</v-icon
              >
            </button>
          </div>
        </div> -->
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

      images: {
        thumbs: [
          {
            id: 1,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
          {
            id: 2,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
        ],
        normal_size: [
          {
            id: 1,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
          {
            id: 2,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
        ],
        large_size: [
          {
            id: 1,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
          {
            id: 2,
            url: 'http://localhost:3000/_nuxt/assets/images/tree2.webp',
          },
        ],
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: 'pane',
        hoverDelay: 300,
        namespace: 'zoomer-bottom',
        move_by_click: false,
        scroll_items: 4,
        choosed_thumb_border_color: '#dd2c00',
        scroller_position: 'bottom',
        zoomer_pane_position: 'right',
      },
    }
  },

  computed: {
    // catagory() {
    //   return this.$store.state.catagory
    // },
  },
  mounted() {},

  methods: {
    // catagorySelect(selected) {
    //   this.catagory = selected
    // },
    // async getImage() {
    //   if (this.product.image_url) {
    //     try {
    //       const { data, error } = await this.$supabase.storage
    //         .from('product-images')
    //         .download(this.product.image_url)
    //       if (error) throw error
    //       this.imgUrl = URL.createObjectURL(data)
    //     } catch (error) {
    //       alert(error.error_description || error.message)
    //     }
    //   }
    // },
    // addToCart() {
    //   this.$store.commit('AddToCart', this.Product)
    // },
  },
}
</script>

<style scoped>
/* .learnMoreBtn {
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
  transform: scale(0.97);
  filter: brightness(1);
} */
.dialog {
  z-index: 300;
}
</style>
