<template>
  <div class="min-h-screen w-full bg-gray-300">
    <div class="w-full bg-purple-800">
      <div class="w-full flex p-5 justify-between items-center">
        <h1 class="text-2xl text-white">Yönetim Paneli</h1>
        <v-btn color="primary" dark @click="logout">Çıkış Yap</v-btn>
      </div>
    </div>

    <div class="flex gap-5 p-10">
      <div class="w-1/6 bg-white rounded border border-gray-400 h-1/2">
        <div class="w-full p-5 flex gap-5 border-b border-gray-400">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>

          <div class="">
            <span>{{ user.name }} {{ user.lastName }}</span>

            <div class="flex items-center gap-2">
              <div class="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
        <v-list nav dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              v-if="item.allowedRoles.includes(user.role)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div class="w-5/6 bg-white rounded border border-gray-400 h-full">
        <component :is="items[selectedItem].component" />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardPanel from "./DashboardPanel.vue";
import Students from "./Students.vue";
import Instructors from "./Instructors.vue";
import Attendance from "./Attendance.vue";
import Classes from "./Classes.vue";
import Admins from "./Admins.vue";
import { mapGetters } from "vuex";

export default {
  name: "DashboardMain",
  created() {
    if (!this.getUser) {
      this.$router.push("/");
    }
  },
  data: () => ({
    selectedItem: 0,
    items: [
      {
        text: "Yönetim Paneli",
        icon: "mdi-monitor-dashboard",
        component: DashboardPanel,
        allowedRoles: ["manager", "instructor", "editor"],
      },
      {
        text: "Öğrenciler",
        icon: "mdi-account-multiple",
        component: Students,
        allowedRoles: ["manager", "editor"],
      },
      {
        text: "Eğitmenler",
        icon: "mdi-human-male-board",
        component: Instructors,
        allowedRoles: ["manager", "editor"],
      },
      {
        text: "Yoklama",
        icon: "mdi-account-group-outline",
        component: Attendance,
        allowedRoles: ["manager", "instructor", "editor"],
      },
      {
        text: "Sınıflar",
        icon: "mdi-school",
        component: Classes,
        allowedRoles: ["manager", "editor"],
      },
      {
        text: "Yöneticiler",
        icon: "mdi-account-tie",
        component: Admins,
        allowedRoles: ["manager"],
      },
    ],
  }),
  computed: {
    ...mapGetters(["getUser"]),

    user() {
      return this.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/");
    },
  },
};
</script>
