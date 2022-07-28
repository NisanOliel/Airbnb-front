<template>
  <section class="container">
    <h3> Stays: {{ getStays.length }}</h3>
    <stay-list :stays="getStays"></stay-list>
  </section>
</template>

<script>
import stayList from '../cmps/stay-list.cmp.vue';

export default {
  name: 'explore-page',
  data() {
    return {
      filterBy: {},
    };
  },
  computed: {
    getStays() {
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
      },
      immediate: true,
    },
  },
  methods: {},
  components: {
    stayList,
  },
};
</script>
