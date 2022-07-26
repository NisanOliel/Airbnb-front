<template>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <h4>Dashboard</h4>
  <pre>{{ orders }}</pre>
</template>

<script>

export default {
  name: 'host-dashboard',
  data() {
    return {
      orders: null
    }
  },
  async created() {
    this.orders = this.$store.getters.getOrders

  },

  computed: {

  },
}
</script>