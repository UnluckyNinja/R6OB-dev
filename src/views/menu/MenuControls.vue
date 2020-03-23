<template>
  <div>
    <div
      v-for="floor in this.$store.state.map.floors.slice().reverse()"
      :key="floor.id"
      style="position: relative"
    >
      <LayerControl @solo="solo($event)" @solo-drag="soloDrag($event)" :layer="floor"></LayerControl>
      <v-overlay :value="!floor.image" absolute>
        <v-progress-circular indeterminate></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FloorLayer from '@/maps/FloorLayer';

import LayerControl from '@/components/menu/LayerControl.vue';

/**
 * Includes controls for enabling, opacity, movement, etc.
 */
@Component({
  components: {
    LayerControl
  }
})
export default class MenuControls extends Vue {
  public solo(picked: FloorLayer) {
    picked.config.enabled = true;
    picked.config.opacity = 1;
    picked.parent!.floors.forEach((layer: any) => {
      if (layer !== picked) {
        layer.config.enabled = false;
        layer.config.draggable = false;
      }
    });
  }
  public soloDrag(picked: FloorLayer) {
    if (picked.config.draggable) {
      picked.config.draggable = false;
      return;
    }
    picked.config.draggable = true;
    picked.parent!.floors.forEach((layer: any) => {
      if (layer !== picked) layer.config.draggable = false;
    });
  }
}
</script>

<style lang="scss" scoped>
</style>