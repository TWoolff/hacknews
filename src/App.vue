<template>
  <section>
    <div v-if="stories.length >= 10" class="grid">
      <article v-for="story in stories" :key="story" class="story">
        <span></span>
        <h2><a :href='story.data.url'>{{ story.data.title }}</a></h2>
        <p>Timestamp: {{ story.data.time }}</p>
        <p>Date: {{ new Date(story.data.time * 1000).toLocaleDateString("en-UK") }}</p>
        <p>Story Score: {{ story.data.score }}</p>
        <p>Author: {{ story.data.by }}</p>
        <p>Karma Score: {{ story.data.user.data.karma }}</p>
        <div class="story-image" :style="{backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`}"></div>
      </article>
    </div>
    <div v-else> 
      <Loading />
    </div>
  </section>
</template>

<script>
import getStories from '@/composables/getStories'
import Loading from '@/components/Loading.vue'

export default {
  name: 'App',
  components: { Loading },
  setup () {
    const stories = getStories()
    const images = getStories()

    { return images, stories }
  }
}
</script>
