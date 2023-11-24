<script setup>
    const props = defineProps({
        post: {}
    });
</script>
<template>
    <div class="post-item">
        <ProfileCard size="small"></ProfileCard>
        <div class="content">
            <p> 
                {{ post.content }}
            </p>
            <div class="images" v-if="post.images">
                <img v-for="img in post.images" :src="img" alt="image">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .post-item {
        display: flex;
        flex-direction: column;
    }
    .content p{
        padding: 1rem 6rem;
    }
    .images {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .images img {
        width: 200px;
        height: 200px;
    }
</style>