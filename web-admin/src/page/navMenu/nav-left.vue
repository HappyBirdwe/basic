
<template>
  <el-col class="el-left-menu" :span="3" >
    <el-menu
     background-color="#324157"
      text-color="#bfcbd9"
      :default-active="active"
      :active="active"
      class="el-menu-vertical-demo"
      router
      unique-opened
      >
       <el-menu-item
          v-for="item in routeListA"
          :key="item.id"
          :index="item.menuUrl"
        >
        <template slot="title" >
          <i v-bind:class="item.icon" style="color:#6495ED"></i>
          <span>{{item.menuName}}</span>
        </template>
      </el-menu-item>
      <el-submenu
        v-for="menuItem in routeListB"
        :key="menuItem.id"
        :index="menuItem.menuUrl"
      >
        <template slot="title">
          <i v-bind:class="menuItem.icon" style="color:#4169E1"></i>
          <span>{{menuItem.menuName}}</span>
        </template>
        <el-menu-item
          v-for="item in menuItem.childPermissions"
          :key="item.menuName"
          :index="item.menuUrl"
        >
          {{item.menuName}} 
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>


  <!-- <el-col class="el-left-menu" :span="3">
    <el-menu
     
      :default-active="active"
      :active="active"
      class="el-menu-vertical-demo"
      router
      unique-opened
    >
   
      
      <el-submenu v-for="menuItem in routeListB" :key="menuItem.id" :index="menuItem.menuUrl">
        <template slot="title" >
          
          <span>{{menuItem.menuName}}</span>
        </template>
        <el-menu-item
          v-for="item in menuItem.childPermissions"
          :key="item.menuName"
          :index="item.menuUrl"
        >{{item.menuName}}</el-menu-item>
      </el-submenu> 

      <el-submenu
        v-for="menuItem in routeListB"
        :key="menuItem.id"
        :index="menuItem.menuUrl"
      >
        <template slot="title">
          
          <span>{{menuItem.menuName}}</span>
        </template>
        <el-menu-item
          v-for="item in menuItem.childPermissions"
          :key="item.menuName"
          :index="item.menuUrl"
        >
          {{item.menuName}} 
        </el-menu-item>
      </el-submenu>
      
    </el-menu>
  </el-col> -->


<script>
const common = require("../../common.js");
const CONSTANT = require("../../constant/constant.js");

const routerList = require("./nav-list.js");
export default {
  data() {
    return {
      active: "",
      // routeList:[],
      routeList: routerList.default.routerList,
      heightLength: "",
      routeListA: "",
      routeListB: ""
    };
  },

  created() {
    this.heightLength = document.body.scrollHeight;
  },

  mounted() {
    console.log(this.routeList);
    let routeListA =[],routeListB=[]
    for(let item of this.routeList) {
      if(item.menuUrl !== '/1' && item.menuUrl !== '/2' && item.menuUrl !== '/3') {
        routeListA.push(item)
      }else {
        routeListB.push(item)
      }
    }
    this.routeListA=routeListA
    this.routeListB=routeListB
    console.log(this.routeListA, this.routeListB)
    window.addEventListener("scroll", () => {
      let scrollHeight = document.body.scrollHeight;
      this.heightLength = scrollHeight - 80;
    });
    let active = "/" + this.$router.currentRoute.path.split("/")[1];
    this.active = active;
    console.log(this.$router.currentRoute.path);
    console.log(active);
  },

  methods: {
    fresh(x) {
      if (x == 1) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        this.fresh(x - 1);
      }
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {}
  }
};
</script>

<style  lang="scss">
.el-left-menu {
  height: 90%;
  position: fixed;
  left: 0;
  width: 176px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width:5px;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
  }

  &::-webkit-scrollbar-thumb {
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-item {
  min-width: auto !important;
  overflow-y: auto;
}
.el-menu-item-group__title {
  padding-top: 0px !important;
}
.el-menu-item {
  a {
    display: block;
    color: #bfcbd9;
  }
  &.is-active {
    a {
      color: #21b5cc;
    }
  }
}
.el-submenu .el-menu-item {
  overflow-x: hidden;
  background-color: yellowgreen;;
}
</style>

