<template lang="html">
  <div>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="footer">
        <div class="container">
                <a href='#'><i class="fa fa-twitch fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-facebook fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-twitter fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-youtube-play fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-rss fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-vine fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-flickr fa-3x fa-fw"></i></a>
                <a href='#'><i class="fa fa-linkedin fa-3x fa-fw"></i></a>
              </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.footer {
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: #eee;
  text-align: center;
}

.container{
  margin-top: 50px;
  color: black;
  width: 100%;
}

.fa-twitter {
    color: #4099FF;
}

.fa-facebook {
    color: #3B5998;
}

.fa-youtube-play {
    color: #e52d27;
}

.fa-rss {
    color: #FF6600;
}

.fa-vine {
    color: #00a478;
}

.fa-flickr {
    color: #ff0084;
}

.fa-twitch {
    color: #6441A5;
}

.fa-linkedin {
    color: #007bb6;
}

.fa {
    opacity: 0.7;
    transition: 1s;
    -webkit-transition: 1s;
}

.fa:hover{
    opacity: 1;
    transition: 1s;
    -webkit-transition: 1s;
}
</style>
