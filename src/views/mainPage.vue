<template>
  <navbar />

  <div class="about">
    <h1>{{user.name}}</h1>
  </div>
</template>
<script>
import router from "../router";
import navbar from "@/components/navbar.vue";

export default {
  components: {
    navbar
  },
  data() {
    return {
      user: "",
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user != null ? true : router.push("/browse");
  },
};
</script>
