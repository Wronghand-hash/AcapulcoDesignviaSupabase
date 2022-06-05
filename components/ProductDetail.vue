<i18n lang="yaml">
en:
  learnMore: 'learn more!'

fa:
  learnMore: 'نشونم بده'
</i18n>
<template>
  <div class="">
    <v-dialog v-model="dialog" class="dialog" fullscreen>
      <template #activator="{ on, attrs }">
        <button
          class="learnMore flex py-1 px-5 justify-center align-center bg-mainGreen rounded-full"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span
            class="checkoutText text-mainBlue pl-2 text-2xl"
            @click="entrance"
          >
            {{ $t('learnMore') }}
          </span>
          <v-icon large class="blue--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>

      <div
        class="w-screen h-11/12 lg:h-full bg-blue-300 p-2 space-y-4 lg:space-x-6 lg:space-y-0 productDetail flex lg:justify-evenly flex-col lg:flex-row"
      >
        <div
          class="absolute p-2 text-red-500 left-0 top-0"
          @click="dialog = false"
        >
          <v-icon class="text-red-500 text-2xl">mdi-close</v-icon>
        </div>
        <div
          class="lg:w-full w-full lg:h-full h-36 flex justify-center items-center align-center flex-col p-2 rounded-lg bg-green-700"
        >
          <!-- <InnerImageZoom src="../assets/images/Chao.webp" />
              <client-only> q
                <image-zoom regular-webp="../assets/images/Chao.webp"> </image-zoom>
              </client-only> -->
          <h1 class="font-black text-4xl lg:text-9xl text-white font-mainFont">
            {{ title }}
          </h1>
          <h2 class="font-black text-3xl lg:text-8xl text-white font-mainFont">
            {{ price }}
          </h2>
          <div class="p-3">
            <h2
              class="font-white lg:text-2xl text-xl text-white font-mainFont leading-5"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium asperiores fugiat repell
            </h2>
          </div>

          <button
            class="bg-goldie p-3 font-mainFont text-2xl rounded-md cursor-pointer font-black transition ease-in duration-200 hover:bg-yellow-800"
          >
            Add to Cart
            <v-icon color="white" class="">mdi-basket-plus-outline</v-icon>
          </button>
        </div>
        <div class="flex flex-col-reverse space-y-2 h-full w-full">
          <div
            class="w-full lg:h-full h-1/4 flex justify-start items-center flex-col p-6 rounded-lg bg-green-200"
          >
            <div class="flex justify-around w-full m-2 space-x-1">
              <div
                class="bg-yellow-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-pink-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-green-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-red-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-blue-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-purple-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-Cyan-500 hover:border-2 hover:border-gray-800 rounded-full border-2 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
            </div>

            <div class="flex justify-around space-x-1 h-14 p-2 w-full">
              <div
                class="flex flex-col bg-gray-600 justify-center align-center text-white rounded hover:bg-gray-800"
              >
                <p class="self-center">2xl</p>
              </div>
              <div
                class="flex flex-col bg-gray-600 justify-center align-center text-white rounded hover:bg-gray-800"
              >
                <p class="self-center">xl</p>
              </div>
              <div
                class="flex flex-col bg-gray-600 justify-center align-center text-white rounded hover:bg-gray-800"
              >
                <p class="self-center">lg</p>
              </div>
              <div
                class="flex flex-col bg-gray-600 justify-center align-center text-white rounded hover:bg-gray-800"
              >
                <p class="self-center">md</p>
              </div>
              <div
                class="flex flex-col bg-gray-600 justify-center align-center text-white rounded hover:bg-gray-800"
              >
                <p class="self-center">sm</p>
              </div>
            </div>
          </div>

          <div
            class="mb-2 h-full align-center filter drop-shadow-2xl rounded-lg flex justify-center"
          >
            <v-carousel class="w-full h-full lg:h-full">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                cycle
                :src="item"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <img
                  v-lazy-load
                  :src="item"
                  alt=""
                  class="object-contain h-full w-full"
                />
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>

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
                {{ product.category }}
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
// import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
// import imageZoom from 'vue-image-zoomer'

// import InnerImageZoom from 'vue-inner-image-zoom'
export default {
  components: {
    // InnerImageZoom,
    // imageZoom,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    product: Object,
  },
  data() {
    return {
      imgUrl: null,
      dialog: false,
      title: 'loading',
      imgUrl2: null,
      items: [],
      price: 'loading',
      description: 'loading',
      Product: {
        item: {
          title: 'loading',
          price: 'loading',
        },
        quantity: 1,
      },
    }
  },

  computed: {
    // category() {
    //   return this.$store.state.category
    // },
  },

  mounted() {},

  methods: {
    entrance() {
      this.getImage()
      this.getImage2()
      setTimeout(() => {
        this.title = this.product.item.title
        this.price = this.product.item.price
        this.description = this.product.item.description
      }, 2000)
    },
    async getImage() {
      if (this.product.item.image_url) {
        try {
          const { data, error } = await this.$supabase.storage
            .from('product-images')
            .download(this.product.item.image_url)
          if (error) throw error
          this.imgUrl = URL.createObjectURL(data)
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          this.items.push(this.imgUrl)
          console.log(this.items)
        }
      }
    },
    async getImage2() {
      if (this.product.item.img2) {
        try {
          const { data, error } = await this.$supabase.storage
            .from('product-images')
            .download(this.product.item.img2)
          if (error) throw error
          this.imgUrl2 = URL.createObjectURL(data)
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          this.items.push(this.imgUrl2)
          console.log(this.items)
        }
      }
    },
    // categorySelect(selected) {
    //   this.category = selected
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
.dialog {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}
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

 */
.dialog {
  z-index: 300;
}
</style>
