<script setup>
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const store = usePostsStore();

const { posts  } = storeToRefs(store);
const { addPosts } = store;

onMounted(() => {
  document.getElementsByClassName('editable')[0].onfocus = ()=>{
    document.getElementsByClassName('placeholder')[0].style.display = "none";
  }
})

function addPost() {
  addPosts({ content: document.getElementsByClassName('editable')[0].innerHTML, images: uploadedImages ? uploadedImages.value : null })
  
  document.getElementsByClassName('editable')[0].innerHTML = '';
  document.getElementsByClassName('placeholder')[0].style.display = "block";
  uploadedImages.value = [];
}


const fileInput = ref(null);
const uploadedImages = ref([]);

function changeProfilePic() {
    if (fileInput.value) {
        fileInput.value.click();
    }
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadedImages.value.push(URL.createObjectURL(file));
  }
};

</script>
<template>
    <div class="input">
        <div class="wrapper">
            <div class="input-box">
              <div class="tweet-area">
                  <span class="placeholder">{{ $t('whatsHappening') }}</span>
                  <div class="input editable" contenteditable="true" spellcheck="false">
                  </div>
                  <div class="images-box">
                      <img v-for="img in uploadedImages" :src="img" alt="uploaded image">
                  </div>
              </div>
            </div>
            <div class="bottom">
              <ul class="icons">
                  <li  @click="changeProfilePic">
                      <img src="~/assets/img/image.svg" alt="upload image">
                  </li>
              </ul>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                style="display: none"
                @change="handleFileChange"
              />
              <div class="content" @click="addPost">
                  <button>
                    Send
                  </button>
              </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .input {
        width: 100%;
        height: 100%;
        padding: 1rem 1rem;
    }
::selection{
  color: #fff;
  background: #1da1f2;
}
.wrapper{
  background: #fff;
  width: 100%;
  border-radius: 15px;
  padding: 25px 25px 15px 25px;
  border: 1px solid rgba(150, 150, 150, 0.40);
}
.input-box{
  padding-top: 10px;
  border-bottom: 1px solid rgba(150, 150, 150, 0.40);
}
.input-box .tweet-area{
  position: relative;
  overflow-y: auto;
}
.tweet-area::-webkit-scrollbar{
  width: 0px;
}
.tweet-area .placeholder {
  position: absolute;
  margin-top: 10px;
  margin-left: 18px;
  font-size: 22px;
  color: #98A5B1;
  pointer-events: none;
}
.tweet-area .input{
  outline: none;
  font-size: 17px;
  min-height: inherit;
  word-wrap: break-word;
  word-break: break-all;
}
.tweet-area .editable{
  position: relative;
  z-index: 5;
}
.tweet-area .readonly{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: transparent;
  background: transparent;
}
.readonly .highlight{
  background: #fd9bb0;
}
.input-box .privacy{
  color: #1da1f2;
  margin: 15px 0;
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 50px;
  cursor: pointer;
}
.privacy:hover, .icons li:hover{
  background: #e7f5fe;
}
.privacy i{
  font-size: 18px;
}
.privacy span{
  font-size: 15px;
  font-weight: 600;
  margin-left: 7px;
}
.bottom{
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: space-between;
}
.bottom .icons{
  display: inline-flex;
}
.icons li{
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  margin: 0 2px;
  height: 38px;
  width: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.bottom .content{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bottom button{
  padding: 9px 18px;
  border: none;
  outline: none;
  border-radius: 50px;
  background: #1da1f2;
  color: #fff;
  opacity: 0.5;
  pointer-events: none;
}
.bottom button img {
    width: 30px;
    height: 30px;
}
.bottom button.active{
  opacity: 1;
  pointer-events: auto;
}
.bottom button:hover{
    background: #0d8bd9;
}
.images-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.images-box img {
  width: 150px;
  height: 150px;
}
</style>