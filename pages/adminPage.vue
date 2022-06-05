<i18n lang="yaml">
en:
  total: 'Total'
  products: 'Products'
  delivered: 'Delivered'
  shipment: 'Shipment'
  orders: 'Orders'
  something: 'Something to add?'
  detail: 'Detail'
  statusProcessing: 'Status: Processing'
  list: 'List'
  status: 'Status'
  fullName: 'Full Name'
  phoneNumber: 'Phone Number'
  canceled: 'Canceled'
  quantity: 'Quantity'
  address: 'Address'
  city: 'City'
  province: 'Province'
  price: 'Price'
  title: 'Title'
  items: 'Items'
  name: 'Name'
  date: 'Date'

fa:
  total: 'تمامی'
  products: 'محصولات'
  delivered: 'تحویل داده شده'
  shipment: 'فرستاده شده'
  orders: 'سفارشات'
  something: 'میخواین چیزی اضافه کنید؟'
  detail: 'جزئیات'
  statusProcessing: 'وضعیت: درحال پردازش'
  list: 'فهرست'
  status: 'وضعیت'
  fullName: 'نام و نام خانوادگی'
  phoneNumber: 'شماره تلفن'
  canceled: 'کنسل شده'
  quantity: 'تعداد'
  address: 'آدرس'
  city: 'شهر'
  province: 'استان'
  price: 'قیمت'
  title: 'نام محصول'
  items: 'اجناس'
  name: 'نام'
  date: 'تاریخ'
</i18n>

