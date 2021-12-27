<template>
  <section>
    <Story v-for="story in stories.data" :key="story" :id="story" />
  </section>
</template>

<script>
import getStories from '@/composables/getStories'
import Story from '@/components/Story.vue'

export default {
  name: 'App',
  components: { Story },
  setup () {
    const stories = getStories()

    { return stories }
  }
}
</script>
