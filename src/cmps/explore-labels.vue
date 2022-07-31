<template>
  <span class="shadow-left"></span>
  <carousel :transition="330" :items-to-show="20" snapAlign="start">
    <slide v-for="(label, idx) in labels" ref="labels" :key="label" @click="filter(label.propertyType)">
      <div class="labels">
        <img class="property-type-img" :src="label.src" />
        <span>{{ label.propertyType }}</span>
      </div>
    </slide>

    <template #addons>
      <span class="shadow-right"></span>
      <navigation ref="el" />
    </template>
  </carousel>
  {{ getIdx }}
</template>

<script setup>
import { ref, onMounted } from 'vue';

const el = ref();

onMounted(() => {
  console.log('elvalue', el);
  const prev = document.querySelector('.carousel__prev');
  prev.style.visibility = 'hidden';
  const next = document.querySelector('.carousel__next');
  next.addEventListener('click', e => {
    console.log('is click');
    prev.style.visibility = 'visible';
  });
  console.log(prev);
  console.log(next);
});
</script>

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
      index: null,
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
    getIdx() {
      console.log(this.index);
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
