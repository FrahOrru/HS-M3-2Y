<script setup>
    import { ref } from 'vue';

    const props = defineProps({
      blackMode: Boolean
    });

    const languages = ['en', 'it'];


    const isOpen = ref(false);
    const selected = ref('en');

    function toggleDropdown() {
        isOpen.value = !isOpen.value;
    }

    function closeDropdown() {
        isOpen.value = !isOpen.value;
    }

    function selectOption(option) {
        selected.value = option;
        toggleDropdown();
    }

    function switchLocale() {
      const newLocale = this.$i18n.locale === 'en' ? 'it' : 'en';
      this.$i18n.setLocale(newLocale);
    }

    const { locale, locales } = useI18n()
    const switchLocalePath = useSwitchLocalePath()

    const availableLocales = computed(() => {
      return (locales.value).filter(i => i.code !== locale.value)
    })
</script>
<template>
  <div class="dropdown relative mr-24 cursor-pointer p-2" @click="toggleDropdown" @focusout="closeDropdown">
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      <div class="flex change-language" :class="blackMode ? 'black-mode' : null">
        {{locales.find(loc => loc.name != locale.name).name === 'EN' ? 'English' : 'Italian'}}
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped>
.dropdown {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
p {
    font-family: 'Readex Pro', sans-serif;
}
select {
    background: transparent;
}
option {
    background-color: transparent;
}
.black-mode {
  color: #fff;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 52%;
  z-index: 100;
}
.change-language {
  padding: 8px 16px;
}
@media only screen and (max-width: 768px) {
  .dropdown {
    margin-right: 4%;
  }
}
</style>