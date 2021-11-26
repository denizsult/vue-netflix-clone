<template>
  <div class="edit-card">
    <div class="card-actions">
      <h1 class="card-baslik">Profili Düzenle</h1>

      <div class="profile-data">
        <div class="avatar">
          <img class="edit-avatar" src="../assets/images/luci.png" alt />
        </div>

        <div class="edit-section">
          <input class="edit-input" type="text" v-model="form.name" />

          <input class="edit-input" type="text" :value="form.email" disabled />

          <div style="text-align: left !important; width: 100%; padding-top: 20px">
            <h2 style="font-size: 1rem; color: lightgrey">Dil:</h2>
            <select class="edit-select">
              <option value="TR">Türkçe</option>
            </select>
          </div>
        </div>
      </div>
      <hr style="border-color: gray;height:1px" />
      <button @click="send" class="edit-button">Kaydet</button>
      <button class="exit-button" @click="iptal">İptal</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      form: {
        id: "",
        name: "",
        image: "",
        email: ""
      },
      userData: JSON.parse(localStorage.getItem("user"))

    };
  },
  mounted() {
    this.form.image = this.user.image;
    this.form.name = this.userData.name;
    this.form.email = this.userData.email;
    this.form.id = this.userData.id;

  },

  methods: {
    iptal() {
      this.$emit('iptal');
    },

    send() {
      this.$http.post('user/update', this.form).then((response) => {
        if (response.status == 200) {
          this.userData.name = this.form.name;
          localStorage.setItem("user", JSON.stringify(this.userData));
          this.$emit('iptal', this.userData);

        }
      });
    }


  },
};
</script>
 