<template>
  <div>
    <div class="p-5 flex justify-between">
      <h2 class="text-2xl font-bold text-gray-600">Tüm Öğrenciler (543)</h2>
      <div class="flex justify-end gap-5">
        <v-btn
          small
          style="background-color: rgb(59, 123, 123); color: white"
          @click="isNewStudentModalOpen = true"
          >Öğrenci Ekle</v-btn
        >
        <div v-if="selected">
          <v-btn dark small>Öğrenciyi Düzenle</v-btn>
          <v-btn dark small>Öğrenciyi Sil</v-btn>
        </div>
      </div>
    </div>

    <div class="p-5">
      <table class="table-auto w-full bg-gray-300">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Ad Soyad</th>
            <th class="px-4 py-2">E-posta</th>
            <th class="px-4 py-2">Kurs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id" class="rows">
            <td class="border px-4 py-2">
              <v-checkbox
                :label="student.id"
                v-model="selected"
                :value="student.id"
              ></v-checkbox>
            </td>
            <td class="border px-4 py-2">{{ student.name }}</td>
            <td class="border px-4 py-2">{{ student.email }}</td>
            <td class="border px-4 py-2">{{ student.course }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <ModalComponent
      v-if="isNewStudentModalOpen"
      :isOpened="isNewStudentModalOpen"
    />
  </div>
</template>

<script>
export default {
  name: "Students",
  data: () => ({
    selected: null,
    isNewStudentModalOpen: false,
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
};
</script>

<style scoped>
.rows:nth-child(even) {
  background-color: rgb(196, 196, 196);
}
</style>
