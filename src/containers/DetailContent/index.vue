<template>
  <div>
    <button
      :click="goBack"
    >
      <i class="fa fa-arrow-left"/>
      Back
    </button>
    <div>
      <app-card
        :item="item"
        :video="video"
        :showDetails="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import appCard from '@/components/card'

export default {
  props: ['item'],
  name: 'DetailContent',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'item'
    ])
  },
  methods: {
    goBack () {
      console.log('go back')
    }
  },
  components: {
    appCard
  }
}
</script>
