<template>
  <div class="home-container">
    <app-navbar></app-navbar>
    <app-banner2>
      <template v-slot:action1>
        <div class="home-fragment1">
          <span class="home-text1">Get Started</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment2">
          <span class="home-text2">
            Your one-stop solution for all your healthcare needs
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment3">
          <span class="home-text3">Welcome to Smart Healthcare Portal</span>
        </div>
      </template>
    </app-banner2>
    <app-hero></app-hero>
    <span>
      <DateTimePrimitive
        format="DD/MM/YYYY"
        date="Fri Dec 06 2024 20:50:28 GMT+0500 (Pakistan Standard Time)"
      ></DateTimePrimitive>
    </span>
    <app-features1></app-features1>
    <app-cta></app-cta>
    <app-features2></app-features2>
    <app-pricing></app-pricing>
    <app-steps></app-steps>
    <app-testimonial></app-testimonial>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { DateTimePrimitive } from '@teleporthq/react-components'

import AppNavbar from '../components/navbar'
import AppBanner2 from '../components/banner2'
import AppHero from '../components/hero'
import AppFeatures1 from '../components/features1'
import AppCta from '../components/cta'
import AppFeatures2 from '../components/features2'
import AppPricing from '../components/pricing'
import AppSteps from '../components/steps'
import AppTestimonial from '../components/testimonial'
import AppContact from '../components/contact'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppBanner2,
    AppHero,
    DateTimePrimitive,
    AppFeatures1,
    AppCta,
    AppFeatures2,
    AppPricing,
    AppSteps,
    AppTestimonial,
    AppContact,
    AppFooter,
  },
  metaInfo: {
    title: 'Spotless Hungry Crocodile',
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-fragment1 {
  display: contents;
}
.home-text1 {
  display: inline-block;
}
.home-fragment2 {
  display: contents;
}
.home-text2 {
  display: inline-block;
}
.home-fragment3 {
  display: contents;
}
.home-text3 {
  display: inline-block;
}
</style>
