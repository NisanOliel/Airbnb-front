<template>
  <div class="dashboard-container">

    <div v-if="!loggedinUser">
      <h1>log in first</h1>
    </div>

    <div v-else v-if="orders">
      <div class="flex">
        <img class="host-image" :src=loggedinUser.imgUrl>
        <h1>Hello, {{ loggedinUser.fullname }}</h1>
      </div>

      <h2>Your orders</h2>





      <el-table :data="orders" height="600" style="width: 100%">

        <el-table-column :prop="order" label="Guest name" width="150" />
        <el-table-column prop="buyer.fullname" label="Guest name" width="150" />
        <el-table-column prop="stay.name" label="Stay name" width="250" />
        <el-table-column prop="startDate" label="Check in" width="180" />
        <el-table-column prop="endDate" label="Check out" width="180" />
        <el-table-column prop="status" label="Status" width="180" />
        <el-table-column prop="totalPrice" label="Revenue" width="180" />
        <el-table-column prop="guests.total" label="guests" width="180" />
        <el-table-column label="Action" width="180">
          <template #default="scope">
            <el-button size="small" @click="decline()">Edit</el-button>
            <el-button size="small" type="danger" @click="decline()">Delete</el-button>
          </template>
          <!-- <el-button size="small" type="success" @click="approve()">approve</el-button>
          <el-button size="small" type="success" @click="approve()">approve</el-button>
          <el-button size="small" type="danger" @click="decline()">decline</el-button> -->
        </el-table-column>

      </el-table>

    </div>


  </div>
</template>

<script>

export default {
  name: 'host-dashboard',
  data() {
    return {
      orders: null,
      loggedinUser: null
    }
  },
  async created() {
    this.orders = this.$store.getters.getOrders
    this.loggedinUser = this.$store.getters.loggedinUser;
    this.orders = this.orders.filter(x => x.hostId === this.loggedinUser._id)

  },

  computed: {
  },

  methode: {
    approve(order) {
      order.status = "approved";
      const order = JSON.parse(JSON.stringify(this.order));
      this.$store.dispatch({ type: "updateOrder", order });
    },
    decline(order) {
      console.log('Fa')
      // order.status = "declined";
      // const order = JSON.parse(JSON.stringify(this.order));
      // this.$store.dispatch({ type: "updateOrder", order });
    },
  }
}
</script>