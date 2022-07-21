<template>
  <form @submit.prevent>
    <label>Name: </label>
  </form>
</template>
<script>
  export default {
    name: 'explore-labels',
    data() {
      return {
        //     labels: '',
        //     filterBy: {
        //       label: null,
        //     },
      };
    },
    methods: {
      //   filter(value) {
      //     this.filterBy.label = value;
      //     this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      //     console.log(this.filterBy.label);
    },

    created() {
      //   this.labels = this.$store.getters.getLabels;
    },
    computed: {
      //   getLabels() {
      //     return this.labels;
      //   },
    },
  };
</script>
