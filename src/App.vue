<template>
  <section>
    <user-msg />
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
  import appHeader from './cmps/app-header.vue';
  // import userMsg from './cmps/user-msg.vue';
  import appFooter from './cmps/app-footer.vue';
  // import { userService } from './services/user.service'

  export default {
    created() {
      this.$store.dispatch({ type: 'loadStays' });
      console.log('Vue App created');
      // const user = userService.getLoggedinUser()
      // if (user) store.commit({ type: 'setLoggedinUser', user })
    },
    components: {
      appHeader,
      appFooter,
      // store,
      // userMsg,
    },
  };
</script>
