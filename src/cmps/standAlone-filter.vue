<template>
  <form @submit.prevent>
    <label for="toy-name">Name: </label>
    <input v-model="toy.name" id="toy-name" type="text" placeholder="Enter toy name..." />
    <label for="toy-price">Price: </label>
    <input v-model="toy.price" id="toy-price" type="number" placeholder="Enter toy price..." />
    <button>{{ toy._id ? 'Save' : 'Add' }}</button>
    <router-link to="/toy">Back</router-link>
  </form>
</template>
<script>
  export default {
    name: 'explore-labels',
    data() {
      return {
        //     labels: '',
        //     filterBy: {
        //       label: null,
        //     },
      };
    },
    methods: {
      //   filter(value) {
      //     this.filterBy.label = value;
      //     this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      //     console.log(this.filterBy.label);
    },

    created() {
      //   this.labels = this.$store.getters.getLabels;
    },
    computed: {
      //   getLabels() {
      //     return this.labels;
      //   },
    },
  };
</script>
