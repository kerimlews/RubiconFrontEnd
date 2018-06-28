<template>
    <div class="">
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
</template>

<script>
export default {
  props: ['value'],
  name: 'Search'
}
</script>
