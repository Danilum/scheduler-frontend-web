<template>
  <div class="home">
    <div class="course-page-wrapper">
      

          <div class="flex-page-container">
          <div>
            <div class="admin-logout-container">
              <div class="admin-logout-wrapper">
                <div class="admin-logo-image">
                  <img src="@/assets/images/admin_avatar.png" alt="admin avatar">
                </div>
                <div>
                  <div>
                  Admin
                  </div>
                  <div>
                    <Button :label="'Logout'" :hasImg="true"/>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="page-label-text">
                Add course page
                <img src="@/assets/icons/line_under_PageLabel.png" alt="rectangle_line" >
              </div>

              <div class="inputWithLabel">
                <div>Course Name</div>
                <div class="input-wrapper">
                  <input type="text" class="input-field" placeholder="Course Name">
                </div>
              </div>

              <div class="inputWithLabel">
                <div>Professor</div>
                <div class="input-wrapper">
                  <input type="text" class="input-field" placeholder="Professor">
                </div>
              </div>

              <div class="inputWithLabel">
                <div>Room number</div>
                <div class="input-wrapper">
                  <input type="text" class="input-field" placeholder="Room number">
                </div>
              </div>
              
              <div class="inputWithLabel">
                <div>Additional Lecturer</div>
                <div class="input-wrapper">
                  <input type="text" class="input-field" placeholder="Additional Lecturer">
                </div>
              </div>

              <div id="group1" class="radio-online-offline">
                <div class="form_radio">
                  <input id="radio-online-1" type="radio" name="radio" value="1" checked>
                  <label for="radio-online-1">Online course</label>
                </div>
    
                <div class="form_radio">
                  <input id="radio-online-2" type="radio" name="radio" value="2">
                  <label for="radio-online-2">Offline course</label>
                </div>
              </div>

              <div class="text-for-whom-course"> 
                For whom is this course:
              </div>

              <div id="group2" class="radio-for-whom-block">

                <div class="form_radio">
                  <input id="radio-whom-1" type="radio" name="radio1" value="1" checked>
                  <label for="radio-whom-1">BS_1</label>
                </div>
    
                <div class="form_radio">
                  <input id="radio-whom-2" type="radio" name="radio1" value="2">
                  <label for="radio-whom-2">BS_2</label>
                </div>

                <div class="form_radio">
                  <input id="radio-whom-3" type="radio" name="radio1" value="3">
                  <label for="radio-whom-3">BS_3</label>
                </div>

                <div class="form_radio">
                  <input id="radio-whom-4" type="radio" name="radio1" value="4">
                  <label for="radio-whom-4">BS_4</label>
                </div>

                <div class="form_radio">
                  <input id="radio-whom-5" type="radio" name="radio1" value="5">
                  <label for="radio-whom-5">MS_1</label>
                </div>

                <div class="form_radio">
                  <input id="radio-whom-6" type="radio" name="radio1" value="6">
                  <label for="radio-whom-6">MS_2</label>
                </div>
              </div>
              
              <div class="text-form-of-course">
                Form of this course:
              </div>

              <div id="group3" class="radio-form-of-course">

                <div class="form_radio">
                  <input id="radio-form-1" type="radio" name="radio2" value="1" checked>
                  <label for="radio-form-1">Block_1</label>
                </div>
    
                <div class="form_radio">
                  <input id="radio-form-2" type="radio" name="radio2" value="2">
                  <label for="radio-form-2">Block_2</label>
                </div>

                <div class="form_radio">
                  <input id="radio-form-3" type="radio" name="radio2" value="3">
                  <label for="radio-form-3">Full Semester</label>
                </div>

              </div>
            </div>
        </div>

        <div class="button-primary">
          Add new
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

.logout-admin-layout-container{
  display: block;
}

.button-primary:hover {
  background: #ff8838d5;
}

.flex-page-container{
  display: flex;
  /* justify-content: start; */
  align-items: start;
  flex-direction: column;
}

.button-primary{
  background: #FF8838;
  border-radius: 16px;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 50px;
}

.text-form-of-course{
  display: flex;
  margin-left: 50px;
}

.radio-form-of-course{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.text-for-whom-course{
  display: flex;
  margin-left: 50px;

}
.radio-for-whom-block{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.radio-online-offline{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.form_radio {
	margin-bottom: 30px;
}
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

.choose-element-class-online-offline{
  display: flex;

}

.input-wrapper {
  display: flex;
}
.input-wrapper button {
  margin-left: -40px;
}

.inputWithLabel{
  text-align: left;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 50px;
  padding: 8px 0px 16px;
}
.input-field {
  border-radius: 10px;
  border: 1px solid #CBD3DC; 
  width: 35%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
}
.input-field:focus {
  outline: none !important;
  border: 1px solid #FF8838; 
}

.page-label-text{
  left: 42px;
  color: var(--dl-color-light_surface-primary);
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 13px;
  margin-left: 50px;
}

.admin-logo-image{
  /* padding-left: 980px;
  padding-top: 13px;
  padding-right: 50px;
  padding-bottom: 13px; */
}

.admin-logout-wrapper{
  /* width: 1188px;
  height: 84px; */
  display: flex;
  align-items: center;
  gap: 15px
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
  margin-left: 25;
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
}

.bg-grey {
    background-color: #f6f6f6;
  }
  .logo-small {
    color: #f4511e;
    font-size: 50px;
  }
  .logo {
    color: #f4511e;
    font-size: 200px;
  }
  .thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
  }
  .thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .carousel-control.right, .carousel-control.left {
    background-image: none;
    color: #f4511e;
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
  .panel {
    border: 1px solid #f4511e; 
    border-radius:0 !important;
    transition: box-shadow 0.5s;
  }
  .panel:hover {
    box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
    border: 1px solid #f4511e;
    background-color: #fff !important;
    color: #f4511e;
  }
  .panel-heading {
    color: #fff !important;
    background-color: #f4511e !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .panel-footer {
    background-color: white !important;
  }
  .panel-footer h3 {
    font-size: 32px;
  }
  .panel-footer h4 {
    color: #aaa;
    font-size: 14px;
  }
.admin-logout-container {
  display: flex;
  align-items: end;
  flex-direction: column;

}
</style>
