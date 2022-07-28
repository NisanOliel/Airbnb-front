<template>
  <!-- <pre>{{ order }}</pre> -->
  <div class="order-list">
    <span>{{ hostOrder.buyer.fullname }}</span>
    <span>{{ hostOrder.stay.name }}</span>
    <span>{{ hostOrder.startDate }} - {{ hostOrder.endDate }}</span>
    <span>{{ hostOrder.status }}</span>
    <span>{{ hostOrder.totalPrice }}$</span>
    <span>{{ hostOrder.guests.total }}</span>
    <span>
      <el-button @click.prevent="approve" size="small" type="success">Aprrove</el-button>
      <el-button @click.prevent="decline" size="small" type="danger">Decline</el-button>

      <!-- <button class="decline-btn" @click="decline" v-if="this.order.status === 'pending'">Decline</button>
      <button class="approve-btn" @click="approve" v-if="this.order.status === 'declined'">Approve</button>
      <button class="decline-btn" @click="decline" v-if="this.order.status === 'approved'">Decline</button> -->
    </span>
  </div>


</template>

<script>
// import { ElMessage } from 'element-plus';

export default {
  name: ' dashboard-order',
  props: { hostOrder: { type: Object } },
  data() {
    return {

    };
  },
  created() {

  },
  computed: {

  },
  methods: {
    approve() {
      console.log("approved");
      this.hostOrder.status = "approved";
      console.log("approved2");
      const order = JSON.parse(JSON.stringify(this.hostOrder));
      console.log('hostOrder:', order)
      this.$store.dispatch({ type: "saveOrder", order });
    },
    decline() {
      console.log("declined");
      this.hostOrder.status = "declined";
      const order = JSON.parse(JSON.stringify(this.hostOrder));
      this.$store.dispatch({ type: "saveOrder", order });
    },
  }
};
</script>
