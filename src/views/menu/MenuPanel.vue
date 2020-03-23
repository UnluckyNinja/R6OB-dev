<template>
  <v-container fluid>
    <v-row dense>
      <v-col class="my-4" v-for="(item,i) in menuList" :key="i" cols="6">
        <v-card
          width="120px"
          height="120px"
          class="d-flex flex-column ma-auto"
          :to="$route.path+'/'+item.to"
        >
          <v-spacer></v-spacer>
          <v-icon x-large>{{item.icon}}</v-icon>
          <v-card-title class="justify-center text-no-wrap">{{$t(item.i18n)}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Comment helper so you can have nested comment
 * p.s. I comment out old stuff in case I forget details about past work
 */
@Component({})
export default class MenuPanel extends Vue {
  private publicPath = process.env.BASE_URL;
  @Prop({
    default: () => {
      return [];
    }
  })
  private readonly menuList!: any[];
}
</script>

<style lang="scss" scoped>
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>