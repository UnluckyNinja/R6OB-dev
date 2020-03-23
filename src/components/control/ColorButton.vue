<template>
  <div
    :style="`width: ${width.match(/[a-zA-Z]$/)? width: width+'px'}; height: ${height.match(/[a-zA-Z]$/)? height: height+'px'}`"
  >
    <v-sheet
      class="d-flex pointer"
      :color="color"
      @click="dialog = true"
      width="100%"
      height="100%"
    >
      <div
        class="flex-grow-1 d-flex palette-wrapper"
        :style="`border-color: ${highContrastColor(color)}`"
      >
        <slot>
          <v-icon class="ma-auto" :color="highContrastColor(color)">{{icon}}</v-icon>
        </slot>
      </div>
    </v-sheet>
    <v-dialog v-model="dialog" max-width="300">
      <v-color-picker @input="colorChange"></v-color-picker>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, PropSync } from 'vue-property-decorator';

/**
 *
 */
@Component({})
export default class ColorButton extends Vue {
  @Model('input', {
    type: String,
    default: () => {
      return '#FFFFFFFF';
    }
  })
  private color!: string;
  private dialog = false;

  @Prop({
    default: () => {
      return 'mdi-palette';
    }
  })
  readonly icon!: string;

  @Prop({
    default: () => {
      return '48';
    }
  })
  readonly width!: string;
  @Prop({
    default: () => {
      return '48';
    }
  })
  readonly height!: string;

  colorChange(event: any) {
    this.$emit('input', event.hexa);
  }

  highContrastColor(hex: string) {
    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);
    let a = parseInt(hex.substr(7, 2), 16);

    if (a < 128) {
      return 'black';
    }
    if (Math.min(r, g, b) > 128) {
      return 'black';
    }
    return 'white';
  }
}
</script>

<style lang="scss" scoped>
.pointer:hover {
  cursor: pointer;
}
.palette-wrapper {
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
}
</style>