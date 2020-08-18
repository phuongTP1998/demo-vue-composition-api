import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const getTodoById = id => {
  return api.get(`todos/${id}`)
}
