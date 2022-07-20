<template>
  <section class="container home text-center">
    <section>
      <stay-list :stays="stays"></stay-list>
    </section>
  </section>
</template>

<script>
  import stayList from '../cmps/stay-list.cmp.vue';

  export default {
    name: 'home',
    data() {
      return {};
    },
    computed: {
      stays() {
        console.log('from app', this.$store.getters.getStays);
        return this.$store.getters.getStays;
      },
    },
    created() {
      this.$store.dispatch({ type: 'loadStays' });
    },
    methods: {},
    components: {
      stayList,
    },
  };
</script>
