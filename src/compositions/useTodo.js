import { onMounted, reactive, toRefs } from '@vue/composition-api'
import { getTodoById } from '../services/api'

export function useTodo(todoId = 1) {
  const data = reactive({
    todo: null,
    loading: false,
  })

  const getTodoData = async () => {
    data.loading = true
    try {
      const result = await getTodoById(todoId)
      data.todo = result.data
    } catch (e) {
      console.log({ e })
    } finally {
      data.loading = false
    }
  }

  const dataRefs = toRefs(data)

  onMounted(() => {
    getTodoData()
  })

  return {
    ...dataRefs,
  }
}
