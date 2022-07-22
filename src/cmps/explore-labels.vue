<template>
  <carousel :transition="330" :items-to-show="3.5" :wrap-around="true" snapAlign="start">
    <slide v-for="label in labels" :key="label" @click="filter(label.propertyType)">
      <div class="labels">
        <img :src="label.src" />
        <span>{{ label.propertyType }}</span>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
  <!-- 
    <li v-for="label in labels" :key="label.src" @click="filter(label.propertyType)" class="labels">
      <img :src="label.src" />
      <span>{{ label.propertyType }}</span>
    </li> -->
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
