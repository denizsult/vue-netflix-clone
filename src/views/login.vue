<template>
    <div class="log-bg">
        <img src="../assets/images/login-bg.jpg" class="bg" alt="bg" />
    </div>

    <img src="../assets/logo.png" class="logo2" alt />

    <div class="form-center">
        <div class="box">
            <h1 class="title">Oturum Aç</h1>
            <div class="form">
                <form @submit.prevent="giris">
                    <div v-show="axErrpass || axErrname" class="error">
                        <div class="error-text">
                            <p v-show="axErrpass">
                                <b>Parola yanlış.</b> Lütfen yeniden deneyin ya da
                                <a
                                    href="#"
                                    style="color:white"
                                >parolanızı sıfırlayın.</a>
                            </p>

                            <p v-show="axE">
                                Bu e‑posta adresi ile bağlantılı bir hesap bulamadık. Lütfen yeniden deneyin ya da
                                <a
                                    href="#"
                                    style="color:white"
                                >yeni bir hesap oluşturun.</a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <input
                            class="input"
                            placeholder="E-posta veya telefon numarası"
                            type="text"
                            v-model="username"
                            @input="nameErr = false"
                            :style="[nameErr ? { borderBottomColor: '#e87c03' } : '']"
                        />
                        <div class="valid">
                            <small
                                v-show="nameErr"
                            >Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.</small>
                        </div>
                    </div>

                    <div>
                        <input
                            class="input"
                            type="password"
                            v-model="password"
                            @input="passErr = false"
                            placeholder="Parola"
                            :style="[passErr ? { borderBottomColor: '#e87c03' } : '']"
                        />
                        <div class="valid">
                            <small v-show="passErr">Parolanız 4 ila 60 karakter olmalıdır.</small>
                        </div>
                    </div>

                    <button type="submit" class="log-btn">Oturum Aç</button>
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
                        <span style="color: white;">Şimdi kaydolun.</span>
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
</template>
<script>
export default {
    data() {
        return {
            username: "admin",
            password: "admin",
            nameErr: false,
            passErr: false,
            axErrpass: false,
            axErrname: false,




        };
    },
    methods: {
        giris() {
            this.username == 'admin' ? this.nameErr = false : this.nameErr = true;
            this.password == 'admin' ? this.passErr = false : this.passErr = true;

            if (this.username == false && this.password == false) {
                /*  axios.post('/login', {
                     username: this.username,
                     password: this.password
                 }).then(response => {
                     if(response.data.status == 'success') {
                         this.$router.push('/');
                     }
                 }).catch(error => {
                         
                         
 
 
 
                 }); */
            }

        }
    }
}

</script>

<style>
.text-kay {
    font-size: 17px;
    color: grey;
    text-align: left;
    padding-top: 0;
}
.valid {
    display: relative;
    color: #e87c03;
    margin-bottom: 6px;
    margin-top: -6px !important;
}
.facebook {
    color: grey;
    font-size: 1.2rem;
    font-weight: 500;
    height: 30px;
    align-items: center;
    display: flex;
    width: 100%;
    margin-top: 17px;
}

input[type="checkbox"] {
    height: 16px;
    left: -20px;
    width: 16px;
}

.logo2 {
    width: 200px;
    position: fixed;
    left: 60px;
    top: 20px;
    opacity: 1 !important;
}
.input-down {
    font-size: 15px;
    padding-top: 1rem;
}
.row-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: grey;
}
.bg {
    min-width: 100%;
    height: 100vh;
    background-position: 50%;
}
.log-bg {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0.4;
}
.title {
    font-size: 2.2rem;
    color: white;
    font-weight: 700;
    margin-bottom: 2.5rem;
}

.form-center {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 3%;
    margin: auto;
    border-radius: 5px;
    width: 500px;
    height: 850px;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
}
.log-btn {
    background-color: #e50914;
    color: white;
    font-size: 20px;
    cursor: pointer !important;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 50px;
    margin-top: 1rem;
}
.input {
    position: relative;
    width: 89%;
    border-radius: 0.25rem;
    background: #333;
    border: 2px solid #333;
    color: #fff;
    font-size: 1rem;
    padding: 1rem 1.25rem;
    margin-bottom: 15px;
    height: 1.5rem;
    outline: none;
}

.input:focus {
    background: #fff;
    color: #000;
}
.input::placeholder {
    color: #fff;
}

.box {
    display: flex;
    flex-direction: column;
    width: 350px;

    padding: 3rem 4.25rem 2rem;
}
.error {
    background: #e87c03;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin: 0 0 16px;
}
.error-text {
    color: #fff;
    font-size: 14px;
    padding: 1px 20px;
    font-size: 15px;
}

@media (max-width: 700px) {
    .title {
        margin-bottom: 1rem;
    }
    .form-center {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding-top: 60px;
        padding-left: 15px;
        background-color: rgba(0, 0, 0, 1);
    }
    .form {
        width: 100%;
    }
    .box {
        width: 100%;
        padding: 30px 35px 30px 10px;
    }
    .logo2 {
        width: 200px;
        position: fixed;
        z-index: 1;
        left: 20px;
        top: 20px;
        opacity: 1 !important;
    }
    .bg{
        display: none;
    }
}
</style>