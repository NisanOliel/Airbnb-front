<template>
  <div v-if="isExpend" class="overlay"></div>

  <!-- <Transition name="bounce"> </Transition> -->
  <header class="main-header flex column" :class="{ sticky: isSticky }">
    <div class="nav-wrapper" :class="{ expend: isExpend }">
      <div :class="{ container: headerLocation, 'inner-container': !headerLocation }">
        <nav class="top-nav flex justify-space-between align-center">
          <div v-if="desktop" class="desktop-view">
            <router-link class="logo" to="/">
              <div class="main-logo flex">
                <div><img class="logo-img" src="@/assets/icons/airbnb-logo.svg" /></div>
                <h1>air2b</h1>
              </div>
            </router-link>
            <div class="explore-filter">
              <explore-filter :isExpend="isExpend" @expend-form="expendForm" />
            </div>
            <div class="last-section-nav flex align-center">
              <a class="right-header become-host" href="/#/login">Become a host</a>

              <a class="right-header" href="/#/explore"><img class="explore-btn" src="../assets/icons/en.svg" /></a>
              <div class="user-menu-btn">
                <button @click="showMenu = !showMenu" class="nav-btn expend flex">
                  <img class="menu-btn" src="@/assets/icons/menu.svg" />
                  <img class="host-image" :src="userImg" />
                </button>
              </div>
              <div class="user-nav" v-if="showMenu" v-click-away="onClickAway">
                <div class="user-nav-in">
                  <a href="#/login" @click="showMenu = !showMenu" v-if="!getLogInUser">Log in</a>
                  <a href="#/" @click="logDemo" v-if="!getLogInUser">Log Demo</a>
                  <a href="#/wishList" @click="showMenu = !showMenu" class="a1" v-if="getLogInUser">Wish List</a>
                  <a href="#/dashboard" @click="showMenu = !showMenu" v-if="getLogInUser">Dashboard</a>
                  <a @click="logout" v-if="getLogInUser">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!desktop" class="mobile-view">
            <div class="mobile-nav">
              <div class="search-icon">
                <span><img src="@/assets/icons/search-icon.svg" /></span>
              </div>
              <div class="mobile-content">
                <div class="mobile-sech-title"> Where to? </div>
                <div class="mobile-sech-list">
                  <span>Anywhere</span> • <span>Any week</span> •
                  <span>Add guests</span>
                </div>
              </div>
              <div class="adjustment-bar">
                <span @click="isShow = !isShow"><img src="@/assets/icons/adjustment-icon.svg" /></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="headerLocation" :class="{ 'hide-expend': isExpend }" class="header-labels flex justify-space-between align-center">
      <div class="container">
        <div v-if="path !== '/dashboard'" class="header-bottom flex justify-space-between">
          <explore-labels v-if="!isExplore" />
          <div></div>

          <div v-if="desktop" @click="isShow = !isShow" class="stand-alone-filter">
            <img src="/src/assets/icons/filter-icon.svg" alt="" />
            <span class="filter-btn">Filters</span>
          </div>
          <Transition duration="200" name="nested">
            <standAlone-filter @closeFilersForm="closeModal" v-if="isShow" v-click-away="onClickAway" />
          </Transition>
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
        showMenu: false,
        isExplore: false,
        desktop: window.innerWidth > 750 ? true : false,
        path: null,
      };
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    },

    destroyed() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll);
    },

    computed: {
      headerLocation() {
        let { params, path } = this.$route || {};
        console.log('params', params, 'path', path);
        this.isExplore = path !== '/';
        this.path = path;
        console.log('this.path', this.path);
        if (path === '/dashboard') console.log('path dash');
        let isEmpty = Object.keys(params).length === 0;
        return isEmpty;
      },

      userImg() {
        var user = this.$store.getters.loggedinUser;
        return user ? user.imgUrl : 'https://res.cloudinary.com/nisan/image/upload/v1658872030/air2b/unprofile_ji7zus.png';
      },
      getLogInUser() {
        var user = this.$store.getters.loggedinUser;
        return user ? true : false;
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
      logout() {
        this.$store.dispatch({ type: 'logout' });
        // this.$router.push("/")
        this.loggedinUser = null;
        this.showMenu = false;
      },
      async logDemo() {
        const demo = {
          password: 'demo',
          username: 'demo',
        };
        try {
          await this.$store.dispatch({ type: 'login', userCred: demo });
          this.$router.push('/');
          this.showMenu = false;
        } catch (err) {
          console.log(err);
          this.msg = 'Failed to login';
        }
      },
      onClickAway() {
        this.isShow = false;
        this.showMenu = false;
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
          eventBus.emit('closeModal', this.isExpend);
        }
      },

      handleResize() {
        const width = window.outerWidth;
        if (width > 750) {
          this.desktop = true;
        }
        if (width < 750) {
          this.desktop = false;
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

    components: {
      exploreFilter,
      exploreLabels,
      standAloneFilter,
      eventBus,
    },
    setup() {},
  };
</script>
