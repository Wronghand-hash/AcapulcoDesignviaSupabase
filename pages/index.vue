<i18n lang="yaml">
en:
  acapulcodesign: 'Acapulco Design'
  welcome: 'Welcome'
  to: 'To'
  acapulco: 'Acapulco'
  design: 'Design'
  lighters: 'Lighters'
  showMe: 'Show Me!'
  acapulcoShirt: 'Acapulco Shirt'
  acapulcoMatchboxes: 'Custom Matchboxes'
  comingSoon: 'Coming Soon...'
  acapulcoShorts: 'Acapulco Shorts'
  acapulcoHoodies: 'Acapulco Hoodies'
  collections: 'Collections'
  weAreA: 'We are a'
  creativeTeam: 'Creative Team'
  based: 'Based in Iran'
  if: 'If you want to know more; maybe get a cup of coffee (Or tea!), you can!'
  aboutUs: 'Learn more about Us'
fa:
  acapulcodesign: 'آکاپلکو دیزاین'
  welcome: 'خوش اومدین'
  to: 'به'
  acapulco: 'آکاپلکو'
  design: 'دیزاین'
  lighters: 'فندک ها'
  showMe: '!نشونم بده'
  acapulcoShirt: 'پیراهن آلکاپلکو'
  acapulcoMatchboxes: 'کبریت های آکاپلکو'
  comingSoon: '...بزودی'
  acapulcoHoodies: 'هودی های اکاپلکو'
  acapulcoShorts: 'شلوارک های آکاپلکو'
  collections: 'کالکشن ها'
  weAreA: 'ما یک'
  creativeTeam: 'تیم خلاق'
  based: 'از ایران هستیم'
  if: ' اگر میخواین ما رو بیشتر بشناسین؛ شاید یه فنجون قهوه (یا چای!) باهم بزنیم، میتونین'
  aboutUs: 'بیشتر مارو بشناسین'
</i18n>

