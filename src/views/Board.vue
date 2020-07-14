<template>
  <div id="board">
    <v-container class="fill-height pa-8" fluid>
      <v-flex class="py-2 fill-height">
        <!-- Kanban column by category -->
        <v-row class="justify-center">
          <v-col
            cols="4"
            v-for="task in taskList"
            :key="task.title"
            class="px-4"
          >
            <v-card class="pa-8 elevation-4 rounded-lg">
              <!-- Title and Add Button -->
              <v-list-item class="pa-0">
                <!-- Title -->
                <v-list-item-content>
                  <v-list-item-title>
                    <h1>{{ task.title }}</h1>
                  </v-list-item-title>
                </v-list-item-content>

                <!-- Button add new task -->
                <add-task-dialog :tasks="task">
                  <template v-slot:activator="{ attrs, on }">
                    <v-list-item-action class="ma-0">
                      <v-btn
                        class="elevation-0"
                        color="#76cbb7"
                        x-large
                        rounded
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon small>mdi-plus</v-icon>
                        <p
                          class="ma-0 text-capitalize font-weight-bold subtitle-1"
                        >
                          Add Task
                        </p>
                      </v-btn>
                    </v-list-item-action>
                  </template>
                </add-task-dialog>
              </v-list-item>

              <!-- Kanban Board section -->
              <draggable :list="task.tasks" group="tasks" :animation="200">
                <board-card
                  v-for="task in task.tasks"
                  :key="task.id"
                  :task="task"
                ></board-card>
              </draggable>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BoardCard from "../components/BoardCard.vue";
import AddTaskDialog from "../components/AddTaskDialog.vue";

export default {
  name: "Board",
  components: {
    draggable,
    BoardCard,
    AddTaskDialog
  },
  data() {
    return {
      taskList: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      return this.$store
        .dispatch("boardTask/getAll")
        .then(data => {
          this.taskList = data;
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped></style>
