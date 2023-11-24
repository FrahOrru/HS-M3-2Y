<script setup>
    import { usePostsStore } from '@/stores/posts'

    const store = usePostsStore();

    const postsValue = computed(() => store.posts);

</script>
<template>
    <div>
        <Search></Search>
        <div class="top-section">
            <ProfileCard size="big"></ProfileCard>
            <PostInput></PostInput>
        </div>
        <div class="bottom-section">
            <SideOptions></SideOptions>
            <div class="posts">
                <div class="post" v-for="post in postsValue">
                    <PostItem :post="post"></PostItem>
                    <hr>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bottom-section{
        display: grid;
        grid-template-columns: 30% 70%;
    }
    .top-section {
        display: grid;
        grid-template-columns: 20% 80%;
    }

    @media only screen and (max-width: 768px) {
        .bottom-section {
            display: flex;
        }
        .top-section {
            display: flex;
            flex-direction: column;
        }
    }
</style>