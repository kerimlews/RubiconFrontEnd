export default {
  type: {
    type: String,
    required: true
  },
  item: {
    type: Object,
    required: true
  },
  showDetails: {
    type: Function,
    required: false
  },
  videos: {
    type: Array,
    required: false
  },
  isLoading: {
    type: Boolean,
    required: false
  }
}
