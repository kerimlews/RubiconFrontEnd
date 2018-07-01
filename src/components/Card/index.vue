<template>
  <div class="card" @click="details">
    <span v-if="isLoading">Loading..</span>
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
      <p class="card-text">
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
import appVideoSlider from '@/components/VideoSlider'

export default {
  props: ['type', 'item', 'showDetails', 'videos', 'type', 'isLoading'],
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
    appVideoSlider
  }
}
</script>
