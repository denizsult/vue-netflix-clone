<template>
    <div class="stop">
        <div class="log-bg">
            <img src="../assets/images/login-bg.jpg" class="bg" alt="bg" />
        </div>

        <img src="../assets/logo.png" class="logo2" alt />

        <div class="form-center">
            <div class="box">
                <h1 class="title">Oturum Aç</h1>
                <div class="form">
                    <form @submit.prevent="giris">
                        <div v-show="error" class="error">
                            <div class="info-text">
                                <p style="font-size:17px; font-weight:500">{{ errorText }}</p>
                            </div>
                        </div>

                        <div v-show="success" class="success">
                            <div class="info-text">
                                <p style="font-size:16px; font-weight:500">{{ successText }}</p>
                            </div>
                        </div>

                        <div>
                            <input
                                class="input"
                                placeholder="E-posta veya telefon numarası"
                                type="text"
                                v-model="email"
                                @focus="error = false, success = false"
                                @input="emailErr = false"
                                :style="[emailErr ? { borderBottomColor: '#e87c03' } : '']"
                            />
                            <div class="valid">
                                <small
                                    v-show="emailErr"
                                >Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.</small>
                            </div>
                        </div>

                        <div  style="height:100px">
                            <input
                                class="input"
                                :type="type ? 'password' : 'text'"
                                v-model="password"
                                maxlength="25"
                                @input="passErr = false"
                                placeholder="Parola"
                                :style="[passErr ? { borderBottomColor: '#e87c03' } : '']"
                            />
                             <div class="valid">
                                <small v-show="passErr">Parolanız 4 ila 20 karakter olmalıdır.</small>
                            </div>
                            <div
                                @click="type = !type"
                                class="passShow"
                            >{{ type ? 'Göster' : 'Gizle' }}</div>
                           
                        </div>

                        <button type="submit" class="log-btn">
                            <span v-if="spin == false">Oturum Aç</span>
                            <div class="loader" v-else></div>
                        </button>
                    </form>
                    <div class="row-form">
                        <div class="input-down">
                            <input style="background:#737373" type="checkbox" name id />
                            <label>Beni hatırla</label>
                        </div>
                        <span class="input-down">Yardım ister misiniz?</span>
                    </div>

                    <div class="facebook">
                        <img src="../assets/images/facebook.png" width="23" height="27" alt />
                        <h6 style="padding-left:10px">Facebook ile Oturum Aç</h6>
                    </div>

                    <div class="text-kay">
                        <p>
                            Netflix'e katılmak ister misiniz?
                            <router-link to="/register">
                                <span style="color: white;">Şimdi Kayıt Ol</span>
                            </router-link>
                            <br />
                            <br />Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.
                            <a
                                href="#"
                                style="font-size: 14px; text-decoration: none; color:#0071eb"
                            >Daha fazlasını öğrenin.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            email: "demo",
            password: "demo",
            emailErr: false,
            passErr: false,
            errorText: "Girdiğiniz Bilgiler Hatalı!",
            successText: "🍿 Kayıt Başarılı! Giriş Yapabilirsiniz 🍿",
            error: false,
            success: false,
            spin: false,
            type: true,


        };
    },

    mounted() {
        this.$route.query.status == "basarili" ? this.success = true : this.success = false;
    },
    methods: {
        giris() {

            this.spin = !this.spin;
            this.email == "" ? this.emailErr = true : this.emailErr = false;
            this.password == "" ? this.passErr = true : this.passErr = false;
            this.email == "" || this.password == "" ? this.spin = false : this.spin = true;



            if (this.email != "" && this.password != "" && this.spin) {
                
                if(this.email == 'demo' && this.password  =='demo'){
                    let data = {
                        email: this.email,
                        name: 'Demo',
                        
                     }

                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('user', JSON.stringify(data));
                    this.$router.push('/browse');


                }else{
                     this.$http.post('/login', {
                    email: this.email,
                    password: this.password
                }).then((response) => {

                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('user', JSON.stringify(response.data));
                    this.$router.push('/browse');

                }).catch(error => {

                    if (error.response.status == 400) {
                        this.error = true;
                        this.spin = false;
                        setTimeout(() => {
                            this.error = false;


                        }, 1500);
                    }
                });
                }


            }

        },


    }
}

</script>
 