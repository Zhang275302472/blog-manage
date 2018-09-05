<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,code,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}
table{border-collapse:collapse;border-spacing:0}
ol,ul{list-style:none}th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}q:after,q:before{content:""}
a{text-decoration:none;color:#fff}
input,select,textarea{font-family:inherit;font-size:inherit;font-weight:inherit;font-size:100%}
body,html{width:100%;height:100%;}
html,body{font-size:10px;font-family:Hiragino Sans GB,Microsoft Yahei,SimSun,Arial,Helvetica Neue,Helvetica;position:relative; line-height: 1.15;-webkit-text-size-adjust: 100%;}
h3{font-size:26px}
pre{font-family:Hiragino Sans GB,Microsoft Yahei,SimSun,Arial,Helvetica Neue,Helvetica;white-space:pre-wrap;word-break:break-all}
div{
  box-sizing: border-box!important;
}
.fl{float:left}
.fr{float:right}
.removefloat:after,.removefloat:before{content:"";display:table}
.removefloat:after{clear:both}
.removefloat{zoom:1}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}
.el-menu-item, .el-submenu__title {
  color: #fff; }

.el-menu .el-menu-item, .el-submenu .el-submenu__title {
  height: 46px;
  line-height: 46px; }

.el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
  background-color: #7ed2df; }

.el-submenu .el-menu-item {
  background-color: #333744; }

.el-submenu .el-menu-item:hover {
  background-color: #4A5064; }

.el-submenu .el-menu-item.is-active, .el-menu-item.is-active,
.el-submenu .el-menu-item.is-active:hover, .el-menu-item.is-active:hover {
  background-color: #00C1DE;
  color: #fff; }

.el-menu .iconfont {
  vertical-align: baseline;
  margin-right: 6px; }

.warp-breadcrum {
  margin: 5px 10px 15px 0px; }

</style>
