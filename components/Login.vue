<template>
  <v-app>
    <div
      class="w-full bg-gray-300 min-h-screen flex justify-center items-center"
    >
      <div class="w-1/2">
        <div
          class="bg-gray-500 py-5 gap-3 shadow-lg rounded-lg flex flex-col justify-center items-center"
        >
          <img
            src="https://ucuncubinyil.com/wp-content/uploads/2020/08/ucuncubinyil-logo.png"
          />
          <h2 class="text-2xl font-bold text-gray-800">
            UBY Portal'a Hoşgeldiniz
          </h2>

          <div class="w-3/4 mt-10">
            <label class="text-gray-800 text-xl"> E-mail </label>

            <v-text-field
              label="E-mail Adresinizi Giriniz"
              solo
              v-model="email"
            ></v-text-field>
          </div>

          <div class="w-3/4">
            <label class="text-gray-800 text-xl"> Şifre </label>

            <v-text-field
              label="Şifrenizi Giriniz"
              type="password"
              solo
              v-model="password"
            ></v-text-field>
          </div>

          <div class="w-3/4 flex justify-end">
            <v-btn depressed color="primary" dark @click="login"
              >Giriş Yap</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/admins/login", {
          mail: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.data.status == "success") {
            this.$store.commit("SET_USER", res.data.data);
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          alert("Hatalı Giriş Yaptınız");
        });
    },
  },
};
</script>
