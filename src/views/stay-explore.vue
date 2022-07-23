<template>
  <h3>exploreee page</h3>

  <pre>{{ stays[0] }}</pre>
  <pre>THIS NOT EXIST {{ stays[1] }}</pre>
</template>

<script>
  export default {
    name: 'explore-page',
    data() {
      return {
        filterBy: {
          // location: null,
        },
      };
    },
    computed: {
      stays() {
        // return this.$store.getters.getFilteredStays;
        return this.$store.getters.getFilteredStays;
      },
    },
    created() {
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
    watch: {
      $route: {
        handler() {
          const { location } = this.$route.query;
          this.filterBy.location = location;
          console.log(' this.$route.query:', this.$route.query);
        },
        immediate: true,
      },
    },
    methods: {},
    components: {},
  };
</script>
