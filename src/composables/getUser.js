import { onMounted, ref } from 'vue'
import axios from 'axios'

const getUser = (id) => {
  const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
  const user = ref(null)

  onMounted(async () => {
    user.value = await axios.get(`${baseUrl}/user/${id}.json`)
  })
  
  return { user }
}

export default getUser
