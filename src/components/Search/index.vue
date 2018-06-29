<template>
<div class="d-flex justify-content-center align-items-center">
    <div class="form-group col-8">
        <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
            :value="value"
            @input="$emit('onChange', $event.target.value)"
        >
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  name: 'Search'
}
</script>
