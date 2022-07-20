<template>
  <ul class="flex">
    <li v-for="image in images" :key="image">
      <img :src="image" />
    </li>
  </ul>
</template>
<script>
export default {
  name: 'explore-labels',
  data() {
    return {
      images: [
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
        `src/assets/app-filter-img/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg`,
      ]
    }
  }
}
</script>