<template>
  <v-app id="app">
    <div id="main" class="max-h-full w-screen overflow-x-hidden">
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

      <div class="flex flex-col w-full h-full mt-20 items-center">
        <div
          class="bg-pink-600 flex h-32 lg:h-40 self-center justify-around align-center mb-4 rounded shadow-2xl w-9/12"
        >
          <h2 class="text-3xl text-white font-bold">Kissy</h2>
          <div class="w-20 h-20 bg-yellow-500 rounded-full"></div>
        </div>
        <div
          class="align-center mb-8 lis w-full lg:w-2/3 flex flex-col align-center rounded-2xl justify-center"
        >
          <div
            class="buttonContainer border-2 border-pink-500 shadow-2xl h-32 px-1 z-10 lg:p-10 w-10/12 flex justify-center align-center content-center rounded-2xl"
          >
            <div
              :class="{
                'bg-pink-500': openTab === 1,
                'text-white': openTab === 1,
              }"
              class="lis lg:h-full transition w-full h-3/6 flex flex-col justify-center cursor-pointer align-center rounded-2xl"
              @click="tab1() & toggleTabs(1)"
            >
              <h2 class="font-bold text-2xl">Sells</h2>
            </div>
            <div
              :class="{
                'bg-pink-500': openTab === 2,
                'text-white': openTab === 2,
              }"
              class="lis lg:h-full transition w-11/12 h-3/6 flex flex-col justify-center cursor-pointer align-center rounded-2xl"
              @click="tab2() & toggleTabs(2)"
            >
              <h2 class="font-bold text-2xl">Products</h2>
            </div>
            <div
              :class="{
                'bg-pink-500': openTab === 3,
                'text-white': openTab === 3,
              }"
              class="lis lg:h-full transition w-full h-3/6 flex flex-col justify-center cursor-pointer align-center rounded-2xl"
              @click="tab3() & toggleTabs(3)"
            >
              <h2 class="font-bold text-2xl">Orders</h2>
            </div>
          </div>
        </div>
        <div class="w-11/12 h-full flex flex-col">
          <div
            class="flex flex-cols justify-center align-center w-full h-full lg:p-4 col-span-4"
          >
            <div
              class="admin bg-pink-200 border-4 border-pink-700 shadow-2xl px-4 flex flex-row justify-center self-center w-full rounded h-full"
            >
              <div
                class="tab-content h-full w-full place-items-center content-center justify-center flex self-center tab-space"
              >
                <div
                  class="flex p-4 flex-col place-items-center justify-center h-full w-full text-gray-200"
                  :class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <div
                    class="w-full h-full md:flex-row space-y-4 lg:flex-row flex justify-evenly flex-col"
                  >
                    <div
                      class="totalProducts flex flex-col justify-center align-center"
                    >
                      <h2 class="text-center">{{ $t('total') }}</h2>
                      <h2
                        class="ProductLength bg-pink-300 px-2 border-t-2 text-center rounded border-b-2"
                      >
                        {{ products.length }}
                      </h2>
                      <h2 class="text-center">{{ $t('products') }}</h2>
                    </div>

                    <div
                      class="sellsRecord flex flex-col justify-center align-center border-r-2 border-l-2 rounded"
                    >
                      <h2 class="text-center">{{ $t('total') }}</h2>
                      <h2
                        class="SellsLength bg-pink-300 px-2 border-t-2 text-center rounded border-b-2"
                      >
                        {{ orders.length }}
                      </h2>
                      <h2 class="text-center">{{ $t('orders') }}</h2>
                    </div>

                    <div
                      class="totalShipment flex flex-col justify-center align-center"
                    >
                      <h2 class="text-center">{{ $t('shipment') }}</h2>
                      <h2
                        class="ShipmentLength bg-pink-300 px-2 border-t-2 text-center rounded border-b-2"
                      >
                        25
                      </h2>
                      <h2 class="text-center">{{ $t('delivered') }}</h2>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-full"
                  :class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <div
                    class="h-ful flex flex-col align-center justify-between w-full"
                  >
                    <div class="flex flex-col w-full h-full space-y-8">
                      <div
                        class="addSomthing p-2 m-0 flex flex-col w-full space-y-2 h-32 justify-center item-center self-center align-center"
                      >
                        <div
                          class="flex justify-center align-center font-bold text-3xl lg:text-5xl uppercase"
                        >
                          <h2>{{ category }}</h2>
                        </div>
                        <div class="justify-center align-center">
                          <Adminastration
                            ref="Adminastration"
                            class="adminastration"
                          />
                        </div>
                      </div>
                      <div
                        class="catagories space-y-2 flex flex-wrap flex-row justify-around align-center h-32 w-full"
                      >
                        <button
                          :class="{ 'bg-Amber-500': category === 'Shirts' }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Shirts'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-tshirt-crew</v-icon
                          >
                        </button>
                        <button
                          :class="{ 'bg-Amber-500': category === 'Lighters' }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Lighters'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-fire</v-icon
                          >
                        </button>
                        <button
                          :class="{ 'bg-Amber-500': category === 'Hoodies' }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Hoodies'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-sun-snowflake</v-icon
                          >
                        </button>
                        <button
                          :class="{
                            'bg-Amber-500': category === 'Collections',
                          }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Collections'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-package</v-icon
                          >
                        </button>
                        <button
                          :class="{ 'bg-Amber-500': category === 'Matchboxes' }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Matchboxes'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-toolbox</v-icon
                          >
                        </button>
                        <button
                          :class="{ 'bg-Amber-500': category === 'Shorts' }"
                          class="border-2 transition bg-pink-700 rounded-full border-CoolGray-600 xs:w-16 xs:h-16 w-24 h-24"
                          @click="category = 'Shorts'"
                        >
                          <v-icon x-large class="text-4xl" dark
                            >mdi-beach</v-icon
                          >
                        </button>
                      </div>
                      <!-- <div
                        class="addSomthing transform sm:translate-y-8 p-0 m-0 flex flex-col w-full h-32 justify-center item-center self-center align-center"
                      >
                        <div class="justify-center align-center">
                          <Adminastration
                            ref="Adminastration"
                            class="adminastration"
                          />
                        </div> -->
                    </div>
                  </div>

                  <div
                    class="w-full products rounded-lg p-2 shadow-2xl bg-white overflow-y-scroll h-80 text-gray-200"
                  >
                    <div class="flex-justify-center align-center">
                      <h2 class="font-bold text-2xl border-b-2 my-2">stock:</h2>
                    </div>
                    <div
                      v-for="product in products"
                      :key="product.id"
                      class="transition"
                    >
                      <div
                        v-show="product.category === category"
                        id="products"
                        class="flex flex-row divide-y border-black text-black justify-evenly"
                      >
                        <div
                          class="bottomBorder flex flex-row place-content-between border-b-2 border-Indigo-500 w-full"
                        >
                          <div class="flex-justify-center">
                            <h3 class="">{{ product.title }}</h3>
                          </div>
                          <div class="flex-justify-center">
                            <p>{{ product.price }}</p>
                          </div>
                          <button
                            class="text-red-500"
                            @click="deleteProduct(product.id)"
                          >
                            <v-icon>mdi-delete</v-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full h-full justify-center"
              :class="{ hidden: openTab !== 3, block: openTab === 3 }"
            >
              <div class="orders w-full h-full">
                <div class="w-full h-full">
                  <div
                    class="w-full h-full"
                    :class="{
                      hidden: ordersTab !== 'List',
                      block: ordersTab === 'List',
                    }"
                  >
                    <div class="w-full h-full grid grid-rows-7">
                      <div class="">
                        <div
                          class="List h-1/2 w-full flex flex-row justify-around align-center"
                        >
                          <button
                            class="p-2 rounded px-3"
                            :class="{
                              'bg-Lime-500': ordersTab === 'List',
                              'transform scale-125': ordersTab === 'List',
                              'bg-Amber-400': ordersTab !== 'List',
                            }"
                            @click="orderTab('List')"
                          >
                            {{ $t('list') }}
                          </button>
                          <button
                            class="p-2 rounded px-3"
                            :class="{
                              'bg-Lime-500': ordersTab === 'Detail',
                              'bg-Amber-400': ordersTab !== 'Detail',
                            }"
                            @click="detailAnime() & orderTab('Detail')"
                          >
                            {{ $t('detail') }}
                          </button>
                        </div>
                      </div>
                      <div
                        class="orderBar w-full flex flex-row place-content-around align-center row-span-1"
                      >
                        <h1
                          class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                        >
                          {{ $t('name') }}
                        </h1>
                        <h1
                          class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                        >
                          {{ $t('date') }}
                        </h1>
                        <h1
                          class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                        >
                          {{ $t('status') }}
                        </h1>
                      </div>
                      <div
                        class="ordersList rounded border-r-2 border-b-2 border-l-2 border-Cyan-600 h-full row-span-5 overflow-y-scroll overflow-x-hidden"
                      >
                        <div
                          v-for="order in orders"
                          :key="order.id"
                          class="listCard w-full shadow-xl flex flex-row rounded-full my-3 p-4 place-content-around"
                        >
                          <h1 class="m-1 text-xl lg:text-3xl">
                            {{ order.FullName }}
                          </h1>
                          <h1 class="m-1 text-xl lg:text-3xl">
                            {{ order.Date }}
                          </h1>
                          <h1 class="m-1 text-xl lg:text-3xl">
                            {{ $t('canceled') }}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full h-full"
                    :class="{
                      hidden: ordersTab !== 'Detail',
                      block: ordersTab === 'Detail',
                    }"
                  >
                    <div class="grid grid-rows-7 w-full h-full">
                      <div
                        class="List h-1/2 row-span-1 w-full flex flex-row justify-around align-center"
                      >
                        <button
                          class="p-2 rounded px-3"
                          :class="{
                            'bg-Lime-500': ordersTab === 'List',
                            'bg-Amber-400': ordersTab !== 'List',
                          }"
                          @click="listAnime() & orderTab('List')"
                        >
                          {{ $t('list') }}
                        </button>
                        <button
                          class="p-2 rounded px-3"
                          :class="{
                            'bg-Lime-500': ordersTab === 'Detail',
                            'transform scale-125': ordersTab === 'Detail',
                            'bg-Amber-400': ordersTab !== 'Detail',
                          }"
                          @click="orderTab('Detail')"
                        >
                          {{ $t('detail') }}
                        </button>
                      </div>
                      <div
                        class="overflow-hidden w-full row-span-6 h-full p-2 border-r-2 border-b-2 border-l-2 border-Cyan-600 rounded"
                      >
                        <div
                          class="orderDetail container grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll p-2"
                        >
                          <div
                            v-for="order in orders"
                            :key="order.id"
                            class="detailCards shadow-2xl border-2 p-8 my-1 mx-1 rounded-lg"
                          >
                            <div
                              class="w-full flex flex-col-reverse lg:flex-row justify-between"
                            >
                              <h1 class="self-center">
                                {{ $t('statusProcessing') }}
                              </h1>
                              <button class="" @click="deleteOrder(order.id)">
                                <!-- <img
                                    class="p-1"
                                    src="~/assets/images/x1.png"
                                    alt=""
                                  /> -->
                              </button>
                            </div>
                            <h1 class="text-xl border-b-2 p-1">
                              {{ $t('fullName') }}:
                              {{ order.FullName }}
                            </h1>
                            <h1 class="text-xl border-b-2 p-1">
                              {{ $t('address') }}: {{ order.Address }}
                            </h1>
                            <h1 class="text-xl border-b-2 p-1">
                              {{ $t('phoneNumber') }}:
                              {{ order.PhoneNumber }}
                            </h1>
                            <h1 class="text-xl border-b-2 p-1">
                              {{ $t('city') }}: {{ order.City }}
                            </h1>
                            <h1 class="text-xl border-b-2 p-1">
                              {{ $t('province') }}:
                              {{ order.Province }}
                            </h1>

                            <h1 class="text-xl p-1">{{ $t('items') }}:</h1>
                            <div
                              class="grid grid-cols-1 p-5 lg:bg-Amber-500 border-l-2 border-Amber-500 lg:shadow-2xl rounded-xl"
                            >
                              <div
                                v-for="item in order.orderProduct"
                                :key="item.id"
                                class="flex flex-shirnk flex-col border-b-2 p-2 justify-center"
                              >
                                <h1 class="text-xl">
                                  {{ $t('title') }}: {{ item.item.title }}
                                </h1>
                                <h1 class="text-xl">
                                  {{ $t('price') }}: {{ item.item.price }}
                                </h1>
                                <h1 class="text-xl">
                                  {{ $t('quantity') }}: {{ item.quantity }}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Adminastration from '../components/Adminastration.vue'

