<template>
    <div class="stop">
        <div class="log-bg">
            <img src="../assets/images/login-bg.jpg" class="bg" alt="bg" />
        </div>

        <img src="../assets/logo.png" class="logo2" alt />

        <div class="form-center">
            <div class="box">
                <h1 class="title">Kayıt Ol</h1>
                <div class="form">
                    <form @submit.prevent="giris">
                        <div v-show="error" class="error">
                            <div class="error-text">
                                <p>{{ errorText }}</p>
                            </div>
                        </div>

                        <div>
                            <input
                                class="input"
                                placeholder="Adınız"
                                type="text"
                                v-model="name"
                                @input="nameErr = false"
                                :style="[nameErr ? { borderBottomColor: '#e87c03' } : '']"
                            />
                            <div class="valid">
                                <small v-show="nameErr">İsim Alanı Zorunludur.</small>
                            </div>
                        </div>

                        <div>
                            <input
                                class="input"
                                placeholder="E-posta veya telefon numarası"
                                type="text"
                                v-model="email"
                                @input="emailErr = false"
                                :style="[emailErr ? { borderBottomColor: '#e87c03' } : '']"
                            />
                            <div class="valid">
                                <small v-show="emailErr">E-Posta Alanı Zorunludur.</small>
                            </div>
                        </div>

                        <div style="height:100px">
                            <input
                                class="input"
                                :type="type ? 'password' : 'text'"
                                                                maxlength="25"

                                v-model="password"
                                @input="passErr = false"
                                placeholder="Parola"
                                :style="[passErr ? { borderBottomColor: '#e87c03' } : '']"
                            />
                            <div class="valid">
                                <small v-show="passErr">Parola Alanı Zorunludur.</small>
                            </div>
                            <div
                                @click="type = !type"
                                class="passShow"
                            >{{ type ? 'Göster' : 'Gizle' }}</div>
                        </div>

                        <button type="submit" class="log-btn">
                            <div v-if="!spin">Kayıt Ol</div>
                            <div class="loader" v-else></div>
                        </button>
                    </form>
                    <div class="row-form">
                        <div class="input-down"></div>
                        <span class="input-down">Yardım ister misiniz?</span>
                    </div>

                    <div class="facebook">
                        <img src="../assets/images/facebook.png" width="23" height="27" alt />
                        <h6 style="padding-left:10px">Facebook ile Oturum Aç</h6>
                    </div>

                    <div class="text-kay">
                        <p>
                            Netflix'e hesabın var mı?
                            <router-link to="/login">
                                <span style="color: white;">Giriş Yap</span>
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
            name: '',
            email: "",
            password: "",
            nameErr: false,
            emailErr: false,
            passErr: false,
            spin: false,
            errorText: "",
            error: false,
            axErrpass: false,
            axErremail: false,
            type: true,

        };
    },
    methods: {
        giris() {


            this.name == "" ? this.nameErr = true : this.nameErr = false;
            this.email == "" ? this.emailErr = true : this.emailErr = false;
            this.password == "" ? this.passErr = true : this.passErr = false;
            this.email == "" || this.password == "" || this.name == "" ? this.spin = false : this.spin = true;



            if (this.email != "" && this.password != "" && this.spin) {
                this.$http.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password

                }).then(response => {
                    if (response.status == 201) {
                        this.$router.push('/login?status=basarili');
                    }
                }).catch(error => {
                    this.error = true;
                    this.spin = false;
                    this.errorText = error.response.data;
                    setTimeout(() => {
                        this.error = false;


                    }, 1500);
                });

            }

        },



    }
}


</script>

 