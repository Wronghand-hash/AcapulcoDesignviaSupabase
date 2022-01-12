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
    <div id="main" class="panelContainer">
      <LazyHydrate class="z-50 fixed" when-idle>
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

      <section class="panel1 w-screen h-screen mt-15">
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
    </div>
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
    Navbar: () => import('../layouts/TheNavbar.vue'),
  },

  mounted() {
    this.welcomeAnimation()
    this.pageAnimation()

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
    pageAnimation() {
      const gsap = this.$gsap

      gsap.from('.hippie2', {
        y: -500,
        opacity: 0,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.panel2',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 2,
          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.hippie2-text', {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: '.panel2',

          start: 'top center',
          end: 'bottom bottom',
          scrub: 2,
          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.hippie3', {
        y: -350,
        opacity: 0,
        ease: 'Power2.easeIn',
        scrollTrigger: {
          trigger: '.panel3',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 2,
          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.hippie3-text', {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: '.panel3',

          start: 'top center',
          end: 'bottom bottom',
          scrub: 2,
          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.backButton', {
        y: 400,
        ease: 'Power4.easeIn',
        scrollTrigger: {
          trigger: '.panel3',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        },
      })
    },
    welcomeAnimation() {
      const tl = this.$gsap.timeline()

      tl.from('.hippie1', 1, {
        opacity: 0,
        y: -500,
        delay: 1,
        ease: 'expo.out',
      })
      tl.from('.hippie1-text', 0.5, {
        opacity: 0,
        scale: 0.3,
        ease: 'expo.out',
      })
    },
  },
}
</script>

<style scoped>
.panelContainer {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 25px;
}
.backButton {
  transition: ease-in-out 0.3s;
  color: black !important;
}
.backButton:hover {
  transform: scale(1.1);
  filter: brightness(1.3);
}
.backButton:active {
  transform: scale(0.9);
  filter: brightness(0.5);
}
/* .body{
  min-height: 100vh;
  margin: 0;
}
.panelContainer {
  display: flex;
  flex-wrap: nowrap;
  
}

.panels {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
} */
</style>
