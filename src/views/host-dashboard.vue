<template>
  <div class="dashboard-container container">
    <div class="logIn" v-if="!getLogInUser">
      <h1>log in first
        <router-link to="/login">

          <span class="under-line">click Here</span>
        </router-link>
      </h1>
    </div>



    <div v-else>





      <div class="flex column ">



        <div class="top-dashboard-label flex">

          <button @click="showOrder" class="top-btn">Orders</button>
          <button @click="showStay" class="top-btn">Stays</button>
          <button @click="showGraph" class="top-btn">Graphs</button>
        </div>




        <table v-if="showOrders" class="content-table">
          <thead>
            <tr class="border_bottom">
              <th class="title-thead">Time </th>
              <th class="title-thead ">Guest </th>
              <th class="title-thead ">Stay name </th>
              <th class="title-thead">Check In/Out </th>
              <th class="title-thead text-center">Status </th>
              <th class="title-thead text-center">Revenue </th>
              <th class="title-thead text-center">Guests </th>
              <th class="title-thead text-center">Action </th>
            </tr>
          </thead>
          <tbody>
            <orders-dashboard :hostOrder="hostOrder" v-for="hostOrder in hostOrders" :key="hostOrder._id" />
          </tbody>
        </table>



        <table v-if="showStays" class="content-table">
          <thead>
            <tr>
              <th class="title-thead"></th>
              <th class="title-thead">Stay name</th>
              <th class="title-thead">Price per night</th>
              <th class="title-thead">Address</th>
              <th class="title-thead">Actions</th>
            </tr>
          </thead>
          <tbody>
            <stays-dashboard :hostStay="hostStay" v-for="hostStay in hostStays" :key="hostStay._id" />
          </tbody>
        </table>

      </div>
      <graph-dashboard v-if="showGraphs" :hostOrders="hostOrders" />



    </div>
  </div>
</template>

<script>
// import dashboardOrder from '../cmps/dashboard-order.vue';
// import dashboardStay from '../cmps/dashboard-stay.vue';
import ordersDashboard from '../cmps/orders-dashboard.vue';
import staysDashboard from '../cmps/stays-dashboard.vue';
import graphDashboard from '../cmps/graph-dashboard.vue';
export default {

  name: 'host-dashboard',
  components: {
    // dashboardOrder,
    // dashboardStay,
    ordersDashboard,
    staysDashboard,
    graphDashboard
  },
  data() {
    return {
      orders: null,
      stays: null,
      hostOrders: null,
      hostStays: null,
      showStays: false,
      showOrders: true,
      showGraphs: false
    }
  },
  async created() {
    this.orders = this.$store.getters.getOrders
    this.stays = this.$store.getters.getStays
    // this.loggedinUser = this.$store.getters.loggedinUser;
    this.hostOrders = this.orders.filter(order => order.hostId === this.getLogInUser._id)
    this.hostStays = this.stays.filter(stays => stays.host._id === this.getLogInUser._id)

  },

  computed: {
    getLogInUser() {
      return this.$store.getters.loggedinUser
    },
    stayOrder() {
      if (!this.showStay) return 'Show my stays'
      if (this.showStay) return 'Show my orders'
    },
    totalOrders() {
      return this.hostOrders.length;
    },
    pendingOrders() {
      var ordersCount = 0;
      if (this.hostOrders.length > 0) {
        this.hostOrders.forEach((order) => {
          if (order.status === "pending") {
            ordersCount++;
          }
        });
        return ordersCount;
      }
    },
    approvedOrders() {
      var ordersCount = 0;
      if (this.hostOrders.length > 0) {
        this.hostOrders.forEach((order) => {
          if (order.status === "approved") {
            ordersCount++;
          }
        });
        return ordersCount;
      }
    },
    declinedOrders() {
      var ordersCount = 0;
      if (this.hostOrders.length > 0) {
        this.hostOrders.forEach((order) => {
          if (order.status === "declined") {
            ordersCount++;
          }
        });
        return ordersCount;
      }
    },

    totalRevenues() {
      var prices = []
      if (this.hostOrders.length > 0) {
        this.hostOrders.forEach((order) => {
          prices.push(order.totalPrice);
        });
        var sum = prices.reduce((sum, price) => +sum + +price, 0)
        return sum.toLocaleString();
      }

    },

  },
  methods: {
    showStay() {
      this.showOrders = false
      this.showGraphs = false
      this.showStays = true

    },
    showOrder() {
      this.showStays = false
      this.showGraphs = false
      this.showOrders = true
    },
    showStay() {
      this.showOrders = false
      this.showGraphs = false
      this.showStays = true

    },
    showGraph() {
      this.showStays = false
      this.showGraphs = true
      this.showOrders = false
    },

  }


}
</script>

