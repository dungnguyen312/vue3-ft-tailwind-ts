import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useThemeStore = defineStore('themes', ()=>{
  const currentTheme = ref<string>('dark')
 
  const theme = computed(() => currentTheme.value)
  function change(val:string= 'dark' ) {
    currentTheme.value = val
  }
  return {
    currentTheme,
    value:theme,
    change
  }
  
})