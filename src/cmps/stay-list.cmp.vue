<template>
  <div class="list-container">
    <div v-for="stay in stays" class="preview-wrapper">
      <stay-preview :stay="stay" :key="stay._id" />
    </div>
    <div v-if="stays.length === 0">No Results Had Been Found</div>
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
