<template>
  <ul class="flex">
    <li v-for="label in labels" :key="label.src" @click="filter(label.propertyType)" class="labels">
      <img :src="label.src" />
      <span>{{ label.propertyType }}</span>
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
          label: null,
        },
      };
    },
    methods: {
      filter(value) {
        this.filterBy.label = value;
        this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
        console.log(this.filterBy.label);
      },
    },

    created() {
      this.labels = this.$store.getters.getLabels;
    },
    computed: {
      getLabels() {
        return this.labels;
      },
    },
  };
</script>
