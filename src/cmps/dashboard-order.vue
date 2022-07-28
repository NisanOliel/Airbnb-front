<template>

  <tr>
    <td class="td-image">{{ hostOrder.buyer.fullname }}</td>
    <td>{{ hostOrder.stay.name }}</td>
    <td>{{ hostOrder.startDate }}</td>
    <td>{{ hostOrder.endDate }}</td>
    <td>{{ hostOrder.status }}</td>
    <td>{{ hostOrder.totalPrice }}$</td>
    <td>{{ hostOrder.guests.total }}</td>
    <td>{{ new Date(hostOrder.createdAt).toLocaleString() }}</td>
    <td>
      <el-button @click.prevent="approve" size="small" type="success">Aprrove</el-button>
      <el-button @click.prevent="decline" size="small" type="danger">Decline</el-button>
    </td>
  </tr>

</template>

<script>

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
