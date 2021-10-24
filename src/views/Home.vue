<template>
  <router-link to="/">
    <img src="../assets/logo.png" class="logo" alt />
  </router-link>
  <EditCard @iptal="editable = false" :user="userData" v-if="editable" />
  <div v-if="!editable" class="center-div">
    <div class="profiles">
      <h1 class="profile-label">{{ !edit ? "Kim izliyor?" : "Profil Yönetimi:" }}</h1>

      <div class="row" style="width:100vw;">
        <ul class="choose-profile">
          <li
            @click="!edit ? go(item) : null"
            class="profile"
            v-for="item in profiles"
            :key="item.id"
          >
            <div class="edit">
              <img class="profile-image" src="../assets/images/luci.png" alt />

              <img
                v-if="edit"
                id="edit"
                @click="editCard(item)"
                src="../assets/images/edit.png"
                alt
              />
            </div>

            <label class="profile-name">{{ item.name }}</label>
          </li>
        </ul>
      </div>
      <a class="profile-btn" @click="edit = !edit">
        {{
          !edit ? "Profil Yönetimi" : "Tamam"
        }}
      </a>
    </div>
  </div>
</template>

<script>

import EditCard from "../components/editCard.vue";
import router from "../router";
export default {
  components: { EditCard },
  data() {
    return {
      edit: false,
      editable: false,
      userData: "",

      profiles: {
        Profil1: {
          name: "Deniz",
          image: "../assets/images/luci.png",
        },
        Profil2: {
          name: "Deniz2",
          image: "../assets/images/luci.png",
        },
        Profil3: {
          name: "Deniz3",
          image: "../assets/images/luci.png",
        },
        Profil4: {
          name: "Deniz4",
          image: "../assets/images/luci.png",
        },
        Profil5: {
          name: "Deniz5",
          image: "../assets/images/luci.png",
        },
      },
    };
  },


  methods: {
    editCard(data) {
      this.userData = data;
      this.editable = true;
    },

    go(data) {

      localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
    }
  },
};
</script>



<style>
.profile-btn {
  display: block;
  margin: 2em 0 1em 0;
  font-size: 1.5rem;
  border: 1px solid grey;
  color: grey;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
}

.profile-btn:hover {
  color: white;
  border-color: white;
}

.profiles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-label {
  font-size: 3.5rem;
  margin: 0;
  font-weight: unset;
}

.choose-profile {
  display: flex;
  font-size: 2.5vw;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
}

.choose-profile > li {
  margin: 20px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.profile-image {
  width: 100%;
  height: 200px;
  border-radius: 5%;
  margin: 0 auto;
  margin-bottom: 10px;
}

.profile-name {
  color: grey;
  font-size: 30px;
}

.profile:hover > .edit {
  border-color: white;
  border-radius: 5%;
}

.profile:hover > .profile-name {
  color: white;
}

.edit {
  position: relative;
  border: 4px solid transparent;
}

#edit:hover > .edit {
  border-color: grey !important;
  border-radius: 5%;
}

.edit > #edit {
  position: absolute;
  background: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .profile-image {
    width: 100%;
    height: 150px;
    border-radius: 5%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>
