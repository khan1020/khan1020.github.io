<template>
  <div class="banner2-container1 thq-section-padding">
    <div class="banner2-max-width thq-section-max-width">
      <div class="banner2-container2">
        <h2 class="banner2-title thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="banner2-fragment3">
              <span class="banner2-text5">
                Welcome to Smart Healthcare Portal
              </span>
            </div>
          </slot>
        </h2>
        <h3 class="banner2-text1 thq-heading-3">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="banner2-fragment1">
              <span class="banner2-text3">
                Your one-stop solution for all your healthcare needs
              </span>
            </div>
          </slot>
        </h3>
      </div>
      <button type="button" class="banner2-button thq-button-filled">
        <span>
          <slot name="action1">
            <!--Default content for action1-->
            <div class="banner2-fragment2">
              <span class="banner2-text4">Get Started</span>
            </div>
          </slot>
        </span>
      </button>
      <video
        :src="video1Src"
        loop="true"
        muted="true"
        :poster="video1Poster"
        autoplay="true"
        class="banner2-video"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner2',
  props: {
    video1Src: {
      type: String,
      default:
        'https://videos.pexels.com/video-files/5083290/5083290-hd_2048_1080_25fps.mp4',
    },
    video1Poster: {
      type: String,
      default:
        'https://images.pexels.com/videos/5083290/pictures/preview-0.jpg',
    },
  },
}
</script>

<style scoped>
.banner2-container1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.banner2-max-width {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.banner2-container2 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  z-index: 100;
  align-items: center;
  flex-direction: column;
}
.banner2-title {
  text-align: center;
}
.banner2-text1 {
  text-align: center;
}
.banner2-button {
  z-index: 100;
}
.banner2-video {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.banner2-fragment1 {
  display: contents;
}
.banner2-text3 {
  display: inline-block;
}
.banner2-fragment2 {
  display: contents;
}
.banner2-text4 {
  display: inline-block;
}
.banner2-fragment3 {
  display: contents;
}
.banner2-text5 {
  display: inline-block;
}
</style>
