<template>
  <div v-if="isShow" class="overlay"></div>

  <!-- <Transition name="bounce"> </Transition> -->
  <header class="main-header flex column" :class="{ sticky: isSticky }">
    <div class="nav-wrapper" :class="{ expend: isExpend }">
      <div :class="{ container: headerLocation, 'inner-container': !headerLocation }">
        <nav class="top-nav flex justify-space-between align-center">
          <router-link to="/">
            <div class="main-logo flex">
              <div class=""><img src="@/assets/airbnb-logo.svg" /></div>
              <h1>air2b</h1>
            </div>
          </router-link>
          <div class="explore-filter">
            <explore-filter :isExpend="isExpend" @expend-form="expendForm" />
          </div>
          <div class="last-section-nav">
            <el-tooltip content="Become a host" placement="bottom" effect="light">
              <a class="right-header bold become-host" href="/#/login">Become a host</a>
            </el-tooltip>

            <el-tooltip content="Explore" placement="bottom" effect="light">
              <a class="right-header" href="/#/explore"><img class="explore-btn" src="@/assets/icons/en.svg" /></a>
            </el-tooltip>

            <button class="nav-btn expend flex">
              <img class="menu-btn" src="@/assets/icons/menu.svg" />
              <img class="host-image" src="https://randomuser.me/api/portraits/men/10.jpg" />
            </button>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="headerLocation" class="header-labels flex justify-space-between align-center">
      <div class="container">
        <div class="header-bottom flex justify-space-between">
          <explore-labels />
          <div class="stand-alone-filter">
            <a @click="isShow = !isShow">Filter</a>
            <standAlone-filter @closeFilersForm="closeModal" v-if="isShow" v-click-away="onClickAway" />
          </div>
          <!-- <Transition duration="550" name="nested">
        </Transition> -->
        </div>
      </div>
    </div>
  </header>
  <div v-if="isShow" class="overlay"></div>
</template>
<script>
  import exploreFilter from './explore-filter.vue';
  import exploreLabels from './explore-labels.vue';
  import standAloneFilter from './standAlone-filter.vue';
  import { eventBus } from '../services/event-bus.service.js';

  export default {
    data() {
      return {
        isShow: false,
        location: false,
        isSticky: false,
        isExpend: false,
      };
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },

    closeModal() {
      this.isShow = false;
    },
    computed: {
      headerLocation() {
        let params = this.$route.params;
        let isEmpty = Object.keys(params).length === 0;
        return isEmpty;
      },
    },

    methods: {
      expendForm(value) {
        console.log('value', value);
        console.log('expend clickd');
        this.isExpend = value;
      },
      closeModal() {
        this.isShow = false;
      },
      onClickAway() {
        this.isShow = false;
      },
      handleScroll(ev) {
        let pos = window.scrollY;
        if (pos === 0) {
          this.isSticky = false;
          this.isExpend = false;
        }

        if (pos > 0) {
          this.isSticky = true;
          this.isShow = false;

          eventBus.emit('overlay', this.isShow);
        }

        if (this.isExpend) {
          this.isExpend = false;
        }
      },
    },

    watch: {
      isShow: function () {
        if (this.isShow) {
          document.documentElement.style.overflow = 'hidden';
          return;
        }

        document.documentElement.style.overflow = 'auto';
      },
    },
    mounted() {
      // const observer = new IntersectionObserver(entries => {
      //   const [entry] = entries;
      //   console.log('entry', entry);
      //   if (entry.intersectionRatio > 0) {
      //     mainHeader.value = entry.target.getAttribute('header');
      //   }
      // });
    },
    components: {
      exploreFilter,
      exploreLabels,
      standAloneFilter,
      eventBus,
    },
    setup() {},
  };
</script>
