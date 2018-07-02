<template>
  <div
      class="d-flex flex-row flex-wrap align-items-baseline justify-content-center"
  >
    <div
      v-if="!isLoading"
      v-for="item in items"
      :key="item.id"
      class="m-2 h-25"
    >
      <app-card
        :type="type"
        :item="item"
        :showDetails="showDetails"
      />
    </div>
  </div>
</template>

<script>
import appCard from '@/components/card'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    showDetails: {
      type: Function,
      required: true
    }
  },
  name: 'List',
  components: {
    appCard
  }
}
</script>
