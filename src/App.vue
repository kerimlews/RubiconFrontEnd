<template>
  <div class="container">
    <main-content v-if="showMainContent" />
    <detail-content v-if="!showMainContent"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import mainContent from '@/containers/MainContent'
import detailContent from '@/containers/DetailContent'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'showMainContent'
    ])
  },
  components: {
    mainContent,
    detailContent
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';

  .img {
    height: 25rem;
    width: 16rem;
  }
</style>
