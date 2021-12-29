<template>
  <transition name="fade">
    <section>
      <div v-if="stories.length >= 10" class="grid">
        <article v-for="story in stories" :key="story" class="story">
          <span></span>
          <h2><a :href='story.data.url'>{{ story.data.title }}</a></h2>
          <p>Timestamp: {{ story.data.time }}</p>
          <p>Story Score: {{ story.data.score }}</p>
          <br>
          <p>Author: {{ story.data.by }}</p>
          <p>Karma Score: {{ story.data.user.data.karma }}</p>
          <div class="story-image" :style="{backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`}"></div>
        </article>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </section>
  </transition>
</template>

<script>
import getStories from '@/composables/getStories'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'App',
  components: { Spinner },
  setup () {
    const stories = getStories()
    const images = getStories()

    { return images, stories }
  }
}
</script>
