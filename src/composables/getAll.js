import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const getStories = () => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0'
  const stories = ref([])

  onBeforeMount(async () => {
    stories.value = await axios.get(`${baseUrl}/topstories.json`)
    // ForEach(id) -> await axios.get(`${baseUrl}/item/${id}.json`)
    // ForEach(by) -> await axios.get(`${baseUrl}/user/${id}.json`)
  })

  // Computed: random 10 -> sort based on story score
  
  return { stories }
}

export default getStories
