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
          class="h-screen lg:h-auto w-screen introText align-center flex flex-col text-center justify-start"
        >
          <h1 class="text-mainRed lg:text-10xl text-10xl hiText">Hi!</h1>
          <h3 class="text-mainBlue lg:text-8xl text-7xl weAreText">We are</h3>
          <h3 class="text-7xl lg:text-9xl text-goldie font-bold acapulco">
            Acapulco!
          </h3>
          <div class="text-darkPurple mt-20 text-4xl lg:text-6xl">
            <h3>We are a Creative Team Based in Iran</h3>
            <h3>
              Our team is consisted of Two
              <span class="text-mainRed p-2 font-black">
                FullStack Developers
              </span>
              and a
              <span class="text-mainRed p-2 font-black"> Digital Artist </span>
            </h3>
          </div>
        </div>

        <div
          class="h-screen lg:h-dialog w-screen p-10 flex flex-col lg:flex-row justify-around lg:align-start align-center"
        >
          <img
            class="w-96 Greez cursor-pointer"
            src="../assets/images/Greez.webp"
            alt=""
          />
          <img
            class="w-96 Kesler cursor-pointer"
            src="../assets/images/Kesler.webp"
            alt=""
          />
          <img
            class="w-96 Chao cursor-pointer"
            src="../assets/images/Chao.webp"
            alt=""
          />
        </div>
      </div>
      <LazyHydrate when-visible>
        <Footer />
      </LazyHydrate>
    </div>
    <!-- <section class="panel1 w-screen h-screen mt-15">
        <div
          class="m-1 hippie1-text text-center p-8 text-5xl text-mainBlue font-bold"
        >
          Hi. we are a bunch of guys From a less known city of a dystopian
          country
        </div>
        <img class="hippie1" src="~/assets/images/hippie1.png" alt="" />
      </section>
      <section
        class="panel2 grid content-start place-content-center w-screen h-screen"
      >
        <div
          class="m-1 hippie2-text text-center p-8 text-5xl text-mainBlue font-bold"
        >
          While we're not lost and consumed by the sheer pressure of human
          survival We tend to smoke, and create stuff
        </div>
        <img
          class="hippie2 justify-self-center"
          src="~/assets/images/hippie2.png"
          alt=""
        />
      </section>
      <section
        class="panel3 grid grid-rows-3 gap-3 content-center place-content-end w-screen h-screen"
      >
        <div
          class="m-1 hippie3-text text-center p-8 text-5xl text-mainBlue font-bold"
        >
          In the hope of finding the long lost peace that we all crave Along the
          way.
        </div>
        <img class="hippie3" src="~/assets/images/hippie3.png" alt="" />
        <div
          class="backButton lg:w-1/2 self-end flex justify-center p-2 rounded-xl font-bold text-5xl text-center bg-Rose-600 transform scale-75"
        >
          <div
            class="flex flex-col capitalize font-extrabold content-center justify-center"
          >
            <NuxtLink to="/">
              <span class="text-mainBlue"> Back to our Shopping journey </span>
            </NuxtLink>
          </div>
          <img
            class="hippieCoco justify-self-center self-center"
            src="~/assets/images/samadhiCoco.png"
            alt=""
          />
        </div>
      </section>
    </div> -->
    <!-- <div class="panels"> Hi. we are a bunch of guys From a less known city of a dystopian
            country While we're not lost and consumed by the sheer pressure of
            human survival We tend to smoke, and create stuff In the hope of
            finding the long lost peace that we all crave Along the way.</div>
        </div> -->
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    Navbar: () => import('~/layouts/TheNavbar.vue'),
    Footer: () => import('../layouts/TheFooter.vue'),
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
        autoAlpha: 0,

        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.introText',
          start: 'top bottom',
          end: 'top center',
          scrub: 0.3,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.weAreText', {
        y: -100,
        autoAlpha: 0,
        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.weAreText',
          start: 'top bottom',
          end: 'top 30%',
          scrub: 0.3,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.acapulco', {
        y: 100,
        autoAlpha: 0,
        scale: 3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.acapulco',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.3,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.Greez', {
        x: 200,
        scale: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Greez',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.3,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.Kesler', {
        x: -200,
        scale: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Kesler',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.3,
          toggleActions: 'play none none reverse',
        },
      })
      tl.from('.Chao', {
        x: 200,
        scale: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.Chao',
          start: 'top bottom',
          end: 'top 35%',
          scrub: 0.3,
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
.introText {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  font-family: 'Roboto Slab', 'Rezvan';
}
</style>
