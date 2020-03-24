<template>
  <div>
    <v-tabs grow v-model="tab">
      <v-tab>{{$t('operator.attackers')}}</v-tab>
      <v-tab>{{$t('operator.defenders')}}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-row dense>
          <v-col v-for="(op, i) in attackers" :key="i" cols="3">
            <OperatorCard :operator="op"></OperatorCard>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row dense>
          <v-col v-for="(op, i) in defenders" :key="i" cols="3">
            <OperatorCard :operator="op"></OperatorCard>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import OperatorCard from './OperatorCard.vue';

import { ATTACKERS, DEFENDERS } from '@/data/operators';
/**
 * Comment helper so you can have nested comment
 * p.s. I comment out old stuff in case I forget details about past work
 */
@Component({
  components: {
    OperatorCard
  }
})
export default class OperatorList extends Vue {
  readonly attackers = ATTACKERS;
  readonly defenders = DEFENDERS;
  tab: any = 0;
}
</script>

<style lang="scss" scoped>
</style>