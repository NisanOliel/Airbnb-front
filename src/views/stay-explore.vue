<template>
  <h3>exploreee page</h3>
</template>

<script>

export default {
  name: 'explore-page',
  data() {
    return {
      filterBy: null
    };
  },
  computed: {
    stays() {
      // return this.$store.getters.getFilteredStays;
    },
  },
  created() {
    // this.$store.dispatch({ type: 'loadStays' });
  },
  watch: {
    $route: {
      handler() {
        const { where, text } = this.$route.query;
        console.log(' this.$route.query:', this.$route.query)
        console.log('where:', where)
        console.log('text:', text)
        // this.filterBy.destination = where;
        // this.filterBy.name = text;
        // console.log('this.filterBy:', this.filterBy)
      },
      immediate: true,
    },
  },
  methods: {},
  components: {
  },
};
</script>
