<script lang="ts">
import {PropType, ref} from "vue";
import {DayOfWeeks, Schedule} from "@/views/timetable/feature-rules";

export default {
  name: "Schedule",
  props: {
    schedule: {
      type: Object as PropType<Schedule[]>,
      required: true,
    }
  },
  setup() {
    const days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return {
      days
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full bg-time-slot ">
    <div class="flex flex-row">
      <div v-for="day in days" class="flex flex-row w-36 h-28 items-center">
        <div class="w-[1px] h-full bg-time-slot-divider">
        </div>
        <p class="w-full text-body  font-bold">{{ day }}</p>
      </div>
    </div>
    <!-- Divider -->
    <div class="w-full h-[1px] bg-time-slot-divider">

    </div>
    <div v-for="daySlot in schedule">
      <!-- Day row cell -->
      <div class="flex flex-row items-center">
        <p class="w-36 text-body  font-bold"> {{ daySlot.time }}</p>
        <!-- Time cell -->
        <div v-for="slot in daySlot.slots" class="flex flex-row w-36 h-28">
          <div class="w-[1px] h-full bg-time-slot-divider">
          </div>

          <div class="w-full flex flex-col items-center justify-center h-full" v-if="slot.isFree">
            <p> Empty </p>
          </div>
          <!--    If subject exists      -->
          <div v-else class="w-full flex flex-col">
            <!--    Common subject      -->
            <div class="w-full flex flex-col items-center justify-center h-full bg-time-slot-subject-common"
                 v-if="slot.isCommon">
              <p> {{ slot.periods.subject }} </p>
              <p> {{ slot.periods.instructor }} </p>
              <p> {{ slot.periods.room }} </p>
            </div>
            <!--    Individual subject      -->
            <div class="w-full flex flex-col items-center justify-center h-full bg-time-slot-subject" v-else>
              <p> {{ slot.periods.lab }} </p>
              <p> {{ slot.periods.assistant }} </p>
              <p> {{ slot.periods.room }} </p>

            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full h-[1px] bg-time-slot-divider">

      </div>
    </div>
  </div>
</template>