import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const getStories = () => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0'
  const stories = ref([])

  onBeforeMount(async () => {
    stories.value = await axios.get(`${baseUrl}/topstories.json?print=pretty&limitToFirst=19&orderBy="$key"`)
  })
  
  return { stories }
}

export default getStories
