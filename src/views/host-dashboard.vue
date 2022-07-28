<template>
  <div class="dashboard-container">


    <el-button @click="showStay = !showStay">{{ stayOrder }}</el-button>

    <div v-if="!loggedinUser">
      <h1>log in first</h1>
    </div>

    <div v-else v-if="orders">
      <div v-if="!showStay">

        <div class="flex">
          <img class="host-image" :src=loggedinUser.imgUrl>
          <h1>Hello, {{ loggedinUser.fullname }}</h1>
        </div>



        <h2>Your orders</h2>
        <div class="head-list">
          <span>Guest name</span>
          <span>Stay name</span>
          <span>Check in/out</span>
          <span>Status</span>
          <span>Revenue</span>
          <span>guests</span>
          <span>Action</span>
        </div>

        <dashboard-order :hostOrder="hostOrder" v-for="hostOrder in hostOrders" :key="hostOrder._id" />
      </div>
      <!-- <pre>{{ hostStays }}</pre> -->
    </div>
    <dashboard-stay v-if="showStay" :hostStay="hostStay" v-for="hostStay in hostStays" :key="hostStay._id" />


  </div>
</template>

<script>
import dashboardOrder from '../cmps/dashboard-order.vue';
import dashboardStay from '../cmps/dashboard-stay.vue';
export default {

  name: 'host-dashboard',
  components: {
    dashboardOrder,
    dashboardStay
  },
  data() {
    return {
      orders: null,
      stays: null,
      loggedinUser: null,
      hostOrders: null,
      hostStays: null,
      showStay: false
    }
  },
  async created() {
    this.orders = this.$store.getters.getOrders
    this.stays = this.$store.getters.getStays
    this.loggedinUser = this.$store.getters.loggedinUser;
    this.hostOrders = this.orders.filter(order => order.hostId === this.loggedinUser._id)
    this.hostStays = this.stays.filter(stays => stays.host._id === this.loggedinUser._id)

  },

  computed: {
    stayOrder() {
      if (!this.showStay) return 'Show stays'
      if (this.showStay) return 'Show orders'
    }
  },


}
</script>