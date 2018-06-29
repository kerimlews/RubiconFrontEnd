<template>
  <div class="card" @click="details">
    <img
      class="card-img-top img"
      :src="baseImgPath + item.poster_path"
      alt="Poster"
    />
    <div class="card-body">
      <p class="card-text">
        {{item.title || item.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'showDetails', 'video'],
  name: 'Card',
  data () {
    return {
      baseImgPath: 'https://image.tmdb.org/t/p/w500/'
    }
  },
  methods: {
    details () {
      this.showDetails != null && this.showDetails(this.item)
    }
  }
}
</script>
