<template>
  <div class="home">
    <div class="course-page-wrapper">

      <div class="menus">
        <div class="iu-logo-on-menu-page" id="iu_logo">
          <img src="@/assets/icons/IU_logo.png" alt="UniversityImage" v-on:click="redirectToLogin"/>
        </div>

        <div class="menu-buttons">
          <div class="add-course-button" v-on:click="redirectToAddCourse">
            <img src="@/assets/icons/add_course.png" alt="Add logo" class="menu-icon">
            Add new course
          </div>

          <div class="list-of-courses-button" v-on:click="redirectToListOfCourses">
            <img src="@/assets/icons/courses_list.png" alt="Add logo" class="menu-icon">
            List of courses
          </div>

          <div class="generator-button" v-on:click="redirectToGenerator">
            <img src="@/assets/icons/timetable_generator.png" alt="Add logo" class="menu-icon">
            Timetable
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import router from '@/router';

export default {
  name: "HomeView",
  components: { Button },
  methods:{
    redirectToLogin(){
      router.push({path: '../'})
    },
    redirectToAddCourse(){
      router.push({ path: '../addcourse'})
    },
    redirectToListOfCourses(){
      router.push({ path: '../listofcourses'})
    },
    redirectToGenerator(){
      router.push({ path: '../generator'})
    },
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


.form_radio input[type=radio] {
  display: none;
}
.form_radio label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.form_radio label:before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background: url(@/assets/icons/radio_before.png) 0 0 no-repeat;
}

/* Checked */
.form_radio input[type=radio]:checked + label:before {
  background: url(@/assets/icons/radio_after.png) 0 0 no-repeat;
}

/* Hover */
.form_radio label:hover:before {
  filter: brightness(120%);
}

/* Disabled */
.form_radio input[type=radio]:disabled + label:before {
  filter: grayscale(100%);
}

.input-wrapper button {
  margin-left: -40px;
}

.generator-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.list-of-courses-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-course-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.iu-logo-on-menu-page{
  margin-top: 22px;
  margin-right: 53px;
  margin-bottom: 23px;
  margin-left: 25px;
}

.menu-icon{
  margin-right: 10px;
}

.menu-buttons{
  font-size: 14px;
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.menus{
  background-color: rgb(234, 235, 232);
  display: block;
  width: 252px;
}

.course-page-wrapper {
  max-width: 1440px;
  display: flex;
  height: 100vh;
  /*position: fixed;*/
}


.thumbnail img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

.carousel-indicators li {
  border-color: #f4511e;
}
.carousel-indicators li.active {
  background-color: #f4511e;
}
.item h4 {
  font-size: 19px;
  line-height: 1.375em;
  font-weight: 400;
  font-style: italic;
  margin: 70px 0;
}
.item span {
  font-style: normal;
}

.panel-footer .btn:hover {
  border: 1px solid #f4511e;
  background-color: #fff !important;
  color: #f4511e;
}

.panel-footer h3 {
  font-size: 32px;
}
.panel-footer h4 {
  color: #aaa;
  font-size: 14px;
}

</style>