export default {
  name: 'AdminPage',
  components: {
    LazyHydrate,
    Adminastration,
    Navbar: () => import('~/layouts/TheNavbar.vue'),
  },
  // created() {
  //   const ref = this.$fire.firestore.collection('Products')

  //   ref.onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === 'added') {
  //         const doc = change.doc
  //         this.Products.push({
  //           id: doc.id,
  //           title: doc.data().title,
  //           price: doc.data().price,
  //           image: doc.data().image,
  //           category: doc.data().category,
  //         })
  //       }
  //     })
  //   })
  // },
  transition: {
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, { opacity: 0 })
    },
    enter(el, done) {
      this.$gsap.to(el, 1, { opacity: 1 })
      done()
    },
    leave(el, done) {
      this.$gsap.to(el, 1, { opacity: 0.5 })
      done()
    },
  },
  data() {
    return {
      category: 'Lighters',

      openTab: 1,
      orders: [],
      orderProduct: [],
      ordersTab: 'List',
      products: [],
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    },
  },

  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },

  mounted() {
    this.getProducts()
    this.welcome()
    this.fetchOrders()
  },
  methods: {
    categorySelect(selectedTab) {
      this.category = selectedTab
    },

    orderTab(tab) {
      this.ordersTab = tab
    },

    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
    showModal() {
      this.$refs.Adminastration.toggleModal()
    },

    async getProducts() {
      try {
        const { data, error } = await this.$supabase.from('products').select()

        if (error) throw error
        if (data) {
          this.products = data
          this.animateProductCards()

          // console.log(data)
        }
      } catch (error) {}
    },

    async fetchOrders() {
      try {
        const { data, error } = await this.$supabase
          .from('order-detail')
          .select()
        if (error) throw error
        if (data) {
          this.orders = data
          console.log(this.orders)
        }
      } catch (error) {
        alert(error.message)
      }
    },

    async deleteProduct(id) {
      try {
        const { error } = await this.$supabase
          .from('products')
          .delete()
          .match({ id })
        if (error) throw error
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        this.getProducts()
      }
    },

    deleteOrder(id) {
      this.$fire.firestore
        .collection('orders')
        .doc(id)
        .delete()
        .then(() => {
          this.orders = this.orders.filter((order) => {
            return order.id !== id
          })
        })
    },
    deletingAnimation() {
      const gsap = this.$gsap

      gsap.to('.kiskis', {
        rotate: 360,
        repeat: 2,
      })
    },

    tab2() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.catagories', 0.5, {
        x: -50,
        opacity: 0,
        ease: 'power4.out',
      })
      tl.from('.addSomthing', 0.5, {
        x: -50,
        opacity: 0,
        scale: 0.2,
        ease: 'power4.out',
      })
      tl.from('.products', 0.5, {
        x: 50,
        opacity: 0,
        ease: 'power4.out',
      })
    },

    tab3() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.List', 0.3, {
        scale: 0.3,
        opacity: 0,
      })
      tl.from('.orderBar', 0.3, {
        opacity: 0,
      })
      tl.from('.listCard', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: {
          each: 0.3,
        },
      })
    },

    tab1() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.totalProducts', 0.5, {
        x: -100,
        opacity: 0,
        ease: 'power4.out',
      })
      tl.from('.totalShipment', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'power4.out',
      })
      tl.from('.sellsRecord', 0.5, {
        y: 100,
        opacity: 0,
        ease: 'power4.out',
      })
    },

    detailAnime() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.detailCards', 0.5, {
        y: 200,
        ease: 'expo.out',
        opacity: 0,
        stagger: {
          each: 0.3,
        },
      })
    },

    listAnime() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.orderBar', 0.3, {
        opacity: 0,
      })
      tl.from('.listCard', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: {
          each: 0.3,
        },
      })
    },

    welcome() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.admin', {
        duration: 1,
        y: -300,
        ease: 'Power1.easeIn',
        opacity: 0,
      })
      tl.from('.lis', {
        opacity: 0,
        scale: 0.5,
        ease: 'Power1.easeIn',
        duration: 0.5,
        stagger: {
          each: 0.2,
          from: 'center',
        },
      })
      tl.from('.tab-content', 0.5, {
        opacity: 0,
      })
    },
  },
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
* {
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#app {
  overflow: hidden;
  height: 100vh;
  width: 100%;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
#leaves {
  z-index: -1;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.addButton {
  background-color: #ff4a68;
  color: #120129;
}

.addButton {
  font-size: 100px;
  background-color: #023047;
  color: #fb8500;
  border-radius: 50px;
  transition: ease-in-out 0.3s;
  margin: 3px;
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}

.addButton:hover {
  background-color: #ffb703;
  color: #120129;
}
.addButton:active {
  filter: brightness(0.5);
}
#surfer {
  z-index: 2;
}
.middle {
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}

