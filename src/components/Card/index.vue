<template>
  <div class="card" @click="details">
    <app-spinner v-if="isLoading" />
    <div v-if="!isLoading">
      <img
        v-if="!hasVideo"
        class="card-img-top img m-auto"
        :src="getImage(item.poster_path)"
        alt="Poster"
      />
      <div v-if="hasVideo">
        <app-video-slider
          :items="videos"
      />
    </div>
    </div>
    <div class="card-body">
      <p class="card-text card-title-text">
        {{item.title || item.name}}
      </p>
      <div v-if="hasVideo">
        <span>{{type}} overview:</span>
        <p>{{item.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import props from './props'

import appVideoSlider from '@/components/VideoSlider'
import appSpinner from '@/components/spinner'

export default {
  props,
  name: 'Card',
  computed: {
    hasVideo () {
      if (this.videos == null) {
        return false
      }
      return this.videos.length > 0
    }
  },
  methods: {
    details () {
      this.showDetails != null &&
        this.showDetails({
          item: this.item,
          value: this.item.title != null,
          type: this.type
        })
    },
    getImage (name) {
      return 'https://image.tmdb.org/t/p/w500/' + name
    }
  },
  components: {
    appVideoSlider,
    appSpinner
  }
}
</script>
<style lang="scss">
  .card-title-text {
    white-space: nowrap;
    overflow: hidden;
    width: 13rem;
    text-overflow: ellipsis;
  }
</style>
