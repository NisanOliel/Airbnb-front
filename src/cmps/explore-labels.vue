<template>
  <!-- <ul>
    <li v-for="image in images" :key="image" @click="filter(label.name)">
      <img :src="image" />
    </li>
  </ul> -->

</template>
<script>
export default {
  name: 'explore-labels',
  data() {
    return {
      labels: '',
      filterBy: {
        label: null
      },
      images: [
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
      ]
    }
  },
  methods: {
    filter(value) {
      this.filterBy.label = value
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy })
    },
  },

  created() {
    this.labels = this.$store.getters.getLabels
    console.log('tio', this.labels);
  },computed:{
    getLabels(){
      return this.labels;
    }
  }


}
</script>
