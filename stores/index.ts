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

  function showToast(m: string) {
    message.value = m
    show.value = !!m
  }

  function hideToast() {
    show.value = false
    message.value = null
  }

  return { message, show, showToast, hideToast }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInspectStore, import.meta.hot));
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot));
}