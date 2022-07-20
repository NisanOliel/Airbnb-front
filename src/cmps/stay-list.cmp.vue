<template>
  <div class="list-container">
    <div v-for="stay in stays">
      <stay-preview :stay="stay" :key="stay._id"></stay-preview>
    </div>
  </div>
</template>

<script>
import stayPreview from '../cmps/stay-preview.vue';

export default {
  name: 'stay-list',
  props: {
    stays: Array,
  },
  data() {
    return {};
  },
  components: {
    stayPreview,
  },
};
</script>
