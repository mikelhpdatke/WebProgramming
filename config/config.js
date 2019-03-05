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
          default: 'en-US', // default zh-CN
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
      path: '/home',
      component: './Home',
    },
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
          path: '/welcome',
          name: 'Trang chủ',
          icon: 'smile',
          component: './Welcome',
        },
        {
          path: '/chuong1',
          name: 'Chương 1',
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
        {
          path: '/chuong2',
          name: 'Chương 2',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong2/15',
              name: 'Điều 15',
              component: './Chuong2/15',
            },
            {
              path: '/chuong2/16',
              name: 'Điều 16',
              component: './Chuong2/16',
            },
          ]
        },
        {
          path: '/chuong3',
          name: 'Chương 3',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong3/17',
              name: 'Điều 17',
              component: './Chuong3/17',
            },
            {
              path: '/chuong3/18',
              name: 'Điều 18',
              component: './Chuong3/18',
            },
            {
              path: '/chuong3/19',
              name: 'Điều 19',
              component: './Chuong3/19',
            },
          ]
        },
        {
          path: '/chuong4',
          name: 'Chương 4',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong4/20',
              name: 'Điều 20',
              component: './Chuong4/20',
            },
            {
              path: '/chuong4/21',
              name: 'Điều 21',
              component: './Chuong4/21',
            },
            {
              path: '/chuong4/22',
              name: 'Điều 22',
              component: './Chuong4/22',
            },
            {
              path: '/chuong4/23',
              name: 'Điều 23',
              component: './Chuong4/23',
            },
            {
              path: '/chuong4/24',
              name: 'Điều 24',
              component: './Chuong4/24',
            },
            {
              path: '/chuong4/25',
              name: 'Điều 25',
              component: './Chuong4/25',
            },
            {
              path: '/chuong4/26',
              name: 'Điều 26',
              component: './Chuong4/26',
            },
            {
              path: '/chuong4/27',
              name: 'Điều 27',
              component: './Chuong4/27',
            },
          ]
        },
        {
          path: '/chuong5',
          name: 'Chương 5',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong5/33',
              name: 'Điều 33',
              component: './Chuong5/33',
            },
          ]
        },
        {
          path: '/chuong6',
          name: 'Chương 6',
          icon: 'plus-square',
          routes: [
            {
              path: '/chuong6/43',
              name: 'Điều 43',
              component: './Chuong6/43',
            },
          ]
        },
        { path: '/', redirect: '/home' },
        // dashboard
        // {
        //   path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
        //   name: 'more-blocks',
        //   icon: 'block',
        // },
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
