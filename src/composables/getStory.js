import { onMounted, ref } from 'vue'
import axios from 'axios'

const getStory = (id) => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
  const story = ref(null)

  onMounted(async () => {
    story.value = await axios.get(`${baseUrl}/item/${id}.json`)
  })
  
  return { story }
}

export default getStory
