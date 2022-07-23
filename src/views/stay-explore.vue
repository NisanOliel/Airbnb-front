<template>
  <section class="container">
    <stay-list :stays="stays"></stay-list>
  </section>
  <!-- <pre>{{ stays }}</pre> -->
</template>

<script>
import stayList from '../cmps/stay-list.cmp.vue';

export default {
  name: 'explore-page',
  data() {
    return {
      stays: null,
      filterBy: {
      },
    };
  },
  computed: {
    // getStays() {
    //   this.stays = this.$store.getters.getFilteredStays;
    // },
  },
  created() {
    this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    this.stays = this.$store.getters.getFilteredStays;
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
  components: {
    stayList
  },
};
</script>
