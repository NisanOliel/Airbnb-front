<template>
  <div v-if="orders">
    <div v-for="order in orders" :key="_id">
      <span>{{ order.buyer.fullname }}</span>
      <span>{{ order.totalPrice }}</span>
    </div>
    <!-- <span v-for="name in orders.stay.name">{{ orders.stay.name }}</span> -->
    <!-- <pre>{{ orders.stay.name }}</pre> -->
    <!-- <pre>{{ orders }}</pre> -->
    <!-- <pre>{{ orders.stay.name }}</pre> -->

    <img src="https://res.cloudinary.com/nisan/image/upload/v1658872030/air2b/unprofile_ji7zus.png" alt="" srcset="">
  </div>
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