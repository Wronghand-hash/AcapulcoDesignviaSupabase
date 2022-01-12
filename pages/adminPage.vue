<template>
  <v-app id="app">
    <div
      id="main"
      class="h-screen w-screen overflow-hidden grid self-center justify-center"
    >
      <LazyHydrate class="z-50" when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="absolute z-50"
        />
      </LazyHydrate>

      <div class="absolute self-center flex w-full z-20 shadow-xl">
        <Adminastration
          ref="Adminastration"
          v-gsap.from="{
            y: 500,
            duration: 1.5,
            ease: 'expo.out',
          }"
          class="adminastration w-24"
        />
      </div>

      <div class="w-screen h-screen mt-15 grid align-center grid-rows-4">
        <div
          class="flex justify-center align-center w-full h-full container row-span-3"
        >
          <div
            class="admin shadow-2xl px-4 py-8 flex flex-row justify-center self-center w-full rounded h-full"
          >
            <div
              class="tab-content h-full w-full place-items-center content-center justify-center flex self-center tab-space"
            >
              <div
                class="flex flex-col place-items-center justify-center h-full w-full text-gray-200"
                :class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <div class="w-full h-full grid grid-rows-1 grid-cols-3">
                  <div
                    class="totalProducts w-full h-full flex flex-col justify-center align-center"
                  >
                    <h2 class="text-center">total</h2>
                    <h2
                      class="ProductLength border-t-2 w-1/3 text-center rounded border-b-2"
                    >
                      {{ Products.length }}
                    </h2>
                    <h2 class="text-center">Products</h2>
                  </div>

                  <div
                    class="sellsRecord flex flex-col justify-center align-center border-r-2 border-l-2 rounded"
                  >
                    <h2 class="text-center">Total</h2>
                    <h2
                      class="SellsLength border-t-2 w-1/3 text-center rounded border-b-2"
                    >
                      {{ orders.length }}
                    </h2>
                    <h2 class="text-center">Orders</h2>
                  </div>

                  <div
                    class="totalShipment flex flex-col justify-center align-center"
                  >
                    <h2 class="text-center">Shipment</h2>
                    <h2
                      class="ShipmentLength border-t-2 w-1/3 text-center rounded border-b-2"
                    >
                      25
                    </h2>
                    <h2 class="text-center">Delivered</h2>
                  </div>
                </div>
              </div>
              <div
                class="w-full h-full"
                :class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div class="h-full grid grid-cols-2 gap-x-3 grid-rows-2">
                  <div
                    class="catagories container col-span-2 flex flex-wrap flex-row justify-around align-start h-full w-full m-3 p-5"
                  >
                    <v-btn
                      depressed
                      x-large
                      rounded
                      color="amber"
                      class="border-2 border-CoolGray-600 p-5 m-3"
                      @click="catagorySelect('Shirts')"
                    >
                      <v-icon dark>mdi-tshirt-crew</v-icon></v-btn
                    >
                    <v-btn
                      depressed
                      x-large
                      rounded
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Lighters')"
                      ><v-icon dark>mdi-fire</v-icon></v-btn
                    >
                    <v-btn
                      depressed
                      x-large
                      rounded
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Custom Matchboxes')"
                      ><v-icon dark>mdi-package</v-icon></v-btn
                    >
                    <v-btn
                      depressed
                      x-large
                      rounded
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Collections')"
                      ><v-icon dark>mdi-toolbox</v-icon></v-btn
                    >
                  </div>

                  <div
                    class="addSomthing flex flex-col w-full h-full self-center align-center"
                  >
                    <h2 class="text-3xl">SOMETHING TO ADD?</h2>
                    <button
                      class="focus:outline-none addButton self-center text-center align-center h-1/2 w-1/2"
                      @click="showModal"
                    >
                      +
                    </button>
                  </div>
                  <div
                    class="w-full products p-5 rounded-lg shadow-2xl overflow-y-scroll h-full text-gray-200"
                  >
                    <div v-for="product in Products" :key="product.id" class="">
                      <div
                        v-show="product.catagory === catagory"
                        id="products"
                        class="flex flex-row divide-y border-black text-black place-content-around"
                      >
                        <div
                          class="bottomBorder flex flex-row place-content-between border-b-2 w-full"
                        >
                          <h3 class="">{{ product.title }}</h3>
                          <button class="" @click="deleteProduct(product.id)">
                            <img
                              class="kiskis"
                              src="~/assets/images/x.png"
                              alt=""
                            />
                          </button>
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
                              List
                            </button>
                            <button
                              class="p-2 rounded px-3"
                              :class="{
                                'bg-Lime-500': ordersTab === 'Detail',
                                'bg-Amber-400': ordersTab !== 'Detail',
                              }"
                              @click="detailAnime() & orderTab('Detail')"
                            >
                              Detail
                            </button>
                          </div>
                        </div>
                        <div
                          class="orderBar w-full flex flex-row place-content-around align-center row-span-1"
                        >
                          <h1
                            class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                          >
                            Name
                          </h1>
                          <h1
                            class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                          >
                            Date
                          </h1>
                          <h1
                            class="headers text-2xl px-3 p-2 lg:text-3xl lg:px-12 border-2 border-blueGray-400 rounded-full shadow-xl"
                          >
                            Status
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
                              {{ order.order.FullName }}
                            </h1>
                            <h1 class="m-1 text-xl lg:text-3xl">
                              {{ order.Date }}
                            </h1>
                            <h1 class="m-1 text-xl lg:text-3xl">Canceled</h1>
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
                            List
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
                            Detail
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
                                <h1 class="self-center">Status: processing</h1>
                                <button class="" @click="deleteOrder(order.id)">
                                  <img
                                    class="p-1"
                                    src="~/assets/images/x1.png"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <h1 class="text-xl border-b-2 p-1">
                                Full Name: {{ order.order.FullName }}
                              </h1>
                              <h1 class="text-xl border-b-2 p-1">
                                Address: {{ order.order.Address }}
                              </h1>
                              <h1 class="text-xl border-b-2 p-1">
                                Phone Number: {{ order.order.PhoneNumber }}
                              </h1>
                              <h1 class="text-xl border-b-2 p-1">
                                City: {{ order.order.City }}
                              </h1>
                              <h1 class="text-xl border-b-2 p-1">
                                Province: {{ order.order.Province }}
                              </h1>

                              <h1 class="text-xl p-1">Items:</h1>
                              <div
                                class="grid grid-cols-1 p-5 lg:bg-Amber-500 border-l-2 border-Amber-500 lg:shadow-2xl rounded-xl"
                              >
                                <div
                                  v-for="item in order.orderProduct"
                                  :key="item.id"
                                  class="flex flex-shirnk flex-col border-b-2 p-2 justify-center"
                                >
                                  <h1 class="text-xl">
                                    Title: {{ item.item.title }}
                                  </h1>
                                  <h1 class="text-xl">
                                    Price: {{ item.item.price }}
                                  </h1>
                                  <h1 class="text-xl">
                                    Quantity: {{ item.quantity }}
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

        <div
          class="flex align-center mb-10 justify-center w-full h-full row-span-1"
        >
          <div
            class="buttonContainer mx-2 absolute flex justify-center justify-around flex-row bottom-0 content-center w-full lg:w-1/2 lg:h-48 h-36 rounded-2xl border-r-8 border-l-8 border-Indigo-600"
          >
            <div
              :class="{
                'bg-Lime-500': openTab === 1,
                'border-4 border-Lime-500': openTab !== 1,
              }"
              class="lis m-3 flex flex-col justify-center align-center rounded-2xl h-32 w-32 lg:h-36 lg:w-44 shadow-2xl"
              @click="tab1() & toggleTabs(1)"
            >
              <img
                class="lg:p-4 rateImg object-contain"
                src="~/assets/images/flag.png"
                alt=""
              />
            </div>
            <div
              :class="{
                'bg-Lime-500': openTab === 2,
                'border-4 border-Lime-500': openTab !== 2,
              }"
              class="lis m-3 flex flex-col justify-center align-center rounded-2xl h-32 w-32 lg:h-36 lg:w-44 shadow-2xl"
              @click="tab2() & toggleTabs(2)"
            >
              <img
                class="lg:p-4 kiskisImg object-contain"
                src="/kiskis.svg"
                alt=""
              />
            </div>
            <div
              :class="{
                'bg-Lime-500': openTab === 3,
                'border-4 border-Lime-500': openTab !== 3,
              }"
              class="lis m-3 flex flex-col justify-center align-center rounded-2xl h-32 w-32 lg:h-36 lg:w-44 shadow-2xl"
              @click="tab3() & toggleTabs(3)"
            >
              <img
                class="lg:p-4 gisgisImg object-contain"
                src="/gisgis.svg"
                alt=""
              />
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
    Navbar: () => import('../layouts/TheNavbar.vue'),
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
  //           catagory: doc.data().catagory,
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
      catagory: 'Shirts',

      Products: [],
      openTab: 1,
      orders: [],
      orderProduct: [],
      ordersTab: 'List',
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
    // const orders = this.$fire.firestore
    //   .collection('orders')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.data());
    //       this.order = doc.data().order
    //       this.orderProduct = doc.data().cart
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // console.log(orders)
    // console.log(this.order);
    this.welcome()
    console.log(this.catagory)
  },
  methods: {
    catagorySelect(selectedTab) {
      this.catagory = selectedTab
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
    deleteProduct(id) {
      this.$fire.firestore
        .collection('Products')
        .doc(id)
        .delete()
        .then(() => {
          this.Products = this.Products.filter((product) => {
            return product.id !== id
          })
        })
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

    tab2() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.catagories', 0.5, {
        x: -100,
        opacity: 0,
        ease: 'power4.out',
      })
      tl.from('.addSomthing', 0.5, {
        x: -100,
        opacity: 0,
        scale: 0.2,
        ease: 'power4.out',
      })
      tl.from('.products', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'power4.out',
      })
      console.log(' you clicked me ')
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
  font-family: 'Yanone Kaffeesatz', sans-serif;
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
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.admin {
  font-family: 'Yanone Kaffeesatz';
  background-color: #23f4fc;
}

#products {
  font-family: 'Yanone Kaffeesatz';
  font-size: 22px;
}

.bottomBorder {
  border-color: #dee2ff;
  color: #023047;
}
.products {
  background-color: #ffb703;
}
.addSomthing {
  color: #0a1931;
  font-family: 'Yanone Kaffeesatz', sans-serif;
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
  border-color: #54086b;
  color: #050833;
}

.SellsLength {
  border-color: #c7f954;
}

.ProductLength {
  border-color: #c7f954;
}

.ShipmentLength {
  border-color: #c7f954;
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
  height: 300px;
}

.gisgisImg {
  width: 400px;
  height: 150px;
}

.rateImg {
  width: 400px;
  height: 200px;
}

h1 {
  border-color: #e2e9e0;
}

.buttonContainer {
  background-color: #23f4fc;
}
</style>