<template>
  <v-app>
    <div id="main" class="w-screen">
      <LazyHydrate when-visible>
        <Navbar id="navbar" class="navbar"> </Navbar>
      </LazyHydrate>

      <div class="w-screen overflow-hidden">
        <div class="grid place-items-center w-screen">
          <!-- <div
            class="relative flex sm:mx-5 sm:px-5 h-screen w-screen justify-center align-center logo"
          >
            <img
              class="absolute firstPic sm:mx-5 sm:px-5"
              src="../assets/images/PeaceSignColor.webp"
              alt=""
            />
            <img
              class="absolute secondPic sm:mx-5 sm:px-5"
              src="../assets/images/PeaceSignFirstLines.webp"
              alt=""
            />
            <img
              class="absolute thirdPic sm:mx-5 sm:px-5"
              src="../assets/images/PeaceSignDetails.webp"
              alt=""
            />
          </div> -->
          <!-- <div class="w-40 lg:w-64 self-start mt-14">
            <img
              src="~/assets/images/peaceSign.svg"
              class="object-contain"
              alt=""
            />
          </div> -->
          <div
            class="w-screen mt-20 h-dialog flex flex-col align-center justify-between md:flex-row lg:flex-row lg:h-screen lg:justify-around"
          >
            <img
              class="treePicture2 object-contain lg:object-cover h-64 drop-shadow-2xl rotate-180 transform lg:translate-x-36 md:-rotate-90 lg:rotate-90 z-10"
              src="~/assets/images/tree2.webp"
              alt=""
            />

            <h1
              class="flex justify-center align-center NavbarTrigger acapulco tracking-wider text-7xl md:text-9xl lg:text-10xl text-center leading-none flex-shrink text-white"
            >
              {{ $t('acapulcodesign') }}
            </h1>
            <img
              class="treePicture object-contain h-64 transform lg:-translate-x-36 md:rotate-90 lg:rotate-90 drop-shadow-2xl"
              src="~/assets/images/tree.webp"
              alt=""
            />
          </div>

          <div
            class="flex h-screen w-screen justify-center align-center firstContainer content"
          >
            <img
              class="w-52 md:w-60 lg:w-rem25 object-contain transform lg:translate-x-0 translate-x-14"
              :src="require(`~/assets/images/whatwhat-svg.webp`)"
              alt=""
            />

            <div class="lg:h-full h-3/4 flex justify-center align-center">
              <h2
                class="sm:w-96 h2-home z-10 text-center capitalize font-semibold leading-4 text-5xl md:text-7xl lg:text-9xl transform sm:m-auto"
              >
                <span class="text-mainRed animatedSpans">
                  {{ $t('welcome') }} </span
                ><span class="animatedSpans">{{ $t('to') }}</span>
                <strong class="text-goldie animatedSpans"
                  >{{ $t('acapulco') }}
                </strong>
                <span class="text-goldie animatedSpans">
                  {{ $t('design') }}</span
                >
              </h2>
            </div>
            <img
              class="w-52 md:w-60 lg:w-rem25 object-contain transform lg:-translate-x-0 -translate-x-14"
              :src="require(`~/assets/images/whatwhat1-svg.webp`)"
              alt=""
            />
          </div>

          <div
            class="lg:mt-28 h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-9 p-14 lg:p-48 justify-self-stretch forthContainer content"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="text-6xl lg:text-7xl p-5 text-center flex justify-center align-end"
                >
                  {{ $t('lighters') }}
                  <img
                    class="h-36 lg:h-48 ml-2 object-contain"
                    src="../assets/images/acapulcoLighterSmall.webp"
                  />
                </h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-pink-600">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>

            <div
              class="pictureDiv lg:order-last cursor-pointer bg-red-200 shadow-2xl"
            >
              <img
                src="~/assets/images/lighter-svg.webp"
                class="object-fill sm:w-96 sm:h-96 lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto pictureDivImages"
                alt=""
              />
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-14 lg:p-48 justify-self-stretch thirdContainer content"
          >
            <div class="pictureDiv lg:order-first cursor-pointer shadow-2xl">
              <!-- <h1
                class="
                  m-3
                  font-mainFont
                  rounded-full
                  py-2
                  px-8
                  text-mainBlue
                  bg-goldie
                  text-2xl
                  lg:text-3xl
                  font-bold
                "
              >
                Coming Soon...
              </h1> -->
              <img
                src="~/assets/images/shirtacapulco.webp"
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto pictureDivImages"
                alt=""
              />
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="p-5 text-center text-4xl lg:text-7xl sm:font-bold flex justify-center align-end"
                >
                  {{ $t('acapulcoShirt') }}
                  <img
                    class="h-36 lg:h-48 ml-2 object-contain"
                    src="../assets/images/acapulcoShirtSmall.webp"
                  />
                </h3>
                <!-- <img class="transform scale-75" src="~/assets/images/fsdf.png" alt="" /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-Cyan-400">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-14 lg:p-48 justify-self-stretch forthContainer content"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="text-4xl sm:font-bold lg:text-7xl p-5 text-center flex justify-center align-end"
                >
                  {{ $t('acapulcoMatchboxes') }}
                  <img
                    class="h-36 lg:h-48 ml-1 object-contain"
                    src="../assets/images/matchbox-small.webp"
                  />
                </h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-red-700">
                    <span class="learnMoreText text-white">{{
                      $t('showMe')
                    }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div
              class="pictureDiv lg:order-last cursor-pointer bg-red-200 shadow-2xl"
            >
              <img
                src="~/assets/images/matchbox.webp"
                class="object-fill sm:w-96 sm:h-96 lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto pictureDivImages"
                alt=""
              />
            </div>
          </div>
          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-2 p-14 lg:p-48 justify-self-stretch thirdContainer content"
          >
            <div class="pictureDiv lg:order-first cursor-pointer bg-red-200">
              <img
                src="~/assets/images/short.webp"
                class="object-fill sm:w-96 sm:h-96 lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
            </div>
            <h1
              class="font-mainFont self-start lg:hidden rounded-full py-1 lg:py-2 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
            >
              {{ $t('comingSoon') }}
            </h1>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="text-4xl sm:font-bold lg:text-7xl lg:p-5 text-center my-3 flex justify-center align-end"
                >
                  {{ $t('acapulcoShorts') }}
                  <img
                    class="h-36 lg:h-36 ml-2 object-contain"
                    src="../assets/images/acapulcoShortSmall.webp"
                  />
                </h3>
                <!-- <img class="transform scale-75" src="~/assets/images/fsdf.png" alt="" /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-yellow-500">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-2 p-14 lg:p-48 justify-self-stretch thirdContainer content"
          >
            <!-- <h1
              class="font-mainFont lg:self-end rounded-full py-1 lg:py-2 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
            >
              {{ $t('comingSoon') }}
            </h1> -->

            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="text-4xl sm:font-bold lg:text-7xl text-center flex justify-center align-end my-4"
                >
                  {{ $t('acapulcoHoodies') }}
                  <img
                    class="h-36 lg:h-48 ml-2 object-contain"
                    src="../assets/images/acapulcoHoodieSmall.webp"
                  />
                </h3>
                <!-- <img
                  src="~/assets/images/Hoodie.png"
                  class="transform scale-95 object-contain lg:scale-100"
                  alt=""
                /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-LightBlue-300">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div class="pictureDiv lg:order-last cursor-pointer bg-red-200">
              <img
                src="~/assets/images/Hoodie.webp"
                class="object-fill sm:w-96 sm:h-96 lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
            </div>
          </div>

          <div
            class="h-screen fifthContainer flex flex-col lg:flex-row align-center justify-center space-y-2 content p-14 lg:p-48 justify-self-stretch"
          >
            <div class="pictureDiv lg:order-first cursor-pointer bg-red-200">
              <img
                src="~/assets/images/collection.webp"
                class="object-fill sm:w-96 sm:h-96 lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
            </div>
            <h1
              class="font-mainFont lg:hidden lg:ml-3 self-start lg:self-start rounded-full py-1 lg:py-2 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
            >
              {{ $t('comingSoon') }}
            </h1>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3
                  class="text-6xl p-5 text-center my-3 flex justify-center align-end"
                >
                  {{ $t('collections') }}
                  <img
                    class="h-36 lg:h-48 ml-2 object-contain"
                    src="../assets/images/acapulcoCollectionSmall.webp"
                  />
                </h3>
                <!-- <img class="transform scale-75" src="~/assets/images/fsdf.png" alt="" /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn bg-Lime-500">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="w-screen lg:p-44 flex align-center h-screen lg:h-screen grid-row-2 justify-center sixthContainer content"
          >
            <div class="flex flex-row flex-wrap w-5/6 h-2/6 justify-center">
              <h1
                class="introText capitalize text-5xl lg:text-7xl text-center bg-goldie p-2"
              >
                {{ $t('weAreA') }}
                <span class="text-Rose-700"> {{ $t('creativeTeam') }} </span>
                {{ $t('based') }}
              </h1>
              <h3
                class="px-2 learnMore font-bold text-4xl lg:text-6xl py-5 text-center"
              >
                {{ $t('if') }}
                <nuxt-link
                  to="/aboutUs"
                  class="font-bold cursor-pointer aboutUsText hover:underline hover:hue-rotate-60"
                >
                  {{ $t('aboutUs') }}
                </nuxt-link>
              </h3>
              <!-- <div class="h-20 w-12 m-auto mt-12">
                <img
                  src="~/assets/images/arrow.png"
                  class="object-contain"
                  alt=""
                />
              </div> -->
            </div>
          </div>
          <div
            v-show="scY > 320"
            id="pagetop"
            class="fixed right-0 bottom-0 cursor-pointer arrow"
            @click="toTop"
          >
            <div class="h-20 w-12 mb-9 mr-5">
              <img
                src="~/assets/images/arrow.png"
                class="object-contain"
                alt=""
              />
            </div>
          </div>
          <LazyHydrate when-visible>
            <Footer />
          </LazyHydrate>
        </div>
      </div>
    </div>
  </v-app>
</template>
<!-- <div class="flex align-center justify-center">
              <video
                class="object-contain md:object-scale-down"
                width="320"
                height="220"
                autoplay
                loop
                muted
              >
                <source src="~/assets/images/Y064cQ6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> -->

<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'IndexPage',
  components: {
    LazyHydrate,

    Footer: () => import('../layouts/TheFooter.vue'),
    Navbar: () => import('../layouts/TheNavbar.vue'),
  },
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
      this.$gsap.to(el, 1, { opacity: 0 })
      done()
    },
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  computed: {
    // CartDisplay() {
    //   return this.$store.state.CartDisplay
    // },
  },
  mounted() {
    this.logoApearAnimation()
    window.addEventListener('scroll', this.handleScroll)
    this.animatePictureDiv()
    this.animateOnScroll()

    // this.animateScrollDownBtn()
    // this.peaceSignAnimation()
    // this.animatePeaceSign()
  },
  methods: {
    logoApearAnimation() {
      const tl = this.$gsap.timeline()

      tl.from('.firstPic', 1.5, {
        opacity: 0,
        ease: 'expo.out',
        delay: 2,
      })
      tl.from('.secondPic', 1, {
        opacity: 0,
        ease: 'expo.out',
      })
      tl.from('.thirdPic', 1.5, {
        opacity: 0,
        ease: 'expo.out',
      })
    },
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    animatePictureDiv() {
      const gsap = this.$gsap
      const pictureDivs = this.$gsap.utils.toArray('.pictureDiv')
      const tl = gsap.timeline()
      pictureDivs.forEach((pictureDiv) => {
        tl.from(pictureDiv, {
          opacity: 0,
          y: -90,
          scale: 1.5,
          duration: 0.8,
          ease: 'Sine.easeOut',
          scrollTrigger: {
            trigger: pictureDiv,

            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse',
          },
        })
        // tl.from('.pictureDivImages', {
        //   opacity: 0,
        //   y: 280,
        //   ease: 'Sine.easeOut',
        //   stagger: true,
        //   scrollTrigger: {
        //     trigger: pictureDiv,
        //     scrub: 2,

        //     start: 'top bottom',
        //     end: 'top center',
        //     toggleActions: 'play none resume none',
        //   },
        // })
      })
    },
    // animtePictureDivSvgs() {
    //   const gsap = this.$gsap
    //       }

    // peaceSignAnimation() {
    //   const gsap = this.$gsap

    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: '.peaceSignDiv',
    //         pin: true,
    //         scrub: 0.2,
    //         start: 'top top',
    //         end: '+=10000',
    //       },
    //     })
    //     .to('.peaceSignDiv', {
    //       rotation: 360 * 5,
    //       scale: 0.8,
    //       opacity: 0.8,
    //       duration: 1,
    //       y: 500,
    //       ease: 'none',
    //     })
    // },\

    // animatePeaceSign() {
    //   const gsap = this.$gsap

    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         start: 'top top',
    //         end: '+=8000',
    //         scrub: 2,
    //         trigger: '.peaceSignDiv',
    //         marker: true,
    //       },
    //     })
    //     .to('.peaceSign', {
    //       opacity: 0,
    //       rotation: 360 * 7,
    //       duration: 0.2,
    //       scale: 0.2,
    //     })
    // },

    // animateScrollDownBtn() {
    //   const gsap = this.$gsap
    //   const tl = gsap.timeline({ repeat: -1, yoyo: true })
    //   tl.fromTo(
    //     '.scrollDownBtn',
    //     1,
    //     { ease: 'power1.inOut', y: 20 },
    //     { ease: 'power1.inOut', y: -20 }
    //   )
    // },
    animateOnScroll() {
      const spans = this.$gsap.utils.toArray('.animatedSpans')
      spans.forEach((span) => {
        this.$gsap.fromTo(
          span,
          {
            y: 700,
            scale: 1.5,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'Sine.easeOut',
            scrollTrigger: {
              scrub: 0.5,
              start: 'top bottom',
              end: 'top 50%',
              trigger: span,
              stagger: 0.1,

              toggleActions: 'play reverse  none none',
            },
          }
        )
      })

      const contents = this.$gsap.utils.toArray('.content')
      contents.forEach((content) => {
        this.$gsap.fromTo(
          content,
          {
            y: 180,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'Power1.easeInOut',
            scrollTrigger: {
              start: 'top bottom',
              end: 'top center',
              trigger: content,
              scrub: '0.2',
              toggleActions: 'play reverse  none none',
            },
          }
        )
        // this.$gsap.fromTo(
        //   content,
        //   { y: -120 },
        //   {
        //     y: -150,
        //     opacity: 0,
        //     // ease: 'Power1.easeInOut',
        //     scrollTrigger: {
        //       trigger: content,
        //       start: 'top top',
        //       end: 'center top',
        //       scrub: 0.1,

        //       // toggleActions: 'restart none reverse none',
        //     },
        //   }
        // )
      })
    },
  },
}
</script>

<style scoped>
.aboutUsText {
  color: #32005c;
  transition: ease-in-out 0.3s;
}
.aboutUsText:hover {
  color: #ff4a68;
}
.aboutUsText:active {
  color: #ff758c;
  scale: 0.8;
}
.arrow {
  transition: ease-in-out 0.2s;
  cursor: pointer;
}
.arrow:hover {
  filter: brightness(1.3);
}
.arrow:active {
  filter: brightness(0.5);
  transform: scale(0.9);
}
.animatedSpans {
  font-family: 'Roboto Slab', 'Estedad';
}
.content {
  opacity: 0;
}

.secondContainer,
.thirdContainer,
.forthContainer,
.fifthContainer {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
  color: #120129;
}

/* .seventhContainer {
  width: 100vw;
  height: 60vh;
} */

.introText {
  /* font-size: 3.6em; */
  font-family: 'Roboto Slab', 'Rezvan';
  /* line-height: 110%; */
  /* text-transform: capitalize; */
  font-weight: 900;
  color: #120129;
}

.learnMore {
  font-weight: 600;
  font-family: 'Roboto Slab', 'Rezvan';
  color: #120129;
}
.comingSoon {
  font-family: 'Yanone Kaffeesatz', 'Rezvan';
}

.learnMoreBtn {
  font-size: 30px;
  color: #120129;
  border-radius: 35px;
  transition: transform ease-in-out 0.6s;
  padding: 8px 45px;
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}

.learnMoreBtn:hover {
  transform: scale(1.01);
  filter: brightness(1.2);
  filter: drop-shadow(1.5);
}

/* #contactUsBtn {
  font-weight: 600;
  font-family: 'Roboto Slab', serif;
  transition: ease-in-out 0.3s;
  color: #ff4a68;
  background-color: transparent;
}

#contactUsBtn:hover {
  background-color: #ff4a68;
  color: #120129;
} */

.pictureDiv {
  transition: ease-in-out 0.3s;
}

.pictureDiv:hover {
  transform: scale(1.02);
}

.collections {
  transition: ease-in-out 0.3s;
}

.collections:hover {
  transform: scale(1.02);
}

.peaceSignDiv {
  position: sticky;
}
/* .limited {
  grid-area: 4 / 3 / 5 / 4;
  justify-content: center;
  align-items: center;
}
.logo {
  grid-area: 4 / 3 / 5 / 4;
  display: flex;
  justify-content: center;
} */

/* .image {
  display: block;
} */

.acapulco {
  font-family: 'Sail', 'Estedad';
  text-shadow: 2px 2px 0px #f5e482, 4px 4px 0px #e6c824, 8px 8px 0px #c0ae08,
    12px 12px 0px #b4d812, 16px 16px 0px #78e43a, 20px 20px 0px #00c76a,
    24px 24px 0px #08ada0, 28px 28px 0px #05597a, 32px 32px 0px #310677;
}

