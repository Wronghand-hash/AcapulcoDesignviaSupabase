<i18n lang="yaml">
en:
  acapulcodesign: 'Acapulco Design'
  limited: 'Limited'
  custom: 'Custom'
  handmade: 'Handmade'
  merchendise: 'Merchendise'
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
  limited: 'اجناس'
  custom: ' شخصی سازی شده'
  handmade: 'و دست ساز'
  merchendise: 'به مدت محدود'
  lighters: 'فندک ها'
  showMe: '!نشونم بده'
  acapulcoShirt: 'پیراهن آلکاپلکو'
  acapulcoMatchboxes: 'کبریت های آکاپلکو'
  comingSoon: '...بزودی'
  acapulcoHoodies: 'هودی های اکاپلکو'
  acapulcoShorts: 'شورت های آکاپلکو'
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
          <div class="w-40 lg:w-64 self-start mt-14">
            <img
              src="~/assets/images/peaceSign.svg"
              class="object-contain"
              alt=""
            />
          </div>
          <div
            class="w-screen h-dialog flex flex-col align-center justify-between md:flex-row lg:flex-row lg:h-screen lg:justify-around bg-LightBlue-400"
          >
            <img
              class="object-contain lg:object-cover w-full h-full drop-shadow-2xl transform md:-rotate-90 lg:-rotate-90 z-10"
              src="~/assets/images/tree.webp"
              alt=""
            />

            <h1
              class="bg-red-400 flex justify-center align-center NavbarTrigger acapulco tracking-wider text-7xl md:text-9xl lg:text-10xl text-center leading-none shrink text-gray-100"
            >
              {{ $t('acapulcodesign') }}
            </h1>
            <img
              class="treePicture object-contain w-full h-full transform md:rotate-90 lg:rotate-90 drop-shadow-2xl"
              src="~/assets/images/tree.webp"
              alt=""
            />
          </div>
          <!-- <div
            class="
              mt-44
              mb-28
              lg:mt-36
              acapulco-div
              lg:h-screen
              px-5
              lg:px-0
              w-screen
              h-screen
              
              relative
            "
          >
            <div class="lg:max-w-3xl w-full transform">
              <img
                class="
                  object-contain
                  w-full
                  h-full
                  drop-shadow-2xl
                  transform
                  lg:-rotate-90
                "
                src="~/assets/images/sketch-162443588438sdfs.png"
                alt=""
              />
            </div>

            <div class="flex align-center justify-center md:align-start m-auto">
              <h1
                class="
                  NavbarTrigger
                  acapulco
                  tracking-wider
                  text-7xl
                  md:text-9xl
                  lg:text-10xl
                  text-center
                  leading-none
                  text-gray-100
                "
              >
                {{ $t('acapulcodesign') }}
              </h1>
            </div>
            <div class="lg:max-w-xl z-10 h-2/5 w-full">
             
              <img
                class="
                  treePicture
                  object-contain
                  w-full
                  h-full
                  transform
                  lg:rotate-90
                  drop-shadow-2xl
                "
                src="~/assets/images/tree.webp"
                alt=""
              />
            </div>
          </div> -->
          <!-- <img
                class="
                  lg:hidden
                  object-contain
                  w-full
                  h-full
                  drop-shadow-2xl
                  rotate-180
                  transform
                  lg:translate-x-24
                "
                src="~/assets/images/sketch-162443588438sdfs.png"
                alt=""
              /> -->
          <!-- <div
            v-gsap.to="{
              opacity: 1,
              duration: 0.6,
              delay: 1,
              ease: 'circ.out',
            }"
            class="scrollDownBtn self-center mb-11"
          >
            <img src="~/assets/images/arrow.png" class="h-28 w-16 object-contain" alt="" />



          </div> -->
          <!-- <div
            class="
              flex
              h-screen
              w-screen
              justify-center
              align-center
              firstContainer
              content
              relative
            "
          >
            <div
              class="
                transform
                -translate-x-36
                lg:-translate-x-0
                inset-y-0
                left-0
                absolute
                max-w-xs
                lg:max-w-xl
              "
            >
              <img
                class="object-cover"
                :src="require(`~/assets/images/whatwhat-svg.webp`)"
                alt=""
              />
            </div>
            <div
              class="
                absolute
                px-24
                inset-0
                lg:h-full
                h-3/4
                flex
                justify-start
                align-center
                lg:p-96
              "
            >
              <h2
                class="
                  sm:w-96
                  h2-home
                  z-10
                  text-center
                  capitalize
                  font-semibold
                  leading-4
                  text-5xl
                  md:text-7xl
                  lg:text-9xl
                  transform
                  sm:m-auto
                "
              >
                <span class="text-mainRed animatedSpans">
                  {{ $t('limited') }} </span
                >, <span class="animatedSpans">{{ $t('custom') }}</span
                >,
                <i class="animatedSpans">{{ $t('handmade') }} </i>
                <span class="animatedSpans"> {{ $t('merchendise') }}</span>
              </h2>
            </div>
            <div
              class="
                lg:max-w-xl
                inset-y-0
                right-0
                z-10
                flex
                align-center
                justify-end
                max-w-xs
              "
            >
              <img
                class="object-cover"
                :src="require(`~/assets/images/whatwhat1-svg.webp`)"
                alt=""
              />
            </div>
          </div> -->

          <div
            class="lg:mt-28 h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-9 p-14 lg:p-48 justify-self-stretch forthContainer content"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl lg:text-7xl p-5 text-center">
                  {{ $t('lighters') }}
                </h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
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
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto pictureDivImages"
                alt=""
              />
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-20 lg:p-48 justify-self-stretch thirdContainer content"
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
                <h3 class="text-6xl p-5 text-center">
                  {{ $t('acapulcoShirt') }}
                </h3>
                <!-- <img class="transform scale-75" src="~/assets/images/fsdf.png" alt="" /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-20 lg:p-48 justify-self-stretch forthContainer content"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl lg:text-7xl p-5 text-center">
                  {{ $t('acapulcoMatchboxes') }}
                </h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div
              class="pictureDiv lg:order-last cursor-pointer bg-red-200 shadow-2xl"
            >
              <img
                src="~/assets/images/matchbox.webp"
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto pictureDivImages"
                alt=""
              />
            </div>
          </div>
          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-20 lg:p-48 justify-self-stretch thirdContainer content"
          >
            <div class="pictureDiv lg:order-first cursor-pointer bg-red-200">
              <img
                src="~/assets/images/short.webp"
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
              <h1
                class="absolute m-3 font-mainFont rounded-full py-2 right-0 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
              >
                {{ $t('comingSoon') }}
              </h1>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl p-5 text-center">
                  {{ $t('acapulcoShorts') }}
                </h3>
                <!-- <img class="transform scale-75" src="~/assets/images/fsdf.png" alt="" /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="h-screen w-screen flex flex-col lg:flex-row align-center justify-center space-y-6 p-20 lg:p-48 justify-self-stretch thirdContainer content"
          >
            <div
              class="pictureDiv lg:order-last cursor-pointer bg-red-200 my-10"
            >
              <img
                src="~/assets/images/Hoodie.webp"
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
              <h1
                class="absolute m-3 font-mainFont rounded-full py-2 right-0 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
              >
                {{ $t('comingSoon') }}
              </h1>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex justify-end">
                <h3 class="text-6xl p-5 text-center">
                  {{ $t('acapulcoHoodies') }}
                </h3>
                <!-- <img
                  src="~/assets/images/Hoodie.png"
                  class="transform scale-95 object-contain lg:scale-100"
                  alt=""
                /> -->
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="learnMoreText">{{ $t('showMe') }}</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="h-screen fifthContainer flex flex-col align-center justify-center space-y-6 content p-20 justify-self-stretch"
          >
            <div class="pictureDiv lg:order-first cursor-pointer bg-red-200">
              <img
                src="~/assets/images/collection.webp"
                class="object-fill sm:w-96 h-full lg:max-w-lg md:max-w-2xl drop-shadow-2xl m-auto relative pictureDivImages"
                alt=""
              />
              <h1
                class="absolute m-3 font-mainFont rounded-full py-2 right-0 comingSoon px-8 text-mainBlue bg-goldie text-2xl lg:text-3xl font-bold"
              >
                {{ $t('comingSoon') }}
              </h1>
            </div>

            <div class="textDiv">
              <h3 class="text-6xl mt-3 text-center">
                {{ $t('collections') }}
              </h3>
            </div>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="learnMoreText">{{ $t('showMe') }}</span>
              </button>
            </NuxtLink>
            <div></div>
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
    window.addEventListener('scroll', this.handleScroll)

    this.animatePictureDiv()
    this.animateOnScroll()
    // this.animateScrollDownBtn()
    // this.peaceSignAnimation()
    // this.animatePeaceSign()
  },
  methods: {
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
          scale: 0.5,
          ease: 'Sine.easeOut',
          scrollTrigger: {
            trigger: pictureDiv,
            scrub: true,

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
      const tl = this.$gsap.timeline()

      tl.fromTo(
        '.acapulco-div',
        {
          opacity: 1,
          y: 40,
        },
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            trigger: '.acapulco',
          },
        }
      )
      const spans = this.$gsap.utils.toArray('.animatedSpans')
      spans.forEach((span) => {
        this.$gsap.fromTo(
          span,
          {
            y: 200,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'Sine.easeOut',
            scrollTrigger: {
              start: 'top bottom',
              scrub: 1.5,
              end: 'top 70%',
              trigger: span,
              stagger: 0.1,
            },
          }
        )
      })

      const contents = this.$gsap.utils.toArray('.content')
      contents.forEach((content) => {
        this.$gsap.fromTo(
          content,
          {
            y: -120,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'Power1.easeInOut',
            scrollTrigger: {
              scrub: 0.7,
              start: 'top bottom',
              end: 'top center',
              trigger: content,
              stagger: 0.1,

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
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: transform ease-in-out 0.5s;
  padding: 8px 45px;
  font-family: 'Yanone Kaffeesatz', 'Estedad';
}

.learnMoreBtn:hover {
  transform: scale(1.05);
  background-color: #120129;
  color: #ff4a68;
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

.pictureDiv {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #d8bbff;
  }

  45% {
    background-color: #a6a6db;
  }

  100% {
    background-color: #ade7e7;
  }
}

@keyframes color-change {
  0% {
    background-color: #595bee;
  }

  50% {
    background-color: #55dd8e;
  }

  100% {
    background-color: #83f1f1;
  }
}
</style>
