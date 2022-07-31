<template>

  <!-- <pre>{{ hostStay }}</pre> -->
  <tr>
    <td><img class="stay-image" :src=imageUrl></td>
    <td>{{ hostStay.name }}</td>
    <td>${{ hostStay.price }}</td>
    <td>{{ hostStay.address.street }}</td>
    <td>
      <el-button><span class="material-icons-outlined">
          edit
        </span></el-button>
    </td>

  </tr>



</template>

<script>
// import { ElMessage } from 'element-plus';
import { utilService } from '../services/util.service.js';

export default {
  name: ' dashboard-stay',
  props: { hostStay: { type: Object } },
  data() {
    return {
      imageUrl:
        utilService.getImgUrl(this.hostStay.imgUrls[1]),
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
