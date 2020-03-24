<template>
  <v-card color="primary" :width="width">
    <v-img
      class="align-center"
      width="100%"
      aspect-ratio="1"
      position="top"
      :src="getFile(operator.avatar_img)"
    ></v-img>
    <div class="d-flex">
      <v-img width="50%" aspect-ratio="1" :src="getFile(operator.badge_img)"></v-img>
      <v-img width="50%" aspect-ratio="1" :src="getFile(operator.skill_img)"></v-img>
    </div>
    <div class="d-flex accent pa-1">
      <v-img
        width="50%"
        aspect-ratio="1"
        contain
        :src="getFile(`./assets/gadgets/${operator.gadgets[0]}.png`)"
      ></v-img>

      <v-img
        width="50%"
        aspect-ratio="1"
        contain
        :src="getFile(`./assets/gadgets/${operator.gadgets[1]}.png`)"
      ></v-img>
    </div>
    <v-card-title class="accent pa-1 justify-center text-no-wrap">
      <div class="d-flex flex-column align-center">
        <span :style="{'font-size': nameSize}">{{operator.name}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Operator } from '@/data/operators';

/**
 *
 */
@Component({})
export default class OperatorCard extends Vue {
  @Prop()
  readonly operator!: Operator;

  @Prop({
    default: () => {
      return '100px';
    }
  })
  readonly width!: string;
  readonly context = require.context('@', true);
  getFile(path: string) {
    let r = this.context(path);
    return r;
  }

  get nameSize() {
    let length = this.operator.name.length;
    if (length > 9) {
      return '55%';
    } else if (length > 8) {
      return '65%';
    } else if (length > 7) {
      return '75%';
    } else if (length > 6) {
      return '85%';
    } else if (length > 5) {
      return '90%';
    }
    return '100%';
  }
}
</script>

<style lang="scss" scoped>
.name {
  background-color: rgba(white, 0.8);
}
</style>