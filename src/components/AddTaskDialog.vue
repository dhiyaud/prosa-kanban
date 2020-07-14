<template>
  <div id="task-dialog">
    <!-- Dialog Add New Task -->
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.mobile"
      max-width="450"
      @click:outside="resetForm"
    >
      <template v-slot:activator="{ on, attrs }">
        <slot name="activator" v-bind="{ on, attrs }" />
      </template>

      <v-card class="py-6 px-10 rounded-lg" ref="form">
        <!-- Dialog Header -->
        <v-list-item class="pa-0">
          <!-- Dialog Title -->
          <v-list-item-content>
            <v-list-item-title>
              <h1>New Task</h1>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Form with required validation -->
        <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
          <form ref="formTask" @submit.prevent="handleSubmit(onsubmit)">
            <v-card-text class="pa-0 pt-6">
              <!-- Title Field -->
              <v-flex>
                <!-- Label -->
                <h2 class="black--text mb-2">Title</h2>
                <!-- Field with validation -->
                <ValidationProvider
                  name="Title"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    v-model="taskModel.title"
                    id="title"
                    class="rounded-lg elevation-0 green-border"
                    :error-messages="errors"
                    solo
                  ></v-text-field>
                </ValidationProvider>
              </v-flex>

              <!-- Tags Field -->
              <v-flex>
                <!-- Label -->
                <h2 class="black--text mb-2">Tags</h2>
                <!-- Field with validation -->
                <ValidationProvider
                  name="Tags"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-autocomplete
                    v-model="taskModel.tags"
                    id="tags"
                    class="rounded-lg elevation-0 green-border"
                    :items="getTags"
                    append-icon=""
                    :error-messages="errors"
                    solo
                  ></v-autocomplete>
                </ValidationProvider>
              </v-flex>

              <!-- Assignee Field -->
              <v-flex>
                <!-- Label -->
                <h2 class="black--text mb-2">Assignee</h2>
                <!-- Field with validation -->
                <ValidationProvider
                  name="Assignee"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-autocomplete
                    v-model="taskModel.assignee"
                    id="assignee"
                    class="rounded-lg elevation-0 green-border"
                    :items="userList"
                    item-text="first_name"
                    item-value="first_name"
                    append-icon=""
                    :error-messages="errors"
                    solo
                  >
                  </v-autocomplete>
                </ValidationProvider>
              </v-flex>

              <!-- Start Date Field with date picker popup -->
              <v-flex>
                <!-- Label -->
                <h2 class="black--text mb-2">Start Date</h2>
                <!-- Show Date picker popup -->
                <v-menu
                  v-model="menuStartDate"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  min-width="290px"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <!-- Field with validation -->
                    <ValidationProvider
                      name="Start Date"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-text-field
                        v-model="getStartDateFormat"
                        id="start-date"
                        class="rounded-lg elevation-0 green-border"
                        :error-messages="errors"
                        solo
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                        <template v-slot:default>
                          asdasdsa
                        </template>
                      </v-text-field>
                    </ValidationProvider>
                  </template>
                  <!-- Date picker component -->
                  <v-date-picker
                    v-model="taskModel.start_date"
                    :min="getToday"
                    :max="taskModel.end_date"
                    no-title
                    @input="menuStartDate = false"
                  ></v-date-picker>
                </v-menu>
              </v-flex>

              <!-- End Date Field with date picker popup -->
              <v-flex>
                <!-- Label -->
                <h2 class="black--text mb-2">End Date</h2>
                <!-- Show Date picker popup -->
                <v-menu
                  v-model="menuEndDate"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  min-width="290px"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <!-- Field with validation -->
                    <ValidationProvider
                      name="End Date"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-text-field
                        :value="getEndDateFormat"
                        id="end-date"
                        class="rounded-lg elevation-0 green-border"
                        :error-messages="errors"
                        solo
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </ValidationProvider>
                  </template>
                  <!-- Date picker component -->
                  <v-date-picker
                    v-model="taskModel.end_date"
                    :min="
                      taskModel.start_date ? taskModel.start_date : getToday
                    "
                    no-title
                    @input="menuEndDate = false"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
            </v-card-text>

            <!-- Dialog Footer -->
            <v-card-actions class="justify-center py-0">
              <div>
                <!-- Button Add New Task -->
                <v-btn
                  type="submit"
                  class="elevation-0 rounded-lg"
                  color="#76cbb7"
                  light
                  large
                >
                  <h3 class="text-capitalize white--text">
                    Add New Task
                  </h3>
                </v-btn>
              </div>
            </v-card-actions>
          </form>
        </ValidationObserver>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Import module
import moment from "moment";

import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate/dist/vee-validate.full";

export default {
  // Component props
  props: {
    tasks: {
      type: Object,
      default: () => ({})
    }
  },
  // Register component
  components: {
    ValidationObserver,
    ValidationProvider
  },
  // Model variable
  data() {
    return {
      id: 50,
      taskModel: {
        title: "",
        tags: "",
        assignee: "",
        start_date: "",
        end_date: ""
      },
      userList: [],
      dialog: false,
      menuStartDate: false,
      menuEndDate: false
    };
  },
  computed: {
    // Get tags list for Tags field
    getTags() {
      return ["Research", "Frontend", "Backend", "PM"];
    },
    // Get today date
    getToday() {
      return new Date().toISOString().substr(0, 10);
    },
    // Set format start date in field
    getStartDateFormat() {
      return this.taskModel.start_date
        ? moment(this.taskModel.start_date).format("DD MMMM YYYY")
        : "";
    },
    // Set format end date in field
    getEndDateFormat() {
      return this.taskModel.end_date
        ? moment(this.taskModel.end_date).format("DD MMMM YYYY")
        : "";
    }
  },
  // Hook when component load
  mounted() {
    this.getUser();
  },
  methods: {
    // Function Get user list
    getUser() {
      return this.$store
        .dispatch("user/getAll")
        .then(data => {
          this.userList = data;
        })
        .catch(err => {
          alert(err);
        });
    },
    // Function Submit new task
    onsubmit() {
      this.tasks.tasks.push({
        id: this.id,
        ...this.taskModel
      });
      this.id++;
      this.resetForm();
      this.dialog = false;
    },
    // Function reset form to initial value
    resetForm() {
      this.taskModel = {
        title: "",
        tags: "",
        assignee: "",
        start_date: "",
        end_date: ""
      };
      this.$refs.observer.reset();
    }
  }
};
</script>

<style scoped></style>

<!-- Dhiya Ulhaq Dewangga -->
