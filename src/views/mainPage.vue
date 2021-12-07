<template>
  <div
    :style="{
      background: scrollPosition > 50 ? 'black !important' : 'transparent', transition: 'background 0.5s',
      opacity: modal ? 0.5 : 1,
    }"
    class="navbar-pinned"
    id="navbar-pinned"
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
                <div style="height:100px">
                  <li v-for="item in profiles" :key="item.id" class="menu-item">
                    <img src="../assets/images/luci.png" alt />
                    {{ item.name }}
                  </li>
                </div>
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
                  <li @click="logout" class="menu-item-2">Oturumu Kapat</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    @click="genelTiklama"
    :style="modal ? { opacity: 0.1 } : { opacity: 1 }"
    id="genel"
    class="genel"
  >
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
          <img width="70" src="http://simpleicon.com/wp-content/uploads/play1.svg" alt /> Oynat
        </button>
        <button class="billboard-button-2">
          <img width="30" src="../assets/images/info.png" alt />
          &nbsp; Daha Fazla Bilgi
        </button>
      </div>
    </div>

    <div class="slide">
      <h3 class="slide-head">Tanıdık Filmler</h3>

      <div ref="inner " :style="innerStyles" class="inner">
        <div v-for="(item) in items" :key="item.id" class="card">
          <img :src="'http://image.tmdb.org/t/p/w780/' + item.backdrop_path" />
          <div class="infoWindow">
            <div class="item-card">
              <div>
                <p id="itemTitle">{{ item.title }}</p>

                <a id="listeEkle">Listeme Ekle</a>

                <img
                  @click="openModal($event, item)"
                  width="30"
                  style="padding-left:40px"
                  src="../assets/images/info.png"
                  alt
                />
              </div>

              <small>
                Rank:
                <span style="color:green">{{ item.vote_average }}</span>
              </small>
            </div>
          </div>
        </div>

        <div class="slider-buttons">
          <img @click="prev" class="btn-left" src="../assets/images/left.png" alt />

          <div @click="next" class="btn-right">
            <img src="../assets/images/right.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <div v-for="slide in slides" :key="slide.id" :style="innerStyles" class="section-2-inner">
        <h3 class="section-2-head">{{ slide.title }}</h3>
        <div v-for="(item) in items" :key="item.id" class="card">
          <img :src="'http://image.tmdb.org/t/p/w780/' + item.backdrop_path" />
          <div class="infoWindow">
            <div class="item-card">
              <div>
                <p id="itemTitle">{{ item.title }}</p>

                <a id="listeEkle">Listeme Ekle</a>

                <img
                  @click="openModal($event, item)"
                  width="30"
                  style="padding-left:40px"
                  src="../assets/images/info.png"
                  alt
                />
              </div>

              <small>
                Rank:
                <span style="color:green">{{ item.vote_average }}</span>
              </small>
            </div>
          </div>
        </div>

        <div class="section-2-buttons">
          <img @click="prev" class="section-2-btn-left" src="../assets/images/left.png" alt />

          <img @click="next" class="section-2-btn-right" src="../assets/images/right.png" alt />
        </div>
      </div>
    </div>
  </div>

  <div :class="modal ? 'modal-responsive' : ''">
    <div v-if="modal" class="modal animate__animated animate__zoomIn">
      <img style="width: 100%;" :src="'http://image.tmdb.org/t/p/w780/' + modalData.backdrop_path" />

      <button @click="closeModal" id="close">X</button>
      <div id="modal-shadow"></div>

      <div class="modal-capital">
        <h1>{{ modalData.title }}</h1>
      </div>
      <div class="modal-buttons">
        <a class="modal-button-1">
          <img width="62" src="http://simpleicon.com/wp-content/uploads/play1.svg" alt /> Oynat
        </a>
        <a class="modal-button-2">
          <img width="40" src="../assets/images/plus.png" alt />
        </a>
        <a class="modal-button-2">
          <img width="40" src="../assets/images/like.png" alt />
        </a>
        <a class="modal-button-2">
          <img width="40" src="../assets/images/dislike.png" alt />
        </a>
      </div>
      <div class="modal-content-2">
        <h3>
          Puan:
          <span style="color:green">{{ modalData.vote_average }}</span> İzlenme:
          <span style="color:green">{{ modalData.popularity }}</span>
        </h3>

        <p>{{ modalData.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>


import router from "../router";
import axios from 'axios'
import 'animate.css';

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

      },

      slides:
      {
        slide1: {
          id: 1,
          title: "Slide 1"

        },
        slide2: {
          id: 2,
          title: "Slide 2",
        },
        slide3: {
          id: 3,
          title: "Slide 3",
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

    document.title = 'Ana Sayfa - Metflix'

  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.profiles.Profil1.name = this.user.name;
    /* $(window).click(function () {       //Hide the menus if visible     });
    $('#modal').click(function (event) {       alert('xd')       event.stopPropagation();     }); */
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
    closeModal() {
      this.modal = false;
      document.title = 'Ana Sayfa - Metflix'
      let body = document.getElementById('genel');
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.overflowY = 'auto';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    },


    openModal(event, data) {
      if (!this.genelTiklama()) {
        this.modal = true;
        this.modalData = data;
        document.title = data.title + ' - Metflix';
        let body = document.getElementById('genel');
        body.style.top = `-${window.scrollY}px`;
        body.style.position = 'fixed';
        body.style.overflowY = 'hidden';
        body.style.overflowX = 'hidden';

      }

    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
    logout() {
      localStorage.setItem('isLoggedIn', 'false'),
        this.$router.push('/login')
    }


  }
};
</script>
<style>
</style>

 
