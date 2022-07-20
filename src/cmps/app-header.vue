<template>
  <header>
    <nav>
      <header-filter />
    </nav>
    <filter-labels />
  </header>
</template>
<script>
import headerFilter from './header-filter.cmp.vue';
import FilterLabels from './filter-labels.vue';
export default {
  computed: {
    // loggedInUser() {
    //   return this.$store.getters.loggedinUser;
    // },
  },
  components: {
    headerFilter,
    FilterLabels
  },
};
</script>
