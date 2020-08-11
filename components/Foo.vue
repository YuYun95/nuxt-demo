<template>
  <div>
    <h1>FooPage</h1>
    <ul>
      <li v-for="item in posts">
        <nuxt-link :to="'/article/'+item.id">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Foo",
  props: ['posts']
}
</script>

<style scoped>

</style>
