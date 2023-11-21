<template>
    <div class="loader-container">
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
        background-color: rgba(255, 255, 255, 0.498);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .loader-circle:nth-child(1) {
        width: 20px;
        height: 20px;

        animation-name: loaderAnimation, loaderAnimationEnd;
        animation-duration: 2s, 2s;
        animation-delay: 0s, 4s; 
        animation-timing-function: ease-in, ease-in;
        animation-iteration-count: infinite, infinite;
    }

    @keyframes loaderAnimation {
        0%{
            width: 20px;
            height: 20px;
        }
        50% {
            width: 50px;
            height: 50px;
        }
        
    }
    @keyframes loaderAnimationEnd {
        0%{
            width: 20px;
            height: 20px;
            transform: opacity(1);
            background-color: rgba(255, 255, 255, 1);

        }
        100%{
            width: 300vh;
            height: 300vh;
            background-color: rgba(255, 255, 255, 1);
        }
    }
</style>