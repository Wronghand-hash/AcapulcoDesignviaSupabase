<i18n lang="yaml">
en:
  addedtoCart: 'Item added successfully'

fa:
  addedtoCart: 'به سبد خرید اضافه شد'
</i18n>
<template>
  <div>
    <div
      class="flex flex-col lg:h-72 h-dialog lg:w-96 lg:flex-row justify-center align-center lg:space-x-3 cardBackground productCard"
    >
      <div
        class="lg:h-full bg-white h-2/5 w-full lg:w-2/5 flex justify-center align-center overflow-hidden"
      >
        <img :src="imgUrl" alt="" class="object-contain h-full w-full" />
      </div>
      <div
        class="h-3/5 w-full lg:w-3/5 lg:h-full flex flex-col justify-between align-center space-y-3 p-2 sm:py-3"
      >
        <div
          class="w-14 h-14 rounded-full fixed transform translate-x-8 lg:-translate-y-5 -translate-y-9 self-end flex justify-center align-center bg-goldie shoppingBtn"
          @click="addToCart"
        >
          <span class="shoppingBtnSpan">
            <v-icon color="white" class="">mdi-basket-plus-outline</v-icon>
          </span>
        </div>
        <div class="w-full h-3/4 flex flex-col justify-around align-center">
          <h1 class="text-5xl text-mainBlue font-bold text-center">
            {{ product.title }}
          </h1>
          <h3 class="text-2xl text-gray-600 font-thin text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p
            class="lg:text-4xl text-3xl text-mainBlue text-center font-extrabold"
          >
            {{ product.price }} IRL
          </p>
        </div>
        <div class="w-full h-1/4 flex justify-center align-center">
          <LazyHydrate on-click>
            <ProductDetail :product="Product" />
          </LazyHydrate>
        </div>
        <!-- 
        
        <div class="flex align-center justify-center w-full h-full space-x-2">
          <button
            class="
              learnMoreBtn
              flex
              py-2
              align-center
              justify-center
              rounded-full
              bg-green-300
            "
            @click="addToCart"
          >
            <span class="text-xl pl-2 font-mainFont text-mainBlue">
              Add to Cart
            
          </button>
        </div> -->
      </div>
    </div>
    <v-alert
      v-show="addedtoCart"
      transition="fade-transition"
      color="green"
      type="success"
      class="text-4xl text-mainBlue flex items-center justify-center"
    >
      {{ $t('addedtoCart') }}
    </v-alert>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,

    ProductDetail: () => import('../components/ProductDetail.vue'),
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    product: Object,
  },

  data() {
    return {
      addedtoCart: false,
      imgUrl: '',
      Product: {
        item: this.product,
        quantity: 1,
      },
    }
  },

  computed: {
    catagory() {
      return this.$store.state.catagory
    },
  },
  mounted() {
    this.getImage()
  },

  methods: {
    catagorySelect(selected) {
      this.catagory = selected
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
        }
      }
    },
    addToCart() {
      this.$store.commit('AddToCart', this.Product)
      this.addedtoCart = true
      setTimeout(() => {
        this.addedtoCart = false
      }, 3000)
    },
  },
}
</script>

<style scoped>
.learnMoreBtn:hover {
  transform: scale(0.95);
  background-color: #120129;
  color: #ff4a68;
}
.cardBackground {
  box-shadow: 0 8px 32px 0 #1f26875e;

  border-radius: 10px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  transition: ease-in-out 0.2s;
}
.shoppingBtn {
  transition: ease-in-out 0.3s;
  cursor: pointer;
}
.shoppingBtn:hover {
  filter: brightness(1.1);
}
.shoppingBtn:active {
  filter: brightness(0.5);
}
.cardBackground {
  /* backdrop-filter: saturate(180%);
  -webkit-backdrop-filter: blur(13px) saturate(180%); */
  background-color: rgba(255, 255, 255, 0.79);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
