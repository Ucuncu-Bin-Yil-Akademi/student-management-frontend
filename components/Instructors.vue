<template>
  <div class="p-3">
    <div class="flex justify-between">
      <h1 class="text-gray-800 text-2xl">
        Eğitmenler ({{ instructors.length }})
      </h1>
      <v-btn color="secondary" style="background-color: rgb(59, 123, 123)"
        >Eğitmen Ekle</v-btn
      >
    </div>

    <div class="mt-5 w-full gap-3 grid grid-cols-4">
      <div class="bg-gray-200 p-5 rounded-lg" v-for="instructor in instructors">
        <span class="text-gray-600">{{ instructor.email }}</span>
        <h2>{{ instructor.fullName }}</h2>
        <span class="text-gray-600">{{ instructor.course }}</span>
        <div class="w-full mt-5">
          <v-btn color="primary" dark>Düzenle</v-btn>
          <v-btn color="primary" dark>Sil</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructors",
  data: () => ({
    instructors: [
      {
        fullName: "George",
        course: "Frontend Geliştirme Kursu",
        email: "x@gmail.com",
      },
      {
        fullName: "John",
        course: "Backend Gelştirme Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Ali",
        course: "Mobil Uygulama Geliştirme Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Mehmet",
        course: "Siber Güvenlik Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Ahmet",
        course: "Dijital Pazarlama Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "George",
        course: "Frontend Geliştirme Kursu",
        email: "x@gmail.com",
      },
      {
        fullName: "John",
        course: "Backend Gelştirme Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Ali",
        course: "Mobil Uygulama Geliştirme Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Mehmet",
        course: "Siber Güvenlik Kursu",
        email: "y@gmail.com",
      },
      {
        fullName: "Ahmet",
        course: "Dijital Pazarlama Kursu",
        email: "y@gmail.com",
      },
    ],
  }),
};
</script>
