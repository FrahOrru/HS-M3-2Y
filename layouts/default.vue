<script setup>
let loading = ref(true);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 4000)
})

</script>
<template>
    <div>
        <div v-if="loading">
            <Loading></Loading>
        </div>
        <div v-if="!loading">
            <Header></Header>
            <slot />
        </div>
    </div>
</template>