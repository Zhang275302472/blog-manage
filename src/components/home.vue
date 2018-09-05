<template>
  <el-row class="container">
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-log">
        <a href="/"><img src="../assets/logo.png"></a>
      </div>
      <div class="topbar-logs" v-show="!collapsed">
        <a href="/"><img src="../assets/logotxt.png"></a>
      </div>
      <div class="topbar-right">
        <div class="topbar-title">
          <span>后台管理系统</span>
        </div>
        <div class="topbar-account topbar-btn">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="">x</i>
              张皓然<i class="el-icon-arrow-down el-icon--right"></i>  
              <i class="iconfont icon-down"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
           <el-dropdown-item>修改密码</el-dropdown-item>
           <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
         </el-dropdown>
        </div>
      </div>
    </el-col>
    <el-col :span="24" class="main">
      <aside  :class="{showSidebar:!collapsed}">
        <div class="menu-toggle" @click="collapse"><!-- prevent 取消事件的默认动作 -->
          <i class="el-icon-arrow-left" v-show="!collapsed"></i>
          <i class="el-icon-arrow-right" v-show="collapsed"></i>
        </div>
        <el-menu
      default-active=""
      :collapse="collapsed">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">留言管理</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
          <el-menu-item index="3-1">文章列表</el-menu-item>
          <el-menu-item index="3-2">文章分类</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
          <span>设置</span>
         </template>
          <el-menu-item index="4-1">修改密码</el-menu-item>
          <el-menu-item index="4-2">个人信息</el-menu-item>
        </el-submenu>
    </el-menu>
      </aside>
    </el-col>
  </el-row>
</template>

<script >
  export default {
    data() {
       return {
        collapsed: false,
      }
    },
    methods: {
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },

   }
  }
</script>
<style scoped lang="scss" type="text/css" scoped="">
  .container{
    position: absolute;
    top: 0px; 
    width: 100%;
    height: 100%;

    .topbar-wrap{
      display: flex;
      height: 50px;
      line-height: 50px;
      background: #373d41;

      .topbar-log{
        display:flex;
        justify-content: center;
        align-content: center;
        min-width: 59.5px; 

      }
      .topbar-logs{
        display: flex;
        align-content: center;
        min-width: 120px;

      }
      .topbar-log img ,.topbar-logs img{
        margin-top: 5px;
        padding-left: 2px;
        height: 40px
      }
    }

    .topbar-right{
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;

      .topbar-title{
        padding: 0 0 0 2vw;
        font-size: 1.8rem;
        color: #fff;
        border-left: 1px solid #000;
      }

      .topbar-account{
        white-space: nowrap;

        .el-dropdown{
          color: #fff;
        }
      }
    }

  .main{
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      /*使得aside占全屏幕*/
      overflow: hidden;
    }


  aside{
     min-width: 50px;
     background-color: #333744;

     &::-webkit-scrollbar {
        display: none;
      }

     &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }

     .el-menu{
          width: 180px;
          height: 100%;
          height: -moz-calc(100% - 80px);
          height: -webkit-calc(100% - 80px);
          height: calc(100% - 80px);
          border-radius: 0px;
          background-color: #333744;
          border-right: 0px;
        }

     .el-submenu .el-menu-item{
          min-width: 60px;
        }

     .el-menu--collapse {
        width: 60px;
      }
     .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
     .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }
    }
  }
@media screen and (max-width:520px){
      .topbar-account{
        display: none;
      }
}
@media screen and (max-width:768px){

}
@media screen and (min-width: 768px) and (max-width: 992px) {
  
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  
}
@media screen and (min-width: 1200px) and (max-width: 1920px) {
  
}
</style>

