<template>
  <transition-group appear tag="section" @before-enter="beforeEnter" @enter="enter">
    <Story v-for="story in stories.data" :key="story" :id="story" />
  </transition-group>
</template>

<script>
import gsap from 'gsap'
import getStories from '@/composables/getStories'
import Story from '@/components/Story.vue'

export default {
  name: 'App',
  components: { Story },
  setup () {
    const stories = getStories()

    const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }
   
    { return beforeEnter, enter, stories }
  }
}
</script>
