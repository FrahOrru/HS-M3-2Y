<script setup>
import { ref } from 'vue';
import { useColorStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const store = useColorStore();

const { mode  } = storeToRefs(store);
const { changeMode } = store;

const isDarkMode = ref(mode);

const toggleColorMode = () => {
  document.body.classList.toggle('dark-mode', mode === 'dark' ? true : false);
  if(mode === 'dark') {
    
  }
  changeMode();
};

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
isDarkMode.value = prefersDarkMode;
toggleColorMode();

</script>

<template>
    <div class="flex justify-center items-center">
    <label class="color-switch">
      <input type="checkbox" v-model="isDarkMode" @change="toggleColorMode" />
      <span class="slider"></span>
    </label>
    <p>{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</p>
  </div>
</template>

<style scoped>
.color-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.color-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Dark mode styles */
.dark-mode {
  background-color: #333;
  color: #fff;
}

</style>