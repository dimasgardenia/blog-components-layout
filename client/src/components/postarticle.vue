<template lang="html">
  <form class="" method="post" v-on:submit.prevent='postdata'>
    Image: <input type="text" name="usrname" v-model='bucket.image'>
    Title: <input type="text" name="usrname" v-model='bucket.title'>
    <textarea name="name" rows="8" cols="80" v-model='bucket.content'></textarea>
    <button type="submit" name="button" >Submit</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      bucket: {
        image: '',
        content: '',
        title: ''
      }
    }
  },
  methods: {
    postdata (data) {
      // event.preventDefault()
      this.$http.post('/post', this.bucket)
      .then(({data}) => {
        console.log(data)
        this.$emit('tambahdata', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
