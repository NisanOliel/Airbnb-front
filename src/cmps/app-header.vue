<template>
  <header class="flex column">
    <nav class="top-nav flex justify-space-between">
      <div class="main-logo"><img src="src/assets/airbnb-logo.svg" /></div>
      <div class="explore-filter">
        <explore-filter />
      </div>
      <div class="user-nav">User</div>
    </nav>

    <div class="header-labels">
      <explore-labels />
      <standAlone-filter />
    </div>
  </header>
</template>
<script>
import exploreFilter from './explore-filter.vue'
import exploreLabels from './explore-labels.vue'
import standAloneFilter from './standalone-filter.vue'

export default {


  computed: {
    // loggedInUser() {
    //   return this.$store.getters.loggedinUser;
    // },
  },
  components: {
    exploreFilter,
    exploreLabels,
    standAloneFilter
  },
}


</script>
