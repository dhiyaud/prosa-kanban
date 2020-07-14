<template>
  <!-- Header Bar -->
  <v-app-bar
    id="headerBar"
    class="elevation-1 px-6"
    color="white"
    height="180px"
    app
    light
  >
    <!-- Button for open sidebar -->
    <v-app-bar-nav-icon
      v-if="drawerComputed === false"
      @click.stop="drawerComputed = !drawerComputed"
    ></v-app-bar-nav-icon>
    <!-- Prosa image -->
    <div>
      <v-row class="fill-height mr-4">
        <img src="@/assets/images/prosa-logo.png" alt="Logo" width="100px" />
      </v-row>
    </div>
    <!-- Kanban Prosa title-->
    <v-toolbar-title class="mr-10">
      <h1 class="fw-900">Kanban Prosa</h1>
    </v-toolbar-title>
    <!-- Button dots -->
    <v-btn class="ml-10 elevation-0" color="grey lighten-2" fab small light>
      <v-icon large color="grey">mdi-dots-horizontal</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <!-- Highlight user with tooltip name -->
    <v-tooltip bottom v-for="(user, index) in getHighlightUser" :key="index">
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" class="mr-2" size="40">
          <img :src="user.image" :alt="user.image" />
        </v-avatar>
      </template>
      <span>{{ user.name }}</span>
    </v-tooltip>
    <!-- Button total member -->
    <div class="text-center ml-3">
      <v-btn class="elevation-0" rounded color="grey lighten-2" light>
        <p class="ma-0 text-capitalize subtitle-1 font-weight-bold">
          70 Members
        </p>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  // Component props
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Getter and Setter for drawer
    drawerComputed: {
      get: function() {
        return this.drawer;
      },
      set: function(newValue) {
        this.$emit("update:drawer", newValue);
      }
    },
    // Get highlight user with 3 data
    getHighlightUser() {
      return [
        {
          name: "Chintya",
          image: "https://randomuser.me/api/portraits/women/67.jpg"
        },
        {
          name: "Alex",
          image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          name: "Michael",
          image: "https://randomuser.me/api/portraits/men/99.jpg"
        }
      ];
    }
  }
};
</script>

<style scoped></style>

<!-- Dhiya Ulhaq Dewangga -->
