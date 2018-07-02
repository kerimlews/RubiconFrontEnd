import Vue from 'vue'

const ApiKey = '7e23e0e12a44a600050e085ae79cc43a'

function get (url, query, data) {
  return Vue.http.get(url, params(query), data)
}

function params (query) {
  return {
    params: {
      api_key: ApiKey,
      query
    }
  }
}

export default {
  get
}
