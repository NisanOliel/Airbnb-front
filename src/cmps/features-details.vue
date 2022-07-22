<template>
  <div class="gray-box features-details flex column gap-column">
    <section class="flex align-items gap-row feature">
      <div>
        <img src="../assets/icons/check-in.svg" />
      </div>
      <div>
        <h3>Self check-in</h3>
        <span>Check yourself in with the lockbox.</span>
      </div>
    </section>

    <section class="flex gap-row feature">
      <div>
        <img src="../assets/icons/location.svg" />
      </div>
      <div>
        <h3>Great location</h3>
        <span>100% of recent guests gave the location a 5-star rating.</span>
      </div>
    </section>

    <section class="flex gap-row feature">
      <div>
        <img src="../assets/icons/cancellation.svg" />
      </div>
      <div>
        <h3>Free cancellation for 48 hours.</h3>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'features-details',
  };
</script>

<style></style>
