<template>
  <div v-if="items.length > 0" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div v-for="(item, i) in items" :key="item.id" class="carousel-item h-100" :class="{ active: i === index }">
            <iframe
              class="d-block w-100"
              :src="getVideo(item.key)"
            />
        </div>
    </div>
    <a @click="prev" class="carousel-control-prev" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a @click="next" class="carousel-control-next" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  name: 'VideoSlider',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    getVideo (key) {
      return 'https://www.youtube.com/embed/' + key
    },
    prev () {
      if (this.index === 0) {
        this.index = this.items.length - 1
      } else {
        this.index -= 1
      }
    },
    next () {
      if (this.index === this.items.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
    }
  }
}
</script>
<style lang="scss">
    iframe {
       height: 400px;
    }
</style>
