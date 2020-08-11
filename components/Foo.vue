<template>
  <div>
    <h1>Foo</h1>
    此处会报错，因为这是非页面组件，asyncData方法不会执行，所以foo是未定义
    <p>{{foo}}</p>
  </div>
</template>

<script>
export default {
  name: "Foo",

  async asyncData() {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style scoped>

</style>
