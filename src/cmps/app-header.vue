<template>
  <div v-if="isShow" class="overlay"></div>

  <!-- <Transition name="bounce"> </Transition> -->
  <header class="main-header flex column" :class="{ sticky: isSticky }">
    <div class="nav-wrapper" :class="{ expend: isExpend }">
      <div :class="{ container: headerLocation, 'inner-container': !headerLocation }">
        <nav class="top-nav flex justify-space-between align-center">
          <router-link to="/">
            <div class="main-logo flex">
              <div class=""><img src="src/assets/airbnb-logo.svg" /></div>
              <h1>air2b</h1>
            </div>
          </router-link>
          <div class="explore-filter">
            <explore-filter :isExpend="isExpend" @expend-form="expendForm" />
          </div>

          <div class="flex align-center">
            <el-tooltip content="Become a host" placement="bottom" effect="light">
              <a class="right-header bold become-host" href="/#/login">Become a host</a>
            </el-tooltip>

            <el-tooltip content="Explore" placement="bottom" effect="light">
              <a class="right-header" href="/#/explore"><img class="explore-btn" src="../assets/icons/en.svg" /></a>
            </el-tooltip>

            <button class="nav-btn expend flex">
              <img class="menu-btn" src="../assets/icons/menu.svg" />
              <img class="host-image" src="https://randomuser.me/api/portraits/men/10.jpg" />
            </button>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="headerLocation" class="header-labels flex justify-space-between align-center">
      <div class="container header-bottom flex">
        <explore-labels />
        <div class="stand-alone-filter">
          <button @click="isShow = !isShow" style="--filter-button_border: 1px solid var(--j-qkgmf)" type="button"
            class="v1tureqs dir dir-ltr"><span class="i3c9txn dir dir-ltr"><svg viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg" style="display: block; height: 14px; width: 14px; fill: currentColor"
                aria-hidden="true" role="presentation" focusable="false">
                <path
                  d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                </path>
              </svg><span class="t1o11edy dir dir-ltr">Filters</span></span></button>
        </div>
        <standAlone-filter @closeFilersForm="closeModal" v-if="isShow" v-click-away="onClickAway" />
        <!-- <Transition duration="550" name="nested">
        </Transition> -->
      </div>
    </div>
  </header>
</template>
<script>
import exploreFilter from './explore-filter.vue';
import exploreLabels from './explore-labels.vue';
import standAloneFilter from './standAlone-filter.vue';

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
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    headerLocation() {
      let params = this.$route.params;
      let isEmpty = Object.keys(params).length === 0;
      return isEmpty;
    },
  },

  methods: {
    expendForm() {
      console.log('expend clickd');
      // this.filterShow;
      this.isExpend = !this.isExpend;
    },
    stickHeader(entries) {
      const [entry] = entries;
      console.log('entry', entry);
    },
    closeModal() {
      this.isShow = false;
    },
    onClickAway() {
      this.isShow = false;
    },
    handleScroll($event) {
      let pos = window.scrollY;
      if (pos === 0) {
        this.isSticky = false;
        this.isExpend = false;
      }

      if (pos > 0) {
        this.isSticky = true;
      }
      // if (this.isExpend) {
      //   // let currPos = window.screenY;
      //   // console.log('currpos', currPos);
      //   // if (currPos && this.isExpend) console.log('pos', pos);
      //   // this.isExpend = false;
      //   // if (pos > currPos) {
      //   //   this.isExpend = false;
      //   // }
      // }
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
  },
  setup() { },
};
</script>
