<template>
  <v-app class="p-3">
    <div>
      <div class="flex justify-between">
        <h1 class="text-gray-800 text-2xl">
          Eğitmenler ({{ instructors.length }})
        </h1>
        <v-dialog v-model="newInstructorDialog" width="750">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="secondary"
              style="background-color: rgb(59, 123, 123)"
              v-bind="attrs"
              v-on="on"
            >
              Eğitmen Ekle
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">Yeni Eğitmen Ekle</span>
            </v-card-title>

            <v-card-text>
              <div class="">
                <v-text-field
                  v-model="newInstructorForm.name"
                  label="Ad"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="newInstructorForm.lastName"
                  label="Soyad"
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="newInstructorForm.mail"
                  label="Mail"
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="newInstructorForm.phoneNumber"
                  label="Telefon Numarası"
                  outlined
                ></v-text-field>

                <v-select
                  v-model="newInstructorForm.course"
                  :items="classes"
                  item-text="courseName"
                  item-value="_id"
                  label="Kurs"
                  outlined
                ></v-select>
                <div class="flex justify-end w-full">
                  <v-btn color="primary" dark @click="createInstructor"
                    >Ekle</v-btn
                  >
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <div class="mt-5 w-full gap-3 grid grid-cols-4">
      <div class="bg-gray-200 p-5 rounded-lg" v-for="instructor in instructors">
        <span class="text-gray-600">{{ instructor.mail }}</span>
        <h2>{{ instructor.name }} {{ instructor.lastName }}</h2>
        <span class="text-gray-600">{{
          classes.find((c) => c._id === instructor.course)?.courseName
        }}</span>
        <div class="w-full mt-5">
          <v-dialog v-model="editInstructorModal" width="750">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                color="primary"
                v-bind="attrs"
                v-on="on"
                @click="handleEditInstructor(instructor)"
                >Düzenle</v-btn
              >
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">Eğitmeni Düzenle</span>
              </v-card-title>

              <v-card-text class="mt-5">
                <div>
                  <div class="flex flex-col gap-5">
                    <v-text-field
                      label="Ad"
                      outlined
                      dense
                      class="w-full"
                      v-model="editInstructorForm.name"
                    ></v-text-field>

                    <v-text-field
                      label="Soyad"
                      outlined
                      dense
                      class="w-full"
                      v-model="editInstructorForm.lastName"
                    ></v-text-field>

                    <v-text-field
                      v-model="editInstructorForm.mail"
                      label="Mail"
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="editInstructorForm.phoneNumber"
                      label="Telefon Numarası"
                      outlined
                    ></v-text-field>

                    <v-select
                      v-model="editInstructorForm.course"
                      :items="classes"
                      item-text="courseName"
                      item-value="_id"
                      label="Kurs"
                      outlined
                    ></v-select>
                  </div>
                </div>
                <div class="w-full flex justify-end">
                  <v-btn dark @click="editInstructor">Güncelle</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-btn color="primary" dark @click="snackbarDelete = true">Sil</v-btn>

          <v-snackbar v-model="snackbarDelete">
            Bu sınıf silinecektir, emin misiniz?

            <template v-slot:action="{ attrs }">
              <div class="flex">
                <v-btn
                  color="green"
                  text
                  v-bind="attrs"
                  @click="deleteInstructor(instructor._id)"
                >
                  Evet
                </v-btn>
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbarDelete = false"
                >
                  Hayır
                </v-btn>
              </div>
            </template>
          </v-snackbar>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Instructors",
  created() {
    axios.get("http://localhost:3000/classes").then((response) => {
      this.classes = response.data;
    });

    this.getInstructors();
  },
  data: () => ({
    instructors: [],
    newInstructorDialog: false,
    snackbarDelete: false,
    editInstructorModal: false,
    classes: [],
    newInstructorForm: {
      name: "",
      mail: "",
      phoneNumber: "",
      course: "",
      lastName: "",
    },
    editInstructorForm: {
      _id: "",
      name: "",
      mail: "",
      phoneNumber: "",
      course: "",
      lastName: "",
    },
  }),
  methods: {
    handleEditInstructor(instructor) {
      this.editInstructorModal = true;
      this.editInstructorForm = {
        _id: instructor._id,
        name: instructor.name,
        mail: instructor.mail,
        phoneNumber: instructor.phoneNumber,
        course: instructor.course,
        lastName: instructor.lastName,
      };
    },
    getInstructors() {
      axios.get("http://localhost:3000/instructors").then((response) => {
        this.instructors = response.data;
      });
    },
    createInstructor() {
      axios
        .post(
          "http://localhost:3000/instructors/create",
          this.newInstructorForm
        )
        .then((response) => {
          this.getInstructors();
          this.newInstructorDialog = false;
        });
    },
    deleteInstructor(id) {
      axios
        .delete(`http://localhost:3000/instructors/${id}/delete`)
        .then(() => {
          this.getInstructors();
          this.snackbarDelete = false;
        });
    },
    editInstructor() {
      axios
        .put(
          `http://localhost:3000/instructors/${this.editInstructorForm._id}/update`,
          this.editInstructorForm
        )
        .then(() => {
          this.getInstructors();
          this.editInstructorModal = false;
        });
    },
  },
};
</script>
