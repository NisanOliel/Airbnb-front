<template>
  <header>
    <nav>
      <header-filter />
    </nav>
  </header>
</template>
<script>
  import headerFilter from './header-filter.cmp.vue';
  export default {
    computed: {
      // loggedInUser() {
      //   return this.$store.getters.loggedinUser;
      // },
    },
    components: {
      headerFilter,
    },
  };
</script>
