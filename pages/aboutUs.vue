<i18n lang="yaml">
en:
  hi: 'Hi!'
  weAre: 'We Are'
  Acapulco: 'Acapulco!'
  whatIsAcapulco: 'A clothing and accessory design brand that tries to color your moments'

  weAreACreativeTeam: 'Acapulco comes from a Creative Team Based in Iran'
  ourTeam: 'Our team is consisted of two'
  fullStack: 'FullStack Developers'
  andA: 'and a'
  digital: 'Digital Artist'
  consisted: ' '
  Kesler: 'Kesler'
  Chao: 'Chao'
  Greez: 'Greez'

fa:
  hi: 'سلام'
  weAre: 'ما'
  Acapulco: 'آلکاپلکوییم'
  whatIsAcapulco: 'یک برند طراحی لباس و اکسسوری که سعی میکنه لحظه هاتونو رنگارنگ کنه'
  weAreACreativeTeam: 'آکاپلکو ایده ی یک تیم خلاق  از ایرانِ'
  ourTeam: 'تیم ما از دو'
  fullStack: 'برنامه نویس فول استک وب'
  andA: 'و یک'
  digital: 'نقاش دیجیتال'
  consisted: 'تشکیل میشه'
  Kesler: 'کسلر'
  Chao: 'چاوو'
  Greez: 'گریز'
