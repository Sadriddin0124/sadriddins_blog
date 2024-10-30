import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('counter', () => {
  const pathname = ref(0)
  const changePath = (path) => {
    pathname.value = path
  }

  return { pathname, changePath }
})
