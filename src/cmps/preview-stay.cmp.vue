<template>
  <div class="preview">
    <!-- <pre>
  {{ stay }}
  </pre
    > -->
    <div>{{ stay.propertyType }} in {{ stay.address.city }}, {{ stay.address.country }}</div>
    <!-- <div>{{ stay.price }}</div> -->

    <!-- <router-link :to="'/toy/details/' + toy._id">Details</router-link>
    <router-link :to="'/toy/edit/' + toy._id">Edit</router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'stay-preview',
    props: {
      stay: Object,
    },
  };
</script>
