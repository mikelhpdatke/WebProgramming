// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        targets: {
          ie: 11,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: {
    ie: 11,
  },

  /**
   * 路由相关配置
   */
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [{ path: '/user', component: './Welcome' }],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        // new  page
        {
          path: '/chuong1',
          name: 'Chương 1: Quy định chung',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong1/1',
              name: 'Điều 1',
              component: './Chuong1/1',
            },
            {
              path: '/chuong1/2',
              name: 'Điều 2',
              component: './Chuong1/2',
            },
            {
              path: '/chuong1/3',
              name: 'Điều 3',
              component: './Chuong1/3',
            },
            {
              path: '/chuong1/4',
              name: 'Điều 4',
              component: './Chuong1/4',
            },
            {
              path: '/chuong1/5',
              name: 'Điều 5',
              component: './Chuong1/5',
            },
            {
              path: '/chuong1/6',
              name: 'Điều 6',
              component: './Chuong1/6',
            },
            {
              path: '/chuong1/7',
              name: 'Điều 7',
              component: './Chuong1/7',
            },
            {
              path: '/chuong1/8',
              name: 'Điều 8',
              component: './Chuong1/8',
            },
            {
              path: '/chuong1/9',
              name: 'Điều 9',
              component: './Chuong1/9',
            },
            {
              path: '/chuong1/10',
              name: 'Điều 10',
              component: './Chuong1/10',
            },
            {
              path: '/chuong1/11',
              name: 'Điều 11',
              component: './Chuong1/11',
            },
            {
              path: '/chuong1/12',
              name: 'Điều 12',
              component: './Chuong1/12',
            },
            {
              path: '/chuong1/13',
              name: 'Điều 13',
              component: './Chuong1/13',
            },
            {
              path: '/chuong1/14',
              name: 'Điều 14',
              component: './Chuong1/14',
            },
          ]
        },
        { path: '/', redirect: '/welcome' },
        // dashboard
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
          name: 'more-blocks',
          icon: 'block',
        },
      ],
    },
  ],
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};
