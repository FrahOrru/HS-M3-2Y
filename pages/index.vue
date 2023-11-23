<template>
    <div>
        <div class="top-section">
            <ProfileCard></ProfileCard>
            <PostInput></PostInput>
        </div>
        <div class="bottom-section">
            <SideOptions></SideOptions>
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
</style>