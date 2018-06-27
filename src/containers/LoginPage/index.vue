<template>
<div class="d-flex justify-content-center align-items-center">
<div class="form-group">
        <label
            for="exampleInputkey1"
        >
            Enter api key
        </label>
        <input
            type="key"
            class="form-control"
            v-bind:class="{ 'errorInput': loginData.error != null }"
            id="exampleInputkey1"
            aria-describedby="keyHelp"
            v-model="key"
        />
        <small
            class="form-text text-muted"
        >
            <span class="text-danger">{{loginData.error}}</span>
        </small>
        <button
            class="btn btn-primary"
            v-on:click="checkToken(key)"
            :disabled="loginData.isLoading"
        >
            Submit
        </button>
        {{key.isLoading}}
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  methods: {
    ...mapActions([
      'checkToken'
    ])
  },
  computed: {
    ...mapGetters([
      'loginData'
    ])
  }
}
</script>

<style scopedSlots>
    .errorInput {
        border: 1px solid red;
    }
</style>
