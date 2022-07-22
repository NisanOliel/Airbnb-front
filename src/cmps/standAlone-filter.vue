<template>
  <form class="form-filter" @submit.prevent>
    <div class="form-header">
      <button>x</button>
      <h2>Filters</h2>
    </div>
    <div class="form-price">
      <h2>Price range</h2>
      <p>The average nightly price is 100$</p>
      <div class="form-inputs">
        min price
        <input type="number" min="0">
        max price
        <input type="number" max="1000">
      </div>
    </div>
    <div class="form-rooms-and-beds">
      <h2>Rooms and beds</h2>
      <h3>Bedrooms</h3>
      <button class="Any">Any</button>
      <button class="rooms-and-beds-btn">1</button>
      <button class="rooms-and-beds-btn">2</button>
      <button class="rooms-and-beds-btn">3</button>
      <button class="rooms-and-beds-btn">4</button>
      <button class="rooms-and-beds-btn">5</button>
      <button class="rooms-and-beds-btn">6</button>
      <button class="rooms-and-beds-btn">7</button>
      <button class="rooms-and-beds-btn">8+</button>
      <h3>Beds</h3>
      <button class="Any">Any</button>
      <button class="rooms-and-beds-btn">1</button>
      <button class="rooms-and-beds-btn">2</button>
      <button class="rooms-and-beds-btn">3</button>
      <button class="rooms-and-beds-btn">4</button>
      <button class="rooms-and-beds-btn">5</button>
      <button class="rooms-and-beds-btn">6</button>
      <button class="rooms-and-beds-btn">7</button>
      <button class="rooms-and-beds-btn">8+</button>
    </div>
    <div class="form-property-type">
      <h2>Property type</h2>
      <div class="house">
        <button></button>
        <span>House</span>
      </div>
      <div class="apartment">
        <button></button>
        <span>Apartment</span>
      </div>
      <div class="guesthouse">
        <button></button>
        <span>Guesthouse</span>
      </div>
      <div class="hotel">
        <button></button>
        <span>Hotel</span>
      </div>
    </div>
    <div class="form-amenities">
      <div>
        <h2>Amenities</h2>
      </div>
      <div class="Essentials">
        <h3>Essentials</h3>
        <div class="wifi">
          <input name="wifi-checkbox" type="checkbox">
          <span>Wifi</span>
        </div>
        <div class="washer">
          <input name="washer-checkbox" type="checkbox">
          <span>Washer</span>
        </div>
        <div class="air-conditioning">
          <input name="air-checkbox" type="checkbox">
          <span>Air-conditioning</span>
        </div>
        <div class="kitchen">
          <input name="kitchen-checkbox" type="checkbox">
          <span>Kitchen</span>
        </div>
        <div class="dryer">
          <input name="dryer-checkbox" type="checkbox">
          <span>Dryer</span>
        </div>
      </div>
    </div>
    <div class="form-host-language">
      <div>
        <h2>Host language</h2>
      </div>
      <div class="english">
        <input name="english-checkbox" type="checkbox">
        <span>English</span>
      </div>
      <div class="german">
        <input name="english-checkbox" type="checkbox">
        <span>German</span>
      </div>
      <div class="french">
        <input name="english-checkbox" type="checkbox">
        <span>French</span>
      </div>
      <div class="japanese">
        <input name="english-checkbox" type="checkbox">
        <span>Japanese</span>
      </div>
    </div>
    <div class="form-footer">
      <button>Clear all</button>
      <a>show results</a>
    </div>
  </form>
</template>
<script>
<<<<<<< HEAD
export default {
  name: 'standalone-filter',
  data() {
    return {
      labels: '',
      filterBy: {
        label: null,
      },
    }
  },
  methods: {
    filter(value) {
      this.filterBy.label = value;
      this.$store.dispatch({ type: 'setFilterBy', filterBy: this.filterBy });
      console.log(this.filterBy.label);
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
}
=======
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
>>>>>>> db2c5f0f524ad6847b6b8e956fa9196fbf5242df
</script>

