<script setup>
import { useImageStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const props = defineProps({
    size: 'big' | 'small'
});

const store = useImageStore();

const { imageUrl } = storeToRefs(store);
const { changeImage } = store;

const fileInput = ref(null);

function changeProfilePic() {
    if (fileInput.value) {
        fileInput.value.click();
    }
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    changeImage(URL.createObjectURL(file));
  }
};
</script>
<template>
    <div class="profile-card" :class="size === 'small' ? 'small' : null">
        <label class="image-circle" for="fileInput" :style="`background: url('${imageUrl}'); background-size: cover; background-position: center;`">
            <div class="modify-profilepic" v-if="size === 'big'" @click="changeProfilePic">
                <img src="~/assets/img/pencil3.png" alt="modify profile pic">
            </div>
        </label>
            <input
                ref="fileInput"
                type="file"
                accept="image/*"
                style="display: none"
                @change="handleFileChange"
            />
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
.modify-profilepic:hover {
    cursor: pointer;
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
.small {
    flex-direction: row;
    width: fit-content;
    padding: 0.5rem 2rem;
}
.small .image-circle {
    width: 50px;
    height: 50px;
}
.small p {
    font-weight: bold;
}
</style>