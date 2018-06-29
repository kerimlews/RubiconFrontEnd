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
        :item="item"
        :showDetails="showDetails"
      />
    </div>
  </div>
</template>

<script>
import appCard from '@/components/card'

export default {
  props: ['isLoading', 'items', 'showDetails'],
  name: 'List',
  components: {
    appCard
  }
}
</script>
