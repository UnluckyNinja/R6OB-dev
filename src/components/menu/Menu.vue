<template>
  <div class="menu-root d-flex flex-column">
    <Breadcrumbs v-if="$store.state.map.id">
      <div class="title">
        <h3>{{$t(`map.${$store.state.map.id}.name`)}}</h3>
      </div>
    </Breadcrumbs>
    <!-- body options -->
    <div class="menu-body d-flex flex-column overflow-hidden" v-if="this.$store.state.map.floors">
      <router-view class="flex-grow-1 overflow-x-hidden overflow-y-auto"></router-view>
      <!-- <MenuControls class="flex-grow-1 overflow-x-hidden overflow-y-auto">
      </MenuControls>-->
    </div>
    <div v-else class="menu-body map-tip pa-4">
      <p>{{$t("tip.nomap")}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { R6Map } from '@/maps';
import FloorLayer from '@/maps/FloorLayer';

import LayerControl from './LayerControl.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import MenuControls from '@/views/menu/MenuControls.vue';

@Component({
  components: {
    LayerControl,
    MenuControls,
    Breadcrumbs
  }
})
export default class Menu extends Vue {
  // public updateLayerKey(layer: any, key: string, value: any) {
  //   this.$store.commit('changeLayerKey', {
  //     layer,
  //     key,
  //     value
  //   });
  //   if (key === 'draggable') {
  //     if (value === true) {
  //       this.$store.commit('changeDraggable', false);
  //     }
  //     if (value === false) {
  //       let allFalse = this.$store.state.layers.every((one: any) => {
  //         return one.draggable === false;
  //       });
  //       if (allFalse) {
  //         this.$store.commit('changeDraggable', true);
  //       }
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.menu-root {
  height: 100%;
  .menu-body {
    height: 100%;
  }
}

@media screen and (min-width: 800px) {
  .menu-root {
    width: 360px;
  }
}
</style>