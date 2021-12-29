import { onMounted, ref } from 'vue'
import axios from 'axios'

const getStory = (id) => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0'
  const story = ref(null)
  const photos = ref([
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
    '/img/12.jpg',
  ])

  onMounted(async () => {
    story.value = await axios.get(`${baseUrl}/item/${id}.json`)
  })
  
  
  return { story, photos }
}

export default getStory
