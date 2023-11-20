<script setup>
onMounted(() => {
    setTimeout(() => {
        document.getElementsByClassName('loader-circle')[1].style.animation = 'loaderAnimation2 6s infinite';

    }, 3000)
})
</script>
<template>
    <div class="loader-container">
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
    </div>
</template>
<style scoped>
 .loader-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .loader-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ffffff7f;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .loader-circle:nth-child(1) {
        width: 40px;
        height: 40px;
        animation: loaderAnimation 3s infinite;
    }
    .loader-circle:nth-child(2) {
        width: 40px;
        height: 40px;
        /* animation: loaderAnimation2 6s infinite; */

    }

    @keyframes loaderAnimation {
        30% {
            transform: translate(30px, 5px);
        }
        40% {
            transform: translate(30px, -20px);
        }
        50% {
            transform: translate(30px, -40px);
        }
        60% {
            transform: translate(20px, -50px);
        }
    }

    @keyframes loaderAnimation2 {
        40% {

        }
        50% {
            transform: translate(-40px, 20px);
        }
        100% {
            /* transform: translate(20px, -40px); */
        } 
    }
</style>