<template>

  <tr>
    <td>{{ new Date(hostOrder.createdAt).toLocaleString() }}</td>
    <td class="td-image">{{ hostOrder.buyer.fullname }}</td>
    <td>{{ hostOrder.stay.name }}</td>
    <td>{{ hostOrder.startDate }}</td>
    <td>{{ hostOrder.endDate }}</td>
    <td>{{ hostOrder.status }}</td>
    <td>{{ formatRevune }}</td>
    <td>{{ hostOrder.guests.total }}</td>
    <td>
      <el-button v-if="hostOrder.status === 'pending'" @click.prevent="approve" size="small" type="success">Aprrove
      </el-button>
      <el-button v-if="hostOrder.status === 'pending'" @click.prevent="decline" size="small" type="danger">Decline
      </el-button>
      <el-button v-if="hostOrder.status === 'declined'" @click.prevent="approve" size="small" type="success">Aprrove
      </el-button>
      <el-button v-if="hostOrder.status === 'approved'" @click.prevent="decline" size="small" type="danger">Decline
      </el-button>



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
    formatRevune() {
      const totalPrice = this.hostOrder.totalPrice
      return "$" + totalPrice.toLocaleString()
    }
  },
  methods: {
    approve() {
      // this.hostOrder.status = "approved";
      // this.$store.dispatch({ type: "updateStay", order })
      const order = JSON.parse(JSON.stringify(this.hostOrder));
      this.$store.dispatch({ type: "saveOrder", order, status: 'approved' });
    },
    decline() {
      // this.hostOrder.status = "declined";
      const order = JSON.parse(JSON.stringify(this.hostOrder));
      this.$store.dispatch({ type: "saveOrder", order, status: 'declined' });
    },
  }
};
</script>
