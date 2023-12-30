<template>
  <div>
    <div class="p-5 flex justify-between">
      <h2 class="text-2xl font-bold text-gray-600">Tüm Öğrenciler (543)</h2>
      <div>
        <v-btn dark>Öğrenciyi Düzenle</v-btn>
        <v-btn dark>Öğrenciyi Sil</v-btn>
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
          <tr v-for="student in students" :key="student.id">
            <td class="border px-4 py-2">{{ student.id }}</td>
            <td class="border px-4 py-2">{{ student.name }}</td>
            <td class="border px-4 py-2">{{ student.email }}</td>
            <td class="border px-4 py-2">{{ student.course }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Students",
  data: () => ({
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
        id: 2,
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
        id: 2,
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
    ],
  }),
};
</script>
