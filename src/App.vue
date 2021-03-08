<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <top-nav :title="title"></top-nav>
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <Menu></Menu>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer :footer="footer"></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/common/Footer.vue";
import Menu from "./components/common/Menu.vue";
import TopNav from "./components/common/TopNav.vue";
export default {
  components: { TopNav, Footer, Menu },
  name: "App",
  data() {
    return {
      title: "타이틀",
      footer: "발",
      drawer: false
    };
  }
};
</script>

<style></style>
