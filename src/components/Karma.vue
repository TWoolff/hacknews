<template>
  <p v-if="user">Karma Score: {{ user.data.karma }}</p>
</template>

<script>
import getUser from '@/composables/getUser'

export default {
  props: ['id'],
  setup (props) {
    const user = getUser(props.id)

    { return user }
  }
}
</script>
