<template>
  <div class="edit-card">
    <div class="card-actions">
      <h1 class="card-baslik">Profili Düzenle</h1>

      <div class="profile-data">
        
        
        <div class="avatar">
          <img class="edit-avatar" src="../assets/images/luci.png" alt="" />
        </div>

        <div class="edit-section">
          <input class="edit-input" type="text" v-model="form.name" />
          <div
            style="text-align: left !important; width: 100%; padding-top: 20px"
          >
            <h2 style="font-size: 1rem; color: lightgrey">Dil:</h2>
            <select class="edit-select">
              <option value="TR">Türkçe</option>
            </select>
          </div>
        </div>
      </div>
      <hr style="border-color: gray;height:1px" />
      <button class="edit-button">Kaydet</button>
      <button class="exit-button" @click="iptal">İptal</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  mounted() {
    this.form = this.user;
  },

  data() {
    return {
      form: {
        name: "",
        image: "",
      },
    };
  },

  methods: {
    iptal() {
      this.$emit('iptal');
    },
  },
};
</script>
<style scoped>
.edit-card {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    flex-direction: column;
}

.card-actions {
    text-align: left;
    position: relative;
}


.card-baslik {
    font-size: 2rem;
    margin: 0;
}

.profile-data {

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 2em 1em;

}

.edit-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.edit-avatar {
    white-space: nowrap;
    margin-right: 1.5vw;
    width: 80%;
    height: 150px;
    min-width: 80px;
    max-width: 180px;
}

.edit-input {
    width: 100%;
    height: 30px;
    background: #666;
    border: 1px solid transparent;
    margin: 0 .8em 0 0;
    padding: .2em .6em;
    color: #fff;
    font-size: 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-indent: .1vw;
}

.edit-select {
    height: 1.7rem;
    padding-left: 10px;

    font-size: 1.25rem;
    font-weight: 700;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, .9);
    display: inline-block;
    color: #fff;
    background-color: #000;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    position: relative;
    padding-right: 50px;
}

.edit-button {

    background-color: white;
    color: #000;
    padding: 10px;
    width: 9rem;
    border: 1px solid #fff;
    font-weight: 700;
    font-size: 1rem;
    margin: 20px ;
    letter-spacing: 2px;
}

.edit-button:hover{
    background-color: red;
    color:white;
    border-color: red;
    cursor: pointer;
}

.exit-button {

    background-color: transparent;
    color: grey;
    padding: 10px;
    height: 40px;
    margin-left: 20px;
    width: 6rem;
    border: 1px solid grey;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 2px;
}

.exit-button:hover{

    border-color: white;
    cursor: pointer;
}

@media screen {
  
}
</style>
