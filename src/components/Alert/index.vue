<template>
    <div class="alert alert-danger" role="alert">
        {{message}}
    </div>
</template>
<script>
export default {
  props: {
    mesage: {
      type: String,
      required: true
    }
  },
  name: 'Alert'
}
</script>
