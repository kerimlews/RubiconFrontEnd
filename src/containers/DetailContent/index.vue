<template>
  <div class="container">
    <button
      @click="goBack"
      class="btn btn-outline-secondary"
    >
      <i class="fa fa-arrow-left"/>
      Back
    </button>
    <div>
      <app-card
        :type="type"
        :item="item"
        :videos="videos"
        :isShowDetails="true"
        :isLoading="isLoadingVideos"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import appCard from '@/components/card'

export default {
  name: 'DetailContent',
  beforeMount () {
    this.fetchVideos(this.item.id)
  },
  computed: {
    ...mapGetters([
      'videos',
      'item',
      'type',
      'showDetailsMovie',
      'isLoadingVideos'
    ])
  },
  methods: {
    ...mapActions([
      'goBack',
      'fetchVideos'
    ])
  },
  components: {
    appCard
  }
}
</script>
