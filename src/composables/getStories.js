import { onMounted, ref } from 'vue'
import axios from 'axios'

const getStories = () => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0'
  const stories = ref([])
  const images = ref([
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/img/11.jpg',
  '/img/12.jpg'])

  onMounted(async () => {
    const storyIds = await axios.get(`${baseUrl}/topstories.json`)
    let indexes = [];

    while (indexes.length < 10) { 
      const x = Math.floor(Math.random() * storyIds.data.length)
      if (indexes.indexOf(x) < 0) {
        indexes.push(x);
      }
    }

    for (let i = 0; i < indexes.length; i++) {
      const storyId = storyIds.data[indexes[i]]
      const story = await axios.get(`${baseUrl}/item/${storyId}.json`)
      story.data.user = await axios.get(`${baseUrl}/user/${story.data.by}.json`)
      stories.value.push(story)
    }

    stories.value.sort(compareScore)
  })

  return { stories, images }
}

const compareScore = (a, b) => {
  if (a.data.score > b.data.score) {
    return -1
  }

  if (a.data.score < b.data.score) {
    return 1
  }
  return 0
}

export default getStories