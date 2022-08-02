<template>
  <section if="getStays" class="container">
    <stay-list :stays="getStays"></stay-list>
  </section>
</template>

<script>
import stayList from '../cmps/stay-list.cmp.vue';
import { eventBus } from '../services/event-bus.service.js';
export default {
  name: 'explore-page',
  data() {
    return {
      filterBy: {},
    };
  },
  computed: {
    getStays() {
      eventBus.emit('staysLength', this.$store.getters.getStays.length);
      return this.$store.getters.getStays
    },
  },
  created() {
    this.renderStay();
  },

  watch: {
    $route: {
      handler() {
        const { location } = this.$route.query;
        this.filterBy.location = location;
        this.renderStay();
      },
      // deep: true,
      immediate: true,
    },
  },
  methods: {
    renderStay() {
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
    },
  },
  components: {
    stayList,
    eventBus,
  },
};
</script>
