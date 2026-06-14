import { ref } from 'vue'

export function useNavToggle() {
  const isOpen = ref(false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function closeOnMobile() {
    if (window.innerWidth <= 767) {
      isOpen.value = false
    }
  }

  return { isOpen, open, close, toggle, closeOnMobile }
}
