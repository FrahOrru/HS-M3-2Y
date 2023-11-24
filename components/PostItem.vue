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
    .content {
        padding: 1rem 6rem;
    }
    
    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
    .images img {
        width: 200px;
        height: 200px;
        
    }
</style>