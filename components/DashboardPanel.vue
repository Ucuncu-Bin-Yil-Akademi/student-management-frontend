<template>
  <div>
    <div class="flex gap-5 p-5">
      <div
        v-for="card in cards"
        :class="`bg-${card.color}-700 p-5 w-1/3 rounded`"
      >
        <h1 class="text-white text-2xl" v-text="card.title"></h1>
        <span class="text-4xl text-white">{{ card.value }}</span>
      </div>
    </div>

    <h1 class="text-2xl px-5 py-3 text-gray-600">Son Açılan Sınıflar</h1>
    <div class="flex p-5">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-for="lastClass in lastClasses"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">{{ lastClass.instructor }}</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ lastClass.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Kayıtlı {{ lastClass.studentCount }} Öğrenci
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </div>

    <h1 class="text-2xl px-5 py-3 text-gray-600">Son Kayıt Olan Öğrenciler</h1>
    <div class="flex p-5">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-for="student in lastRegistered"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">{{ student.name }}</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ student.email }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Kayıt Olduğu Kurs: {{ student.course }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPanel",
  data: () => ({
    cards: [
      {
        title: "Toplam Öğrenci",
        value: 564,
        color: "orange",
      },
      {
        title: "Toplam Eğitmen",
        value: 23,
        color: "green",
      },
      {
        title: "Toplam Sınıf",
        value: 26,
        color: "blue",
      },
    ],

    lastClasses: [
      {
        name: "Frontend Geliştirme Kursu",
        instructor: "Canberk Beren",
        studentCount: 23,
      },
      {
        name: "Backend Geliştirme Kursu",
        instructor: "Ali Yılmaz",
        studentCount: 23,
      },
      {
        name: "Mobil Uygulama Geliştirme Kursu",
        instructor: "Joe Doe",
        studentCount: 23,
      },
      {
        name: "Yapay Zeka Kursu",
        instructor: "John Doe",
        studentCount: 23,
      },
    ],

    lastRegistered: [
      {
        name: "Canberk Beren",
        email: "lorem@gmail.com",
        course: "Frontend Geliştirme Kursu",
      },
      {
        name: "Ali Yılmaz",
        email: "lorem@gmail.com",
        course: "Backend Geliştirme Kursu",
      },
      {
        name: "Joe Doe",
        email: "lorem@gmail.com",
        course: "Mobil Uygulama Geliştirme Kursu",
      },
      {
        name: "John Doe",
        email: "lorem@gmail.com",
        course: "Yapay Zeka Kursu",
      },
    ],
  }),
};
</script>
