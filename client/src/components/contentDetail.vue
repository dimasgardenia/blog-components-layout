<template lang="html">
  <div class="">
    <div class="row">
      <img :src="content.image" alt=""><br><br>
        <p class="react-native">{{ content.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      content: '',
      image: ''
    }
  },
  methods: {
    getAllArticleById () {
      this.$http(`/${this.id}`)
      .then(({data}) => {
        this.content = data
      })
    }
  },
  mounted () {
    this.getAllArticleById()
  },
  watch: {
    id () {
      this.getAllArticleById()
    }
  }
}
</script>

<style lang="css">
.react-native{
  text-align: justify;
  text-justify: inter-word;
  width: 563px;
}
</style>
