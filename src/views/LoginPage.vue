<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Options, Vue } from 'vue-class-component';-->
<!--import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src-->

<!--@Options({-->
<!--  components: {-->
<!--    HelloWorld,-->
<!--  },-->
<!--})-->
<!--export default class HomeView extends Vue {}-->
<!--</script>-->
<template>
  <div class="home">
    <div class="mainWrapper">

      <div>
        <img src="@/assets/images/IU_Image.jpg" alt="UniversityImage" />
      </div>

      <div class="login-form-wrapper">
        <div class="login-form">
          <img src="@/assets/images/IU_Logo.jpg" alt="Logo" />

          <div class="inputWithLabel">
            <div>Login</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Login">
              <div class="input-control">
                <div><img class="input-controll-ico" src="@/assets/icons/eye_default.png" alt="eye"></div>
                <div><img class="input-controll-ico"  src="@/assets/icons/delete_cancel.png" alt="eye"></div>
              </div>
            </div>
          </div>

          <div class="inputWithLabel">
            <div>Password</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Password">
              <div class="input-control">
                <div><img class="input-controll-ico" src="@/assets/icons/eye_close.png" alt="eye"></div>
                <div><img class="input-controll-ico"  src="@/assets/icons/delete_cancel.png" alt="eye"></div>
              </div>
            </div>
          </div>

          <div class="notes">
            If you do not have access to the system, please contact the Department of Education for assistance with obtaining login credentials.
          </div>
          <Button :label="'Login'" v-on:click="redirectToAddCourse"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import router from '@/router';
export let isLoggedIn = false;

export default {
  name: "LoginView",
  components: { Button },
  methods:{
    redirectToAddCourse(){
      isLoggedIn = true;
      router.push({ path: '/addcourse'})
    }
  },
  setup() {
    function login() {
      console.log('login')
    }

    return {
      login,
    }
  }
};
</script>
<style scoped>

.input-controll-ico:hover {
  filter: saturate(4);
  cursor: pointer;
}
.input-control{
  display: flex;
  align-items: center;
  margin-left: -65px;
  gap: 4px
}
.input-wrapper {
  display: flex;
}
.input-wrapper button {
  margin-left: -40px;
}
.notes {
  font-size: 12px;
  margin-top: 49px;
  margin-bottom: 49px;
}
.login-form {
  width: 460px;
}
.inputWithLabel{
  text-align: left;
  font-size: 14px;
  margin-top: 48.75px;
}
.input-field {
  border-radius: 10px;
  border: 1px solid #CBD3DC;
  width: 95%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
}
.input-field:focus {
  outline: none !important;
  border: 1px solid #FF8838;
}
.mainWrapper {
  max-width: 1440px;
  display: flex;
  justify-content: center;
}
.login-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>