.admin {
  font-family: 'Yanone Kaffeesatz';
}

#products {
  font-family: 'Yanone Kaffeesatz';
  font-size: 22px;
}

.bottomBorder {
  border-color: #dee2ff;
  color: #023047;
}
.addSomthing {
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}

.totalProducts {
  font-size: 35px;
  border-color: #54086b;
  color: #050833;
}

.totalShipment {
  font-size: 35px;
  color: #050833;
  border-color: #54086b;
}

.sellsRecord {
  font-size: 35px;
  border-color: #2f013d;
  color: #050833;
}

.SellsLength {
  border-color: #17005d;
}

.ProductLength {
  border-color: #2f013d;
}

.ShipmentLength {
  border-color: #2f013d;
}

.List {
  font-size: 30px;
}

.ordersList {
  max-height: 30rem;
}

.orderDetail {
  max-height: 24rem;
}

.detailCards {
  background-color: #bf1363;
}

.headers {
  background-color: #f5fdb0;
}

.listCard {
  background-color: #28ffbf;
  color: #451881;
}

.kiskisImg {
  width: 400px;
  height: 400px;
}

.gisgisImg {
  width: 300px;
  height: 300px;
}

.rateImg {
  width: 400px;
  height: 200px;
}

h1 {
  border-color: #e2e9e0;
}

.buttonContainer {
}
</style>
