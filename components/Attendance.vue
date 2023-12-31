<template>
  <div class="p-3">
    <h1 class="text-2xl text-gray-800">Yoklama İşlemleri</h1>

    <div class="flex items-center gap-3 mt-5">
      <select
        class="w-1/2 p-2"
        style="border: 1px solid #d1d5db"
        v-model="selectedCourse"
      >
        <option value="" disabled selected>Kurs Seçiniz</option>
        <option v-for="course in classes" :key="course">{{ course }}</option>
      </select>
      <div class="w-1/2">
        <input
          class="p-2 w-full"
          style="border: 1px solid #d1d5db"
          type="text"
          v-model="date"
          placeholder="Lütfen yoklama tarihi seçiniz"
          @click="isDatePickerOpen = true"
        />
        <div class="w-full absolute">
          <v-date-picker v-model="date" dark no-title v-if="isDatePickerOpen">
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="isDatePickerOpen = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="isDatePickerOpen = false">
              OK
            </v-btn>
          </v-date-picker>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <table
        v-if="date && selectedCourse"
        class="table-auto w-full bg-gray-300"
      >
        <thead>
          <tr>
            <th class="px-4 py-2">Mevcut</th>
            <th class="px-4 py-2">Ad Soyad</th>
            <th class="px-4 py-2">E-posta</th>
            <th class="px-4 py-2">Kurs</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="student in students" :key="student.id" class="rows">
            <td class="border px-4 py-2">
              <v-checkbox
                label="Evet"
                :value="student.id"
                @click="checkBoxClick(student.id)"
              ></v-checkbox>
            </td>
            <td class="border px-4 py-2">{{ student.name }}</td>
            <td class="border px-4 py-2">{{ student.email }}</td>
            <td class="border px-4 py-2">{{ student.course }}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="text-2xl text-gray-800" v-else>
        Lütfen bir kurs ve tarih seçiniz.
      </h2>

      <div
        class="my-3 w-full flex justify-end"
        v-if="selected.length > 0 && date && selectedCourse"
      >
        <v-btn style="background-color: rgb(29, 128, 95); color: white"
          >Kaydet</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Attendance",
  data: () => ({
    selected: [],
    selectedCourse: "",
    isDatePickerOpen: false,
    date: null,

    classes: [
      "Frontend Geliştirme Kursu",
      "Backend Gelştirme Kursu",
      "Mobil Uygulama Geliştirme Kursu",
      "Siber Güvenlik Kursu",
      "Dijital Pazarlama Kursu",
    ],

    students: [
      {
        id: 1,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
      {
        id: 2,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
      {
        id: 3,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
      {
        id: 4,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
      {
        id: 5,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
      {
        id: 6,
        name: "Ali Veli",
        email: "",
        course: "Frontend Geliştirme Kursu",
      },
    ],
  }),

  methods: {
    checkBoxClick(id) {
      if (this.selected.includes(id)) {
        this.selected = this.selected.filter((item) => item !== id);
      } else {
        this.selected.push(id);
      }
    },
  },
};
</script>

<style scoped>
.v-date-picker-header {
  display: none;
}

.rows:nth-child(even) {
  background-color: rgb(196, 196, 196);
}

.v-btn--active {
  color: red !important;
}
</style>
