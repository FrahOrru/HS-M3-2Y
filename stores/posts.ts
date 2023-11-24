import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
    const posts: Ref<Post[]> = ref([])
    const storage: Ref<Post[]> = ref([])
    
    function addPosts(post: Post) {
      console.log(post)
      posts.value.push(post)
      console.log(posts)
    }

    function sortByContent(sortingString: string) {
      let tmpArray = [...posts.value];
      storage.value = [...posts.value];

      tmpArray = tmpArray.filter(x => x.content.includes(sortingString));

      posts.value = tmpArray;
    }

    function deleteResearch() {
      posts.value = [...storage.value]
    }
  
    return { posts, addPosts, sortByContent, deleteResearch}
  })

  export const useImageStore = defineStore('image', () => {
    const imageUrl = ref('/_nuxt/assets/img/profile-pic.jpg')

    function changeImage(url: string) {
      imageUrl.value = url
    }
  
    return { imageUrl, changeImage}
  })

  export const useColorStore = defineStore('color', () => {
    const mode = ref('light')

    function changeMode() {
      mode.value = mode.value === 'light' ? 'dark' : 'light';
    }
  
    return { mode, changeMode}
  })

  interface Post {
    content: String,
    images?: []
  }