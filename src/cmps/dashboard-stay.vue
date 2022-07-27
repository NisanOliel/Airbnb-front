<template>

  <pre>{{ hostStay }}</pre>

</template>

<script>
// import { ElMessage } from 'element-plus';

export default {
  name: ' dashboard-stay',
  props: { hostStay: { type: Object } },
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
