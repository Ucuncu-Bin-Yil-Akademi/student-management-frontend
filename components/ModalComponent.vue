<template>
  <div
    class="absolute w-full h-full top-0 left-0"
    style="background-color: rgba(135, 135, 135, 0.446)"
  >
    <div
      class="bg-gray-200 w-1/2 absolute left-1/4 top-1/4 p-3 border-2 shadow-lg rounded"
    >
      <div class="flex items-center justify-between gap-5 w-full mb-10">
        <h1 class="text-2xl text-gray-600">Yeni Öğrenci Ekle</h1>
        <v-btn icon>
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>
      </div>
      <div>
        <v-text-field label="Ad Soyad" solo></v-text-field>
        <v-text-field label="E-posta" solo></v-text-field>
        <select
          label="Kurs"
          item-text="name"
          item-value="id"
          style="
            width: 100%;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            padding: 10px;
          "
        >
          <option
            v-for="activeClass in classes"
            :key="activeClass.id"
            :value="activeClass.id"
          >
            {{ activeClass.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: Boolean,
  },
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
