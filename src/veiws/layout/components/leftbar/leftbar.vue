/* eslint-disable */
<template>
  <div class="left">
			<div class="left-title">
		    	<div class="title" style="">总览<i class=""></i></div>
		    </div>
			<div class="left-menu">
        <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <leftbaritem :routes='items'></leftbaritem>
        </el-menu>
		  </div>
		</div>
</template>

<script>
import leftbaritem from './leftbaritem'
export default {
  name: 'leftbar',
  data() {
    return {
      items: [
          {
              icon: 'el-icon-2trans',
              index: '1',
              title: '交易管理',
              subs: [
                {
                  index: '2',
                  icon: '',
                  title: '订单交易',
                  subs: [
                    {
                      icon: '',
                      index: 'orderPayment',
                      title: '订单支付查询'
                    },
                    {
                      icon: '',
                      index: 'orderRefund',
                      title: '订单退款查询'
                    }
                  ]
                },
                {
                  index: '4',
                   icon: '',
                  title: '代收付交易',
                   subs: [
                    {
                      icon: '',
                      index: 'dsSingle',
                      title: '代收交易查询'
                    },
                    {
                      icon: '',
                      index: 'dfSingle',
                      title: '代付交易查询'
                    },
                    {
                      icon: '',
                      index: 'returnTicket',
                      title: '退票查询'
                    },
                  ]
                }
              ]
          },
          {
              icon: 'el-icon-3list',
              index: 'login',
              title: '资金管理',
              subs: [
                  {
                      index: 'trade',
                      title: '账户余额查询'
                  },
                  {
                      index: 'overview',
                      title: '充值'
                  }
              ]
          },
          {
              icon: 'el-icon-4user',
              index: '8',
              title: '账户管理',
              subs: [
                  {
                      index: 'baseform',
                      title: '注册资料'
                  },
                  {
                      index: 'vueeditor',
                      title: '员工管理'
                  },
                  {
                      index: 'markdown',
                      title: '账户专用'
                  }
              ]
          },
          {
              icon: 'el-icon-5good',
              index: 'basecharts',
              title: '服务管理',
              subs: [
                  {
                      index: 'baseform',
                      title: '安全管理'
                  }
              ]
          },
          {
              icon: 'el-icon-6store',
              index: 'drag',
              title: '下属商户管理'
          },
          {
              icon: 'el-icon-7down',
              index: '9',
              title: '下载中心'
          }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      console.log(key,keyPath);
    }
  },
  computed:{
      onRoutes(){
          return this.$route.path.replace('/','');
      }
  },
  components: {
      leftbaritem
  }
};
</script>

<style lang="scss" type="text/css" scoped>
  .left-menu{
    .el-menu{
      margin-right: 14px;
    }
  }
</style>
