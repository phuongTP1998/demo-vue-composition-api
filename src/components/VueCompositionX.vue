<template>
  <div>
    <h1>Vue Composition API</h1>
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
import { useTodo } from '../compositions/useTodo'

export default {
  setup() {
    const { todo, loading } = useTodo(2)

    return {
      todo,
      loading,
    }
  },
}
</script>
