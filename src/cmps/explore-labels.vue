<template>
  <span class="shadow-left"></span>
  <carousel :transition="330" :items-to-show="20" snapAlign="start">
    <slide v-for="label in labels" :key="label" @click="filter(label.propertyType)">
      <div class="labels">
        <img class="property-type-img" :src="label.src" />
        <span>{{ label.propertyType }}</span>
      </div>
    </slide>

    <template #addons>
      <span class="shadow-right"></span>
      <navigation />
    </template>
  </carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'explore-labels',
  data() {
    return {
      labels: '',
      filterBy: {
        label: null,
      },
    };
  },
  methods: {
    filter(value) {
      this.filterBy.label = value;
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      this.$store.dispatch({ type: 'setFilteredStays' });
      console.log('click', this.filterBy.label);
    },
  },

  created() {
    this.labels = this.$store.getters.getLabels;
  },
  computed: {
    getLabels() {
      return this.labels;
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
