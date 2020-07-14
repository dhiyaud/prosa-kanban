<template>
  <div id="board-card">
    <!-- Card Board -->
    <v-card
      class="mt-3 pt-6 pb-4 px-8 elevation-0 rounded-lg cursor-move"
      color="#f7f6f3"
    >
      <v-flex class="justify-space-between">
        <!-- Task title -->
        <h2>
          {{ task.title }}
        </h2>
        <v-list-item class="pa-0">
          <!-- Task avatar name initial -->
          <v-list-item-avatar
            class="ma-0 white-border"
            size="45"
            color="#def9f3"
          >
            <span class="fs-large">{{ getChar }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-flex>
              <!-- Task tags -->
              <v-chip
                class="ml-2 cursor-move"
                :color="`${getChipColor} lighten-4`"
                pill
              >
                <span
                  :class="
                    `text-uppercase font-weight-bold ${getChipColor}--text`
                  "
                  >{{ task.tags }}</span
                >
              </v-chip>
            </v-flex>
          </v-list-item-content>
          <v-list-item-action>
            <!-- Task Duration -->
            <span class="grey--text body-2 font-weight-bold fs-large"
              >{{ getDateDifference }} days</span
            >
          </v-list-item-action>
        </v-list-item>
      </v-flex>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    getChipColor() {
      const colors = {
        Research: "orange",
        Backend: "pink",
        Design: "blue",
        default: "green"
      };
      return colors[this.task.tags] || colors.default;
    },
    getDateDifference() {
      return moment(this.task.end_date).diff(
        moment(this.task.start_date),
        "days"
      );
    },
    getChar() {
      if (this.task.assignee === "") return;
      return this.task.assignee.charAt(0);
    }
  }
};
</script>

<style scoped></style>
