<template>
  <div>
    <h1>Vue Option API</h1>
    <div>
      <div v-if="loading">
        Loading ...
      </div>
      <div v-else>
        {{ todo }}
      </div>
    </div>
  </div>
</template>

<script>
import { getTodoById } from '../services/api'
export default {
  data() {
    return {
      todo: null,
      loading: false,
    }
  },
  // Nuxt.js
  // SSR (server side rendering): asyncData/fetch
  // created run on server
  // CSR (client side rendering): mounted
  mounted() {
    this.getTodoData()
  },
  methods: {
    async getTodoData() {
      this.loading = true
      try {
        const result = await getTodoById(1)
        this.todo = result.data
      } catch (e) {
        console.log({ e })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
