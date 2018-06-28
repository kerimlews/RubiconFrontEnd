<template>
    <div v-if="isLoading" class="d-flex flex-column justify-content-center align-items-center">
        <i class="fa fa-spinner fa-spin"></i>
        <span>Loading...</span>
    </div>
</template>

<script>
export default {
  props: ['isLoading'],
  name: 'spinner'
}
</script>

<style lang="scss" scoped>

</style>
