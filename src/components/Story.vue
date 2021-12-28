<template>
  <article v-if='story' class='story'>
    <span></span>
    <h2><a :href='story.data.url'>{{ story.data.title }}</a></h2>
    <p>Timestamp: {{ story.data.time }}</p>
    <p>Story Score: {{ story.data.score }}</p>
    <p>Author: {{ story.data.by }}</p>
    <Karma :id="story.data.by" />
    <div class="story-image" :style="{backgroundImage: `url(${photos[Math.floor(Math.random() * photos.length)]})`}"></div>
  </article>
</template>

<script>
import getStory from '@/composables/getStory'
import Karma from '@/components/Karma.vue'

export default {
  components: { Karma },
  props: ['id'],
  setup (props) {
    const story = getStory(props.id)

    { return story }
  }
}
</script>
