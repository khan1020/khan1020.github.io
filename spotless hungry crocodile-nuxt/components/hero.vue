<template>
  <div class="hero-header78">
    <div class="hero-column thq-section-padding thq-section-max-width">
      <div class="hero-content1">
        <h1 class="hero-text1 thq-heading-1">{{ heading1 }}</h1>
        <p class="hero-text2 thq-body-large">{{ content1 }}</p>
      </div>
      <div class="hero-actions">
        <button class="thq-button-filled hero-button1">
          <span class="thq-body-small">{{ action1 }}</span>
        </button>
        <button class="thq-button-outline hero-button2">
          <span class="thq-body-small">{{ action2 }}</span>
        </button>
      </div>
    </div>
    <div class="hero-content2">
      <div
        class="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal"
      >
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image6Alt"
            :src="image6Src"
            class="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
          />
        </div>
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
          />
        </div>
      </div>
      <div
        class="hero-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal"
      >
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image12Alt"
            :src="image12Src"
            class="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
          />
        </div>
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="hero-container2">
        <style>
          @keyframes scroll-x {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - 16px));
            }
          }
  
          @keyframes scroll-y {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(calc(-100% - 16px));
            }
          }
        </style>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.js'

export default {
  name: 'Hero',
  props: {
    image10Alt: {
      type: String,
      default: 'Hero Image',
    },
    image4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1593491034932-844ab981ed7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    heading1: {
      type: String,
      default: 'Welcome to Smart Healthcare Portal',
    },
    image4Alt: {
      type: String,
      default: 'Hero Image',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Alt: {
      type: String,
      default: 'Hero Image',
    },
    image12Alt: {
      type: String,
      default: 'Hero Image',
    },
    image1Alt: {
      type: String,
      default: 'Hero Image',
    },
    image6Alt: {
      type: String,
      default: 'Hero Image',
    },
    image2Alt: {
      type: String,
      default: 'Hero Image',
    },
    image7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1579154491915-611e891d3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image9Alt: {
      type: String,
      default: 'Hero Image',
    },
    image11Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image11Alt: {
      type: String,
      default: 'Hero Image',
    },
    action2: {
      type: String,
      default: 'Secondary action',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image5Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image12Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1643297654399-5da3409e302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    action1: {
      type: String,
      default: 'Main action',
    },
    content1: {
      type: String,
      default:
        'Your one-stop solution for all your healthcare needs. Find doctors, book appointments, access medical records, and much more with our smart and user-friendly platform.',
    },
    image9Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1666887360742-d9280ba23bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image10Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1666887360711-446ce495ce4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2NXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Hero Image',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1666886573199-88a2ed65470d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUwMDE2MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image7Alt: {
      type: String,
      default: 'Hero Image',
    },
    image5Alt: {
      type: String,
      default: 'Hero Image',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.hero-header78 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.hero-column {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.hero-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.hero-text1 {
  text-align: center;
}
.hero-text2 {
  text-align: center;
}
.hero-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
}
.hero-content2 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.hero-row-container1 {
  width: 100%;
}
.hero-placeholder-image10 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image11 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image12 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image13 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image14 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image15 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image16 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image17 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image18 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image19 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image20 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image21 {
  width: 400px;
  height: 400px;
}
.hero-row-container2 {
  width: 100%;
}
.hero-placeholder-image22 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image23 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image24 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image25 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image26 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image27 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image28 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image29 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image30 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image31 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image32 {
  width: 400px;
  height: 400px;
}
.hero-placeholder-image33 {
  width: 400px;
  height: 400px;
}
.hero-container2 {
  display: contents;
}
@media(max-width: 767px) {
  .hero-content2 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .hero-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero-button1 {
    width: 100%;
  }
  .hero-button2 {
    width: 100%;
  }
}
</style>
