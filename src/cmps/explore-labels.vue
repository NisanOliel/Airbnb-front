<template>
  <ul>
    <li v-for="label in labels" :key="label.src" @click="filter(label.label)">
      <img :src="label.src" />
      <h2>{{ label.name }}</h2>
    </li>
  </ul>

</template>
<script>
export default {
  name: 'explore-labels',
  data() {
    return {
      labels: '',
      filterBy: {
        label: null
      },
    }
  },
  methods: {
    filter(value) {
      this.filterBy.label = value
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    }
  },

  created() {
    this.labels = this.$store.getters.getLabels

  }, computed: {
    getLabels() {
      return this.labels;
    }
  }


}
</script>
