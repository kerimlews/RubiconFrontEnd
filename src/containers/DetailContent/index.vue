<template>
  <div class="container">
    <div class="form-group mt-4">
      <button
        @click="goBack"
        class="btn btn-outline-secondary"
      >
        <i class="fa fa-arrow-left"/>
        Back
      </button>
    </div>
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
      'goBack'
    ])
  },
  components: {
    appCard
  }
}
</script>