@media only screen and (max-width: 414px) {
  .acapulco {
    font-family: 'Sail', 'Estedad';
    text-shadow: 0.5px 0.5px 0px #f5e482, 1px 1px 0px #e6c824,
      1.5px 1.5px 0px #c0ae08, 2px 2px 0px #b4d812, 3px 3px 0px #78e43a,
      4px 4px 0px #00c76a, 5px 5px 0px #08ada0, 6px 6px 0px #05597a,
      7px 7px 0px #310677;
  }
}
@media (max-width: 1024px) {
  .acapulco {
    font-family: 'Sail', 'Estedad';
    text-shadow: 0.5px 0.5px 0px #f5e482, 1px 1px 0px #e6c824,
      1.5px 1.5px 0px #c0ae08, 2px 2px 0px #b4d812, 3px 3px 0px #78e43a,
      4px 4px 0px #00c76a, 5px 5px 0px #08ada0, 6px 6px 0px #05597a,
      7px 7px 0px #310677;
  }
}
@media (max-width: 1024px) {
  .treePicture {
    transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
  }
}
@media only screen and (max-width: 414px) {
  .treePicture {
    transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
  }
}

.h2-home {
  font-family: 'Roboto Slab', serif;
  line-height: 130%;
  color: #120129;
}

input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin-top: -2px;
  margin-bottom: -2px;
}
</style>
