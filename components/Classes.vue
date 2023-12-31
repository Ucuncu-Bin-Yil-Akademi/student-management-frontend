<template>
  <div class="p-3">
    <div class="flex justify-between">
      <h1 class="text-2xl text-gray-700">
        Sınıflar ve Dersler ({{ classes.length }})
      </h1>
      <v-btn style="background-color: rgb(29, 128, 95); color: white"
        >Yeni Sınıf Ekle</v-btn
      >
    </div>

    <div class="grid grid-cols-4 mt-10 gap-5">
      <div class="border p-3 flex flex-col" v-for="activeClass in classes">
        <h2 class="text-xl text-gray-700">{{ activeClass.name }}</h2>
        <span class="text-gray-500"
          >Eğitmen: <b>{{ activeClass.instructor }}</b></span
        >
        <span class="text-gray-500"
          >Toplam Öğrenci: <b>{{ activeClass.students }}</b></span
        >
        <span class="text-gray-500">
          Tarih: <b>{{ activeClass.startDate }} - {{ activeClass.endDate }}</b>
        </span>

        <div class="w-full mt-5">
          <v-btn dark small>Düzenle</v-btn>
          <v-btn dark small>Sil</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classes",
  data: () => ({
    classes: [
      {
        id: 1,
        name: "Frontend Geliştirme Kursu",
        instructor: "Canberk Beren",
        students: 25,
        startDate: "01.01.2021",
        endDate: "01.01.2021",
      },
      {
        id: 2,
        name: "Backend Geliştirme Kursu",
        instructor: "Canberk Beren",
        students: 25,
        startDate: "01.01.2021",
        endDate: "01.01.2021",
      },
      {
        id: 3,
        name: "Mobil Uygulama Geliştirme Kursu",
        instructor: "Canberk Beren",
        students: 25,
        startDate: "01.01.2021",
        endDate: "01.01.2021",
      },
      {
        id: 4,
        name: "Siber Güvenlik Kursu",
        instructor: "Canberk Beren",
        students: 25,
        startDate: "01.01.2021",
        endDate: "01.01.2021",
      },
      {
        id: 5,
        name: "Dijital Pazarlama Kursu",
        instructor: "Canberk Beren",
        students: 25,
        startDate: "01.01.2021",
        endDate: "01.01.2021",
      },
    ],
  }),
};
</script>
