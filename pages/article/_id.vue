<template>
  <div>
    <h1>article Page</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticlePage',
  async asyncData(context){
    // asyncData的参数为上下文对象，我们无法在这个方法里使用this
    // 所以无法通过this.$router.params.id拿到路由参数
    // 但是可以通过context.params.id获取参数
    const {data} = axios({
      method: 'get',
      url: 'http://localhost:3000/data.json'
    })
    const id = Number.parseInt(context.params.id)
    return {
      article: data.posts.find(item => item.id === id)
    }
  }
}
</script>
