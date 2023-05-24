<script>
import {ref} from "vue";
import {timeTable, getSchedule} from "@/views/timetable/feature-api";
import LeftBar from "@/components/LeftBar.vue";
import Button from "@/components/Button.vue";
import ScheduleVue from "./ui/Schedule.vue"
export default {
  name: "CoursesList",
  components: {Button,ScheduleVue, LeftBar},
  setup() {

  }

}


</script>

<template>
  <div class="flex h-full">
    <LeftBar class="h-full" />

    <div>
      <div class="col-sm-9">
        <form role="form">
          <div class="form-group">
            <span class="generator-text16">List of All Courses</span>
            <img src="data:image/png;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQBgCdASr/AwEAPm02mUmCCIAIANiWlu4XSQAE9tiLxBUc9sReIKjntiLxBUc9sReIKjntiLxBNgAA/v8eSAAAAAA=" alt="Rectangle5111196" class="generator-rectangle511" data-v-bdec7dd4="">
          </div>
        </form>
      </div>
    </div>



  </div>
</template>