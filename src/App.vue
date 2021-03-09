<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <TopNav :title="site.title"></TopNav>
      <v-spacer />
      <Sign></Sign>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <Menu :items="site.menu"></Menu>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <Footer :footer="site.footer"></Footer>
  </v-app>
</template>

<script>
import TopNav from "@/components/common/TopNav";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Sign from "./components/common/Sign.vue";

export default {
  components: { Menu, Footer, TopNav, Sign },
  name: "App",
  data() {
    return {
      drawer: false,
      site: {
        menu: [
          {
            title: "home",
            active: true,
            icon: "mdi-home",
            subItems: [
              {
                title: "Dashboard",
                to: "/"
              },
              {
                title: "About",
                to: "/about"
              }
            ]
          },
          {
            title: "about",
            icon: "mdi-account",
            subItems: [
              {
                title: "xxx",
                to: "/xxx"
              }
            ]
          }
        ],
        title: "나의 타이틀입니다",
        footer: "푸터입니다"
      }
    };
  },
  created() {
    this.subscribe();
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("site")
        .on(
          "value",
          sn => {
            const v = sn.val();
            if (!v) {
              this.$firebase
                .database()
                .ref()
                .child("site")
                .set(this.site);
              return;
            }
            this.site = v;
          },
          e => {
            console.log(e.message);
            return;
          }
        );
    },
    save() {
      console.log("save@@@");
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .child("abcd")
        .child("abcd")
        .set({
          title: "abcd",
          text: "tttttt"
        });
    },
    read() {
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on("value", sn => {
          console.log(sn);
          console.log(sn.val());
        });
    },
    async readOne() {
      const sn = await this.$firebase
        .database()
        .ref()
        .child("abcd")
        .once("value");
      console.log(sn.val());
    }
  }
};
</script>
