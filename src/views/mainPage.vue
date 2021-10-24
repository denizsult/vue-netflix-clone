<template>
  <div :style="{ background: scrollPosition > 50 ? 'black' : 'transparent' }" class="navbar-pinned">
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
          <img width="10"  id="drop" src="../assets/images/drop.png" alt />

          <div class="profile-nav-menu">
            <img src="../assets/images/drop.png" alt />
            <div class="menu">
              <ul>
                <li v-for="item in profiles" :key="item.id" class="menu-item">
                  <img src="../assets/images/luci.png" alt />
                  {{ item.name }}
                </li>
                <li class="menu-item">Profil Yönetimi</li>
                <hr style="color:lightgrey; width:100%; opacity:0.5">
                <ul class="menu-ul-2" >
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
  <div style="min-height: 1000px;
">
    <div class="billboard">
      <img
        class="billboard-img"
        src="https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABddNpkL7NpQVUS90gDAV_LqoPV3PrHMkm0RCo7NS_d-1PN0ndT7cl0qUmRe6-uiIeak9bquU9chofjMuo2t5I7QMcbPE.webp?r=91b"
        alt
      />

      <div class="billboard-content">
        <img
          src="https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABScnUzARFTcFjueKo9wSaeZrIGXQoGZqWY34-hqzo5wDdqr8OK7DVseN1MQURFb6MolMdfS0ux35ajFZFTEAbmAr29g50-8DFs7R.webp?r=473"
          alt
        />
      </div>
      <div class="billboard-content-2">
        <h1>"Hellblazer" adlı çizgi romandan uyarlanan bu gerilimde, doğaüstü güçlere meraklı bir özel dedektif intihar gibi görünen bir ölümü soruşturur.</h1>
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
        <div v-for="(item) in items" :key="item.id" class="card">
          <img :src="item" alt />
          <div class="item-card">xd</div>
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
        <img :src="item" alt />
        <div class="item-card">xd</div>
      </div>
    </div>

    <div @click="next" class="btn-right">
      <img width="50" src="../assets/images/right.png" alt />
    </div>
  </div>
</template>

<script>


import router from "../router";
export default {

  data() {
    return {
      user: "",
      items: [
        "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3", "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHYugp3DyICv0mSqxPNR7BhU00EkSGf9iThuAdwRmD0QjxDm2xya6QJ39bKsPlbCuAsENubFp3AD_Qr1d0X5ob4-E4.webp?r=6c3",



        "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUyHp5bSzxxXfSYAt4cT7hfEvXOXuPc5sVyF38hpsPWOaYmD2L2LkbwEfWPdPK_0t-cnwHyhdbIZ6I3MWGe5_DNgCIOWa61atWkb9ytkb2JF5Gfj8seSC0GChwiY.jpg?r=4aa",



        "https://occ-0-778-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABddF0BrAeA9HlQ5-WNdFvLp8UJxsVgAjyfFLA4QEXSedfKUlmcZeX5R7vGDby-1RPs78W31NrtftSI4olgRffv1HPKw.webp?r=cd8",
      ],

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
      scrollPosition: 0,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user != null ? true : router.push("/browse");
    window.addEventListener('scroll', this.handleScroll);

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

    handleScroll() {

      this.scrollPosition = window.scrollY;

    }



  }
};
</script>

<style>
.navbar-pinned {
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-1 {
  display: flex;
  align-content: center;
  justify-content: center;
}
.nav-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-logo {
  width: 100px;
  padding-top: 13px;
  margin-right: 25px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
}

.navbar-menu-item {
  padding-left: 15px;
    font-weight: 100;
  font-size: 16px;

}

.billboard {
  position: relative;
  min-height: 1000px;
  z-index: 0;
}

.billboard-img {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 90vh;
  opacity: 0.7;
}
.billboard-content {
  position: absolute;
  top: 18%;
  left: 5%;
}
.billboard-content-2 {
  position: absolute;
  top: 45%;
  left: 5%;
  color: #fff;
  font-weight: 200;
  line-height: normal;
  width: 30%;
  font-size: 0.9rem;
  height: 200px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-top: 0.1vw;
}
.billboard-buttons {
  position: absolute;
  display: flex;
  align-content: center;
  top: 68%;
  left: 5%;
  height: 70px;
  width: 500px;
}

.billboard-button-1 {
  background-color: rgb(255, 255, 255);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1.5rem;
  width: 40%;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
}
.billboard-button-2 {
  background-color: rgba(109, 109, 110, 0.7);
  font-size: 1.5rem;
  width: 60%;
  font-weight: 600;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.billboard-button-1:hover {
  background-color: rgb(255, 255, 255, 0.9);
}
.billboard-button-2:hover {
  background-color: rgba(109, 109, 110, 0.5);
}
.slide {
  position: relative;
  top: -100px;
  left: -30px;
  width: 2144px;
  height: 250px;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 150px;
}
.slide-2 {
  position: relative;
  top: -100px;
  left: 5%;
  width: 2008px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.slide:hover > .btn-left,
.btn-right {
  display: block !important;
}

.card {
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 0;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card > img {
  width: 345px;
  border: 3px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: width 0.5s, height 0.5s;
}
.card:hover > img {
  width: 400px;
}
.card:hover > .item-card {
  display: block;
}

.item-card {
  background: rgb(rgb(20, 20, 20), green, blue);
  display: flex;
  width: 250px;
  display: none;
}

.slide-head {
  position: absolute;
  top: -30px;
  font-size: 25px;
  left: 50px;
  color: white;
}

.btn-left {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}

.btn-right {
  position: absolute;
  top: 50%;
  left: 96.5%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}

.nav-2 > div {
  margin-right: 25px;
}

.profile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.nav-2-img {
  width: 35px;
  border-radius: 5px;
  margin-right: 10px;
}

.profile-nav:hover > .profile-nav-menu {
  display: block;
 
}
.profile-nav:hover > #drop{
    transform: rotate(180deg);
}
.profile-nav-menu {
  position: absolute;
  top: 60px;
  right: 78px;
  display: none;
}
.menu {
  background: rgb(22, 22, 22);
  width: 170px;
  height: 370px;
  border: 0.5px solid grey;
  
}
.profile-nav-menu > img {
  position: relative;
  width: 13px;
  top: 5px;
  left: 132px;
  transform: rotate(180deg);
}
.menu-ul-2{
  list-style: none;
  padding: 0 10px;
}
.menu-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.menu-item-2 {
  padding-bottom: 7px;
 
  cursor: pointer;
}
.menu-item > img {
  width: 30px;
  margin-right: 10px;
  border-radius: 5px;
}
.menu > ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  align-items: flex-start;
  padding: 0;
}
.menu > h5 {
  font-weight: 400;
  margin: 0;
}
</style>
