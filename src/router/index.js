import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../veiws/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/test'
    },
    {
      path: '/',
      component: Layout,
      redirect: '/trade',
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('@/components/overview/overview')
        },
        {
          path: '/orderPayment',
          name: 'orderPayment',
          component: () => import("@/components/trade/order/orderPayment"),
          children:[
            {
              path: '/orderPaymentDetail',
              name: 'orderPaymentDetail',
              component: () => import("@/components/trade/order/orderPaymentDetail"),
            }
          ]
        },{
          path: '/orderRefund',
          name: 'orderRefund',
          component: () => import("@/components/trade/order/orderRefund"),
          children:[
            {
              path: '/orderRefundDetail',
              name: 'orderRefundDetail',
              component: () => import("@/components/trade/order/orderRefundDetail"),
            }
          ]
        },{
          path: '/dfBatch',
          name: 'dfBatch',
          component: () => import("@/components/trade/dsf/dfBatch"),
          children:[
            {
              path: '/dfBatchDetail',
              name: 'dfBatchDetail',
              component: () => import("@/components/trade/dsf/dfBatchDetail"),
            }
          ]
        },{
          path: './dfSingle',
          name: 'dfSingle',
          component: () => import("@/components/trade/dsf/dfSingle"),
          children:[
            {
              path: '/dfSingleDetail',
              name: 'dfSingleDetail',
              component: () => import("@/components/trade/dsf/dfSingleDetail"),
            }
          ]
        },{
          path: './dsBatch',
          name: 'dsBatch',
          component: () => import("@/components/trade/dsf/dsBatch"),
          children:[
            {
              path: '/dsBatchDetail',
              name: 'dsBatchDetail',
              component: () => import("@/components/trade/dsf/dsBatchDetail"),
            }
          ]
        },{
          path: './dsSingle',
          name: 'dsSingle',
          component: () => import("@/components/trade/dsf/dsSingle"),
          children:[
            {
              path: '/dsSingleDetail',
              name: 'dsSingleDetail',
              component: () => import("@/components/trade/dsf/dsSingleDetail"),
            }
          ]
        },{
          path: './returnTicket',
          name: 'returnTicket',
          component: () => import("@/components/trade/dsf/returnTicket"),
          children:[
            {
              path: '/batchInfo',
              name: 'batchInfo',
              component: () => import("@/components/trade/dsf/batchInfo"),
            }
          ]
        }
      ]
    }
  ]
})