</i18n>
<template>
  <v-app class="body overflow-hidden">
    <!-- peace thing
    <a href="https://www.freepik.com/vectors/background"
      >Background vector created by freepik - www.freepik.com</a
    >
    the hippies
    <a href="https://www.freepik.com/vectors/vintage"
      >Vintage vector created by macrovector - www.freepik.com</a
    >
    black cat
    <a href='https://www.freepik.com/vectors/animals'>Animals vector created by macrovector - www.freepik.com</a> -->
    <div id="main" class="">
      <LazyHydrate class="z-50 fixed" when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
        />
      </LazyHydrate>
      <div class="p-6 h-full w-full flex flex-col align-center panelContainer">
        <div
          class="relative flex h-screen w-screen justify-center align-center NavbarTrigger logo"
        >
          <img
            class="absolute thirdPic"
            src="../assets/images/logo-second.webp"
            alt=""
          />
          <img
            class="absolute firstPic"
            src="../assets/images/logo-third.webp"
            alt=""
          />
          <img
            class="absolute secondPic"
            src="../assets/images/logo-forth.webp"
            alt=""
          />
          <img
            class="absolute forthPic"
            src="../assets/images/logo-first.webp"
            alt=""
          />
        </div>
        <div
          class="h-auto mb-4 px-12 lg:px-36 w-screen introText align-center flex flex-col text-center justify-start"
        >
          <h1 class="text-mainRed lg:text-10xl text-9xl hiText">
            {{ $t('hi') }}
          </h1>
          <h3 class="text-mainBlue lg:text-8xl text-7xl weAreText">
            {{ $t('weAre') }}
          </h3>
          <h3 class="text-7xl lg:text-9xl text-goldie font-bold acapulco">
            {{ $t('Acapulco') }}
          </h3>
          <div class="text-darkPurple space-y-6 mt-20 text-4xl lg:text-6xl">
            <h3 class="text-mainBlue">{{ $t('whatIsAcapulco') }}</h3>
            <h3>{{ $t('weAreACreativeTeam') }}</h3>
            <h3>
              {{ $t('ourTeam') }}
              <span class="text-mainRed p-2 font-black">
                {{ $t('fullStack') }}
              </span>
              {{ $t('andA') }}
              <span class="text-mainRed p-2 font-black">
                {{ $t('digital') }}
              </span>
              {{ $t('consisted') }}
            </h3>
          </div>
        </div>

        <div
          class="h-auto mt-5 lg:h-dialog w-screen text-center space-y-6 mb-7 p-5 flex flex-col lg:flex-row justify-around lg:align-start align-center"
        >
          <div
            class="flex flex-col KeslerDiv h-1/3 justify-center align-center space-y-2"
          >
            <a
              href="https://instagram.com/famousKesler/"
              class="flex flex-col justify-center align-center space-y-2 lg:space-y-4"
            >
              <img
                class="w-rem25 Kesler cursor-pointer lg:mb-4"
                src="../assets/images/Kesler.webp"
                alt=""
              />
              <h1
                class="font-mainFont font-black text-3xl lg:text-5xl text-mainBlue"
              >
                {{ $t('Kesler') }}
              </h1>
              <h3
                class="font-mainFont font-extralight text-3xl lg:text-4xl text-goldie"
              >
                {{ $t('digital') }}
              </h3>
            </a>
          </div>
          <div
            class="flex flex-col ChaoDiv h-1/3 justify-center align-center space-y-2"
          >
            <a
              href="https://instagram.com/comanche.chao/"
              class="flex flex-col justify-center align-center space-y-2 lg:space-y-4"
            >
              <img
                class="w-rem25 Chao cursor-pointer"
                src="../assets/images/Chao.webp"
                alt=""
              />
              <h1
                class="font-mainFont font-black text-3xl lg:text-5xl text-mainBlue"
              >
                {{ $t('Chao') }}
              </h1>
              <h3
                class="font-mainFont font-extralight text-3xl lg:text-4xl text-mainGreen"
              >
                {{ $t('fullStack') }}
              </h3>
            </a>
          </div>
          <div class="flex flex-col GreezDiv h-1/3 justify-center align-center">
            <a
              href="https://instagram.com/just_greez"
              class="flex flex-col justify-center align-center space-y-2 lg:space-y-4"
            >
              <img
                class="w-rem25 Greez cursor-pointer"
                src="../assets/images/Greez.webp"
                alt=""
              />
              <h1
                class="font-mainFont font-black my-4 text-3xl lg:text-5xl text-mainBlue"
              >
                {{ $t('Greez') }}
              </h1>
              <h3
                class="font-mainFont font-extralight text-3xl lg:text-4xl text-pink-700"
              >
                {{ $t('fullStack') }}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    Navbar: () => import('~/layouts/TheNavbar.vue'),
  },

  mounted() {
    this.logoApearAnimation()
    this.logoRotate()
    this.pageScrollAnimation()

    // tl.to('.panelContainer', 5, { x: -window.innerWidth })

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: '.panelContainer',
    //   start: 'center center',
    //   end: '+=4000',
    //   scrub:true,
    //   pin: true
    // })

    // const totalPanels = document.querySelectorAll('.panels')
    // const totalPanelCount = totalPanels.length
    // console.log(totalPanelCount)

    // const gsap = this.$gsap
    // const panels = gsap.utils.toArray('.panels')

    // gsap.to(panels, {
    //   xPercent: -100 * (totalPanelCount - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.panelContainer',
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (totalPanelCount - 1),
    //     end: () => '+=' + document.querySelector('.panelContainer').offsetWidth,
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //   },
    // })
  },
  methods: {
    logoRotate() {
      const gsap = this.$gsap
      gsap
        .timeline({
          scrollTrigger: {
            start: 'top top',
            end: '+=8000',
            scrub: 0.2,
            trigger: '.panelContainer',
          },
        })
        .to('.logo', {
          rotation: 360 * 7,
          duration: 0.2,
          ease: 'expo.out',
        })
    },
    pageScrollAnimation() {
      const gsap = this.$gsap
      const tl = gsap.timeline()
      tl.from('.hiText', {
        y: -100,
        opacity: 0,

        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.introText',
          start: 'top bottom',
          end: 'top center',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.weAreText', {
        y: -100,
        opacity: 0,
        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.weAreText',
          start: 'top bottom',
          end: 'top 30%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.acapulco', {
        y: 100,
        opacity: 0,
        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.acapulco',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.Kesler', {
        y: 200,
        opacity: 0,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Kesler',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.7,
          toggleActions: 'play none none reverse',
        },
      })

      tl.from('.Chao', {
        y: 200,
        opacity: 0,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Chao',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.7,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.Greez', {
        y: 200,
        opacity: 0,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Greez',
          start: 'top bottom',
          end: 'top 50%',
          scrub: 0.7,
          toggleActions: 'play none none reverse',
        },
      })

      // gsap.from('.hippie2-text', {
      //   scale: 0,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.panel2',

      //     start: 'top center',
      //     end: 'bottom bottom',
      //     scrub: 2,
      //     toggleActions: 'restart none resume pause',
      //   },
      // })
      // gsap.from('.hippie3', {
      //   y: -350,
      //   opacity: 0,
      //   ease: 'Power2.easeIn',
      //   scrollTrigger: {
      //     trigger: '.panel3',
      //     start: 'top center',
      //     end: 'bottom bottom',
      //     scrub: 2,
      //     toggleActions: 'restart none resume pause',
      //   },
      // })
      // gsap.from('.hippie3-text', {
      //   scale: 0,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.panel3',

      //     start: 'top center',
      //     end: 'bottom bottom',
      //     scrub: 2,
      //     toggleActions: 'restart none resume pause',
      //   },
      // })
      // gsap.from('.backButton', {
      //   y: 400,
      //   ease: 'Power4.easeIn',
      //   scrollTrigger: {
      //     trigger: '.panel3',
      //     start: 'top bottom',
      //     end: 'bottom bottom',
      //     scrub: 1,
      //     toggleActions: 'restart none resume pause',
      //   },
      // })
    },
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
      tl.from('.forthPic', 1, {
        opacity: 0,
        ease: 'expo.out',
      })
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Roboto Slab', 'Rezvan';
}
.introText {
  border-radius: 10px;
  font-family: 'Roboto Slab', 'Rezvan';
}

.KeslerDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.KeslerDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
.ChaoDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.ChaoDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
.GreezDiv:hover {
  cursor: pointer;
  filter: drop-shadow(1.8);
  filter: brightness(0.6);
  transition: ease-in-out 0.3s;
}
.GreezDiv:active {
  filter: brightness(1.2);
  scale: 1.2;
  transition: ease-in-out 0.3s;
}
</style>
