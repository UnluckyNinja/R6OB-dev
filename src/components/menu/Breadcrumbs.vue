<template>
  <v-breadcrumbs>
    <v-breadcrumbs-item :to="`/${$store.state.map.id}`" exact>
      <slot>
        <v-icon>mdi-home</v-icon>
      </slot>
    </v-breadcrumbs-item>
    <template v-for="(item, i) in pathItems" style="height: 100%">
      <v-icon :key="i*2">mdi-chevron-right</v-icon>
      <v-breadcrumbs-item
        :key="i*2+1"
        class="align-center body-1"
        :to="item.to"
        exact
      >{{$t(item.text)}}</v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * nav
 */
@Component({})
export default class Breadcrumbs extends Vue {
  get pathItems() {
    let pathArray = this.$route.path.split('/');
    pathArray.shift();
    let items = pathArray.reduce((itemArray, path, idx) => {
      let matched = this.$route.matched;
      let target = {
        path: path,
        to: itemArray[idx - 1]
          ? itemArray[idx - 1].to + '/' + path
          : '/' + path,
        text: null
      };
      if (matched && matched[idx] && matched[idx].meta) {
        target.text = this.$route.matched[idx].meta.i18n;
      }
      itemArray.push(target);
      return itemArray;
    }, [] as any[]);
    return items.filter(item => item.text);
  }
}
</script>

<style lang="scss" scoped>
</style>