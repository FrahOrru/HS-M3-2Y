<template>
    <div class="side-options">
        <div class="side-options-item notifications">
            <img src="~/assets/img/notification.png" alt="notification icon">
            <p>{{$t('notifications')}}</p>
        </div>
        <hr>
        <div class="side-options-item profile">
            <img src="~/assets/img/account.png" alt="profile icon">
            <p>{{$t('profile')}}</p>
        </div>
    </div>
</template>
<style scoped>
 .side-options {
    height: 60vh;
    border-right: 1px solid rgba(150, 150, 150, 0.40);
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .side-options-item {
    margin: 0;
    height: 3rem;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
 }
 .side-options-item:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.49);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
 }
</style>