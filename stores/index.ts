import { defineStore } from 'pinia'

export const useInspectStore = defineStore('inspect', () => {
  const state = ref(null)
  const inspected = computed(() => state)
  function inspect(value: any) {
    state.value = value
  }

  return { state, inspected, inspect }
})

export const useToastStore = defineStore('toast', () => {
  const message = ref<string | null>(null)
  const show = ref<boolean>(false)
  const timer = ref<NodeJS.Timeout | undefined>(undefined)

  function showToast(m: string) {
    clearTimeout(timer.value)
    timer.value = undefined
    message.value = m
    show.value = !!m
    timer.value = setTimeout(hideToast, 5000)
  }

  function hideToast() {
    clearTimeout(timer.value)
    timer.value = undefined
    show.value = false
    message.value = null
  }

  return { message, show, showToast, hideToast }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInspectStore, import.meta.hot));
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot));
}