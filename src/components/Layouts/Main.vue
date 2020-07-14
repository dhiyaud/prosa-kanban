<template>
  <v-app id="mainBar" class="overflow-x-auto">
    <!-- Main Bar-->
    <v-navigation-drawer
      v-model="drawer"
      app
      width="360px"
      class="pa-4 overflow-x-auto"
      color="#0cac90"
    >
      <v-list dense>
        <!-- Search field -->
        <v-text-field
          solo
          class="elevation-0"
          label="Search"
          color="white"
          background-color="#0cac90"
          append-icon="mdi-magnify"
          dark
        ></v-text-field>

        <!-- Profile and Task review -->
        <v-card class="elevation-0 py-4" color="transparent">
          <v-list>
            <v-list-item>
              <!-- Profile Image -->
              <v-list-item-avatar height="65px" width="auto">
                <img
                  src="https://randomuser.me/api/portraits/women/40.jpg"
                  alt="Emilee Simchenko"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <!-- Profile Name -->
                <v-list-item-title class="pb-2 white--text">
                  <h2>Emilee Simchenko</h2>
                </v-list-item-title>
                <!-- Profile Role -->
                <v-list-item-subtitle class="">
                  <h3 class="font-weight-black">Product Owner</h3>
                </v-list-item-subtitle>
              </v-list-item-content>
              <!-- Dot button -->
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey">mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <!-- Task review -->
          <v-list-item>
            <v-row class="white--text">
              <v-col>
                <v-flex>
                  <h1>372</h1>
                  <h4>Completed Tasks</h4>
                </v-flex>
              </v-col>
              <v-col>
                <v-flex>
                  <h1>11</h1>
                  <h4>Open Tasks</h4>
                </v-flex>
              </v-col>
            </v-row>
          </v-list-item>
        </v-card>

        <!-- Menu list -->
        <v-list-item class="py-2">
          <h4>MENU</h4>
        </v-list-item>
        <v-list-item-group>
          <!-- Looping data from computed function getMenuList() -->
          <v-list-item v-for="(item, index) in getMenuList" :key="index">
            <v-list-item-content>
              <v-list-item-content class="white--text">
                <div class="d-flex align-center">
                  <span class="pr-4 font-weight-regular text-h6">{{
                    item
                  }}</span>
                  <span v-if="item === 'Notifications'">
                    <v-avatar color="white" size="25">
                      <span class="ma-0 black--text fw-900">3</span>
                    </v-avatar>
                  </span>
                </div>
              </v-list-item-content>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <!-- Teams list -->
        <v-list-item class="py-2">
          <h4>TEAMS</h4>
        </v-list-item>
        <v-list-item-group>
          <v-list-item v-for="(team, index) in getTeamList" :key="index">
            <v-list-item-content>
              <v-list-item-content class="white--text">
                <h3>{{ team.title }}</h3>
              </v-list-item-content>
            </v-list-item-content>
            <v-list-item-action
              v-for="(user, index) in team.users"
              :key="index"
              class="mx-0"
            >
              <v-avatar class="mr-2" size="25">
                <img :src="user.image" :alt="user.image" />
              </v-avatar>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-btn class="pa-0 text-capitalize" color="#9afed9" text large>
              <v-icon small>mdi-plus</v-icon>
              <p class="ma-0 text-capitalize font-weight-bold text-h6">
                Add a Team
              </p>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- HeaderBar -->
    <header-bar v-bind:drawer.sync="drawer"></header-bar>

    <!-- Main view -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "./HeaderBar";

export default {
  // Register component
  components: {
    HeaderBar
  },
  computed: {
    // Get Menu list
    getMenuList() {
      return ["Home", "My Tasks", "Notifications"];
    },
    getTeamList() {
      return [
        {
          title: "Researcher",
          users: [
            {
              name: "Tobias",
              image: "https://randomuser.me/api/portraits/women/23.jpg"
            },
            {
              name: "Lawson",
              image: "https://randomuser.me/api/portraits/men/55.jpg"
            },
            {
              name: "Franz",
              image: "https://randomuser.me/api/portraits/women/33.jpg"
            }
          ]
        },
        {
          title: "FE/BE Team",
          users: [
            {
              name: "Jack",
              image: "https://randomuser.me/api/portraits/women/61.jpg"
            },
            {
              name: "Edwards",
              image: "https://randomuser.me/api/portraits/men/34.jpg"
            }
          ]
        },
        {
          title: "PM Team",
          users: [
            {
              name: "Rachel",
              image: "https://randomuser.me/api/portraits/men/87.jpg"
            },
            {
              name: "Byron",
              image: "https://randomuser.me/api/portraits/men/69.jpg"
            },
            {
              name: "Lindsay",
              image: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            {
              name: "Ferguson",
              image: "https://randomuser.me/api/portraits/men/31.jpg"
            }
          ]
        }
      ];
    }
  },
  // Model variable
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped></style>
