<template>
  <div
    :style="{ background: scrollPosition > 50 ? 'black !important' : 'transparent' }"
    class="navbar-pinned"
  >
    <div class="navbar">
      <div class="nav-1">
        <router-link to="/">
          <img src="../assets/logo.png" class="navbar-logo" alt />
        </router-link>

        <ul class="navbar-menu">
          <li class="navbar-menu-item">Ana Sayfa</li>
          <li class="navbar-menu-item">Diziler</li>
          <li class="navbar-menu-item">Filmler</li>
          <li class="navbar-menu-item">Yeni ve Popüler</li>
          <li class="navbar-menu-item">Listem</li>
        </ul>
      </div>
    </div>

    <div class="nav-2">
      <div>
        <img width="26" src="../assets/images/search.png" alt />
      </div>
      <div>
        <img width="26" src="../assets/images/notification.png" alt />
      </div>
      <div>
        <div class="profile-nav">
          <img class="nav-2-img" src="../assets/images/luci.png" alt />
          <img width="10" id="drop" src="../assets/images/drop.png" alt />

          <div class="profile-nav-menu">
            <img src="../assets/images/drop.png" alt />
            <div class="menu">
              <ul>
                <li v-for="item in profiles" :key="item.id" class="menu-item">
                  <img src="../assets/images/luci.png" alt />
                  {{ item.name }}
                </li>
                <li class="menu-item">
                  <router-link
                    style="color: white !important;text-decoration: none"
                    to="/browse"
                  >Profil Yönetimi</router-link>
                </li>
                <hr style="color:lightgrey; width:100%; opacity:0.5" />
                <ul class="menu-ul-2">
                  <li class="menu-item-2">Hesap</li>
                  <li class="menu-item-2">Yardım Merkezi</li>
                  <li class="menu-item-2">Oturumu Kapat</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div @click="genelTiklama" :style="modal ? { opacity: 0.3 } : { opacity: 1 }" class="genel">
    <div class="billboard">
      <img class="billboard-img" src="../assets/images/bg.jpg" alt />

      <div class="billboard-content">
        <img src="../assets/images/content-img.png" alt />
      </div>
      <div class="billboard-content-2">
        <h1>Gün Doğmadan Önce, yolları kesişen bir kadın ve bir erkeğin hikayesini anlatıyor. Sıradan bir Avrupa yolculuğu sırasında trende karşılaşıp tanışan iki farklı insan, Jesse ve Celine bu yolculuğa sıradışı bir şekilde sürdürürler.</h1>
      </div>
      <div class="billboard-buttons">
        <button class="billboard-button-1">
          <img width="50" src="http://simpleicon.com/wp-content/uploads/play1.svg" alt /> Oynat
        </button>
        <button class="billboard-button-2">
          <img width="30" src="../assets/images/info.png" alt />
          &nbsp; Daha Fazla Bilgi
        </button>
      </div>
    </div>

    <div class="slide">
      <h3 class="slide-head">Tanıdık Filmler</h3>
      <div @click="prev" class="btn-left">
        <img width="50" src="../assets/images/left.png" alt />
      </div>

      <div ref="inner" :style="innerStyles" class="inner">
        <div v-for="(item) in items" @click="openModal($event, item)" :key="item.id" class="card">
          <img :src="'http://image.tmdb.org/t/p/w780/' + item.backdrop_path" />
          <div class="item-card">
            <h2>{{ item.title }}</h2>

            <small style="font-weight:900;font-size:20px">Rank: {{ item.vote_average }}</small>
          </div>
        </div>
      </div>

      <div @click="next" class="btn-right">
        <img width="50" src="../assets/images/right.png" alt />
      </div>
    </div>
  </div>

  <div class="slide-2">
    <h3 class="slide-head">Gündemdekiler</h3>

    <div @click="prev" class="btn-left">
      <img width="50" src="../assets/images/left.png" alt />
    </div>

    <div ref="inner" :style="innerStyles" class="inner">
      <div v-for="(item) in items" :key="item.id" class="card">
        <img :src="'http://image.tmdb.org/t/p/w780/' + item.backdrop_path" />
        <div class="item-card">
          <h2>{{ item.title }} <img width="30" src="../assets/images/info.png" alt /></h2>          


          <small>Rank: {{ item.vote_average }}</small>
        </div>
      </div>
    </div>

    <div @click="next" class="btn-right">
      <img width="50" src="../assets/images/right.png" alt />
    </div>
  </div>

  <div v-if="modal" class="modal">
    <img style="width: 100%;" :src="'http://image.tmdb.org/t/p/w780/' + modalData.backdrop_path" />
    <button @click="modal = false" id="close">X</button>

    <div class="modal-buttons">
      <button class="modal-button-1">
        <img width="50" src="http://simpleicon.com/wp-content/uploads/play1.svg" alt /> Oynat
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  </div>
</template>

<script>


import router from "../router";
import axios from 'axios'
export default {

  data() {
    return {
      user: "",
      items: [],

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

      },
      modal: false,
      modalData: '',
      scrollPosition: 0,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user != null ? true : router.push("/browse");
    window.addEventListener('scroll', this.handleScroll);
    axios('https://api.themoviedb.org/3/discover/movie?region=TR&api_key=c667b178831c1113537d09a0da92888f').then((res) => {
      this.items = res.data.results;
    })
  },

  mounted() {
    /* $(window).click(function () {
      //Hide the menus if visible
    });

    $('#modal').click(function (event) {
      alert('xd')
      event.stopPropagation();
    }); */
  },


  methods: {
    next() {
      const item = this.items.shift()
      this.items.push(item)

    },
    prev() {
      const item = this.items.pop()
      this.items.unshift(item)

    },

    genelTiklama() {
      return this.modal ? true : false;

    },
    openModal(event, data) {
      if (!this.genelTiklama()) {
        this.modal = true;
        this.modalData = data;
      }


    },

    handleScroll() {
      this.scrollPosition = window.scrollY;
    }



  }
};
</script>

<style>
.modal {
  position: fixed;
  left: 0;
  bottom: 0px;
  right: 0;
  top: 30px;
  margin: auto;
  background: #141414;
  border: 1px solid black;
  width: 50vw;
  height: 100%;
  border-radius: 15px;
  z-index: 2;
  transition: width 2.5s, height 2.5s;
}
.modal:first-child {
  width: 50vw;
  height: 70%;
}
#close {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 15px;
  width: 40px;
  opacity: 0.9;
  cursor: pointer;
  background: #141414;
  border-radius: 50px;
  color: white;
  font-size: 20px;
  padding: 5px;
}

.modal-buttons {
  position: relative;
  left: 30px;
  bottom: 120px;
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-button-1 {
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}
.genel {
  min-height: 1000px;
}
</style>
