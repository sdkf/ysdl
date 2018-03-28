<template>
  <div>
   <template v-for="item in routes">
      <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
              <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
              <template v-for="child in item.subs">
                <leftbaritem :is-next='true' class="nextmenu" v-if="child.subs&&child.subs.length>0" :routes="[child]" :key="child.index"></leftbaritem>
                  <template v-else>
                    <el-menu-item :index="child.index">
                        <i :class="child.icon"></i>{{ child.title }}
                    </el-menu-item>
                  </template>
              </template>
              <!-- <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
              </el-menu-item> -->
          </el-submenu>
      </template>
      <template v-else>
          <el-menu-item :index="item.index" :style="{borderTop:'1px solid #f5f5f5'}">
              <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
      </template>
  </template>
  </div>
</template>

<script>
export default {
  name: "leftbaritem",
  props: {
    routes: {
      type: Array
    },
    isNext: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@mixin iconImg($bgPng) {
  display: inline-block;
  margin-bottom: 2px;
  width: 24px;
  height: 18px;
  background: no-repeat center center;
  background-image: $bgPng
}
.el-submenu {
  border-top: 1px solid #f5f5f5;
  .el-submenu{
    border-top: none;
  }
}
.el-icon-arrow-down:before{
   color: #4976e7;
}
.el-icon-2trans {
  @include iconImg(url(../../../../icons/imgs/2trans.png))
}
.el-icon-3list{
  @include iconImg(url(../../../../icons/imgs/3list.png))
}
.el-icon-4user{
  @include iconImg(url(../../../../icons/imgs/4user.png))
}
.el-icon-5good{
  @include iconImg(url(../../../../icons/imgs/5good.png))
}
.el-icon-6store{
  @include iconImg(url(../../../../icons/imgs/6store.png))
}
.el-icon-7down{
  @include iconImg(url(../../../../icons/imgs/7down.png))
}
</style>
