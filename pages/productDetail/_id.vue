<i18n lang="yaml">
en:
  learnMore: 'learn more!'

fa:
  learnMore: 'نشونم بده'
</i18n>
<template>
  <v-app>
    <LazyHydrate class="z-50" when-idle>
      <Navbar
        v-gsap.to="{
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: 'circ.out',
        }"
        class="z-50"
      />
    </LazyHydrate>
    <div
      class="w-screen h-full lg:h-full bg-Emerald-100 p-2 space-y-4 lg:space-x-6 lg:space-y-0 productDetail flex lg:justify-evenly flex-col lg:flex-row"
    >
      <div class="flex flex-col space-y-2 h-full w-full">
        <div
          class="w-full h-full align-center space-x-2 filter drop-shadow-2xl rounded-lg flex justify-center"
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
          <div
            class="lg:w-full hidden lg:block w-full lg:h-full h-52 flex justify-center items-center align-center flex-col p-2 rounded-lg bg-darkPurple border-4 border-Amber-400"
          >
            <!-- <InnerImageZoom src="../assets/images/Chao.webp" />
              <client-only> q
                <image-zoom regular-webp="../assets/images/Chao.webp"> </image-zoom>
              </client-only> -->
            <h1
              class="font-black text-4xl lg:text-9xl text-white font-mainFont"
            >
              {{ product.title }}
            </h1>
            <h2
              class="font-black text-3xl lg:text-8xl text-white font-mainFont"
            >
              {{ product.price }}
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
        </div>

        <div class="flex flex-col-reverse lg:flex-row space-y-2 h-full w-full">
          <div
            class="w-full my-4 lg:h-full h-1/4 flex justify-start items-center flex-col p-4 rounded-lg bg-purple-900 border-4 border-Amber-500"
          >
            <div class="flex justify-around w-8/12 m-2 space-x-1">
              <div
                class="bg-yellow-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-pink-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-green-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-red-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-blue-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-purple-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
              <div
                class="bg-Cyan-500 hover:border-2 hover:border-gray-800 rounded-full border-4 lg:border-8 w-5 h-5 lg:w-16 lg:h-16"
              ></div>
            </div>

            <div class="flex justify-around space-x-2 h-14 p-2 w-full lg:w-10/12">
              <div
                class="flex flex-col bg-white justify-center align-center hover:text-white transition rounded hover:bg-gray-800"
              >
                <p class="self-center">2xl</p>
              </div>
              <div
                class="flex flex-col bg-white justify-center align-center hover:text-white transition rounded hover:bg-gray-800"
              >
                <p class="self-center">xl</p>
              </div>
              <div
                class="flex flex-col bg-white justify-center align-center hover:text-white transition rounded hover:bg-gray-800"
              >
                <p class="self-center">lg</p>
              </div>
              <div
                class="flex flex-col bg-white justify-center align-center hover:text-white transition rounded hover:bg-gray-800"
              >
                <p class="self-center">md</p>
              </div>
              <div
                class="flex flex-col bg-white justify-center align-center hover:text-white transition rounded hover:bg-gray-800"
              >
                <p class="self-center">sm</p>
              </div>
            </div>
          </div>
          <div
            class="lg:w-full lg:hidden w-full lg:h-full h-52 flex justify-center items-center align-center flex-col p-2 rounded-lg bg-darkPurple border-4 border-Amber-400"
          >
            <!-- <InnerImageZoom src="../assets/images/Chao.webp" />
              <client-only> q
                <image-zoom regular-webp="../assets/images/Chao.webp"> </image-zoom>
              </client-only> -->
            <h1
              class="font-black text-4xl lg:text-9xl text-white font-mainFont"
            >
              {{ product.title }}
            </h1>
            <h2
              class="font-black text-3xl lg:text-8xl text-white font-mainFont"
            >
              {{ product.price }}
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
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
// import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
// import imageZoom from 'vue-image-zoomer'

// import InnerImageZoom from 'vue-inner-image-zoom'
export default {
  components: {
    LazyHydrate,
    Navbar: () => import('~/layouts/TheNavbar.vue'),
    // InnerImageZoom,
    // imageZoom,
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
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
        item: null,
        quantity: 1,
      },
      product: 'loading',
    }
  },

  computed: {
    // category() {
    //   return this.$store.state.category
    // },
  },

  mounted() {
    this.getItem()
    console.log(this.$route.params.id)
  },

  methods: {
    async getItem() {
      try {
        const { data, error } = await this.$supabase
          .from('products')
          .select()
          .eq('id', this.$route.params.id)
        if (error) throw error
        this.product = data[0]
        console.log(data[0])
      } catch (error) {
      } finally {
        this.getImage()
        this.getImage2()
      }
    },
    async getImage() {
      if (this.product.image_url) {
        try {
          const { data, error } = await this.$supabase.storage
            .from('product-images')
            .download(this.product.image_url)
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
      if (this.product.img2) {
        try {
          const { data, error } = await this.$supabase.storage
            .from('product-images')
            .download(this.product.img2)
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
