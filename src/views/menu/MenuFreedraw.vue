<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-btn-toggle color="info" v-model="currentTool">
          <v-btn>
            <v-icon>mdi-gesture</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-eraser</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-square-edit-outline</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-circle-edit-outline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="d-flex">
        <ColorButton v-model="color" icon="mdi-palette"></ColorButton>
        <ColorButton v-model="strokeColor" icon="mdi-palette-outline"></ColorButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-btn icon>
          <v-icon class="ma-auto">mdi-format-line-weight</v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <v-slider class="mr-2" hide-details></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ColorButton from '@/components/control/ColorButton.vue';

/**
 * Include tools for free draw
 */
@Component({
  components: {
    ColorButton
  }
})
export default class MenuFreedraw extends Vue {
  private currentTool: any = '';
  private color = '#F53737FF';
  private strokeColor = '#F55511FF';
}
</script>

<style lang="scss" scoped>
</style>