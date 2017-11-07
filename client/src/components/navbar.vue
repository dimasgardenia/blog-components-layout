<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><span class="style-font">YNT Indonesia</span></a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link :to="{path: '/'}" append><span class="style-font">News</span></router-link></li>
        <li><router-link :to="{path: 'post'}"><span class="style-font">Post News</span></router-link></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style media="screen">
.navbar-default {
  background-color: red;
  border-color: #e7e7e7;
}
.style-font{
  color: black;
  font-weight: bold;
}
</style>
