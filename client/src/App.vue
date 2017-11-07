<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="col-md-4">
        <sidebar :articles='articles'></sidebar>
      </div>
      <div class="col-md-6">
        <router-view  @tambahdata='postdata'/>
      </div>
    </div>
    <penutup></penutup>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import sidebar from '@/components/sidebar'
import penutup from '@/components/penutup'

export default {
  name: 'app',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getAllArticle: function () {
      this.$http.get('/')
      .then(({data}) => {
        // console.log(articles)
        this.articles = data
      })
    },
    postdata (data) {
      this.articles.push(data)
    }
  },
  mounted () {
    this.getAllArticle()
  },
  components: {
    navbar,
    sidebar,
    penutup
  }
}
</script>

<style>
</style>
