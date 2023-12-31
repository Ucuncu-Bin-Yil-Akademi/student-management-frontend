<template>
  <div class="w-full bg-gray-300 min-h-screen flex justify-center items-center">
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
          <label class="text-gray-800 text-xl"> Kullanıcı Adı </label>

          <v-text-field label="Kullanıcı Adınızı Giriniz" solo></v-text-field>
        </div>

        <div class="w-3/4">
          <label class="text-gray-800 text-xl"> Şifre </label>

          <v-text-field label="Şifrenizi Giriniz" solo></v-text-field>
        </div>

        <div class="w-3/4 flex justify-end">
          <v-btn depressed color="primary" dark>Giriş Yap</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
