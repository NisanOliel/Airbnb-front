<template>
  <form>
    <button>filter</button>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        // labels: '',
        // filterBy: {
        //     label: null
        // },
      };
    },
    methods: {
      // filter(value) {
      //     this.filterBy.label = value
      //     this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
      //     console.log(this.filterBy.label);
      // }
    },

    created() {
      // this.labels = this.$store.getters.getLabels
    },
    computed: {
      // getLabels() {
      //     return this.labels;
      // }
    },
  };
</script>
