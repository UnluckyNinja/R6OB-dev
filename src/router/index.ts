import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import MenuPanel from '@/views/menu/MenuPanel.vue';
import MenuControls from '@/views/menu/MenuControls.vue';
import MenuFreedraw from '@/views/menu/MenuFreedraw.vue';
import MenuMarks from '@/views/menu/MenuMarks.vue';

import GadgetList from '@/components/menu/stickers/GadgetList.vue';
import OperatorList from '@/components/menu/stickers/OperatorList.vue';
import StickerList from '@/components/menu/stickers/StickerList.vue';

import { HOME, MARKS } from '@/router/menus';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/:mapId',
    component: {
      render(c) {
        return c('router-view');
      },
    },
    children: [
      {
        path: '',
        component: MenuPanel,
        props: { menuList: HOME }
      },
      {
        path: 'view',
        component: MenuControls,
        meta: {
          i18n: 'ui.menu.controls'
        }
      },
      {
        path: 'draw',
        component: MenuFreedraw,
        meta: {
          i18n: 'ui.menu.freedraw'
        }
      },
      {
        path: 'mark',
        component: {
          render(c) {
            return c('router-view');
          }
        },
        meta: {
          i18n: 'ui.menu.marks'
        },
        children: [
          {
            path: '',
            component: MenuPanel,
            props: { menuList: MARKS }
          },
          {
            path: 'operator',
            component: OperatorList,
            meta: {
              i18n: 'ui.menu-marks.operators'
            },
          },
          {
            path: 'gadget',
            component: GadgetList,
            meta: {
              i18n: 'ui.menu-marks.gadgets'
            },
          },
          {
            path: 'sticker',
            component: StickerList,
            meta: {
              i18n: 'ui.menu-marks.stickers'
            },
          },
          {
            path: 'text',
            component: StickerList, // TODO
            meta: {
              i18n: 'ui.menu-marks.text'
            },
          }
        ]
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
