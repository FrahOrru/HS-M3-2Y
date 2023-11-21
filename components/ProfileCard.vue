<template>
    <div class="profile-card">
        <div class="image-circle">
            <div class="modify-profilepic">
                <img src="~/assets/img/pencil3.png" alt="modify profile pic">
            </div>
        </div>
        <p>Francesca Orrù</p>
    </div>
</template>
<style scoped>
.profile-card {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
}
.image-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url('~/assets/img/profile-pic.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}
.modify-profilepic {
    position: absolute;
    bottom:0px;
    right: 1px;
    width: 15px;
    height: 15px;

    background: rgba(255, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    padding: 1rem;
    border-radius: 50%;
}
.modify-profilepic img {
    width: 15px;
    height: 15px;

    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
}
p {
    text-align: center;
}
</style>