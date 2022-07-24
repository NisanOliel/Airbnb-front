<template>
  <div v-if="isShow" class="overlay"></div>
  <header class="flex column">
    <div :class="{ container: headerLocation, 'inner-container': !headerLocation }">
      <nav class="top-nav flex justify-space-between align-center">
        <router-link to="/">
          <div class="main-logo flex">


            <div class=""><img src="src/assets/airbnb-logo.svg" /></div>
            <h1>air2b</h1>
          </div>
        </router-link>
        <div class="explore-filter">
          <explore-filter />
        </div>

        <div class="flex align-center">
          <el-tooltip content="Become a host" placement="bottom" effect="light">
            <a class="right-header bold become-host" href="/#/login">Become a host</a>
          </el-tooltip>

          <el-tooltip content="Explore" placement="bottom" effect="light">
            <a class="right-header " href="/#/explore"><img class="explore-btn" src="../assets/icons/en.svg" /></a>
          </el-tooltip>

          <button class="nav-btn expend flex">
            <img class="menu-btn" src="../assets/icons/menu.svg" />
            <img class="host-image" src="https://randomuser.me/api/portraits/men/10.jpg" />
          </button>
        </div>
      </nav>

      <div v-if="headerLocation" class="header-labels flex justify-space-between align-center">
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
        <Transition duration="550" name="nested">
          <standAlone-filter @closeFilersForm="closeModal" v-if="isShow" v-click-away="onClickAway" />
        </Transition>
      </div>
    </div>
  </header>
</template>
<script>
// import { getImageUrl } from '../services/util.service';
import exploreFilter from './explore-filter.vue';
import exploreLabels from './explore-labels.vue';
import standAloneFilter from './standAlone-filter.vue';


export default {
  data() {
    return {
      isShow: false,
      location: false,
    };
  },
  created() {
    // const headerLoc = this.$route.path;
    // const params = this.$route.params;
    // const isEmpty = Object.keys(params).length === 0;
    // console.log('heder loc', isEmpty);
    // this.location = isEmpty;
  },
  computed: {
    // loggedInUser() {
    //   return this.$store.getters.loggedinUser;
    // },
    headerLocation() {
      let params = this.$route.params;
      let isEmpty = Object.keys(params).length === 0;
      return isEmpty;
    },
  },
  methods: {
    closeModal() {
      this.isShow = false;
    },
    onClickAway() {
      this.isShow = false;
    },

  },

  components: {
    exploreFilter,
    exploreLabels,
    standAloneFilter,
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
};
</script>
