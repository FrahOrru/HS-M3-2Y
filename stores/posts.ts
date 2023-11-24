import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
    const posts: Ref<Post[]> = ref([])

    function addPosts(post: Post) {
      console.log(post)
      posts.value.push(post)
      console.log(posts)
    }
  
    return { posts, addPosts}
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