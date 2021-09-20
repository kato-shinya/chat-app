<template>
  <div>
    <Header />
    <div class="app-container">
      <SideMenu />
      <Main />
    </div>
  </div>
</template>

<script>
import "normalize.css";

import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    SideMenu,
    Main,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  padding-top: 60px;
}
</style>
