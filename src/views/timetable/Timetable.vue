<script lang="ts">
import {ref} from "vue";
import {timeTable, getSchedule} from "@/views/timetable/feature-api";
import LeftBar from "@/components/LeftBar.vue";
import Button from "@/components/Button.vue";
import {Schedule, Study, SubGroupsTable, TimeTable} from "@/views/timetable/feature-rules";
import ScheduleVue from "./ui/Schedule.vue"
export default {
  name: "Timetable",
  components: {Button,ScheduleVue, LeftBar},
  setup() {

    const selectedTable = ref<TimeTable>()
    const selectedSchedule = ref<Study[]>()
    const tableName = ref<string>()
    const subGroupName = ref<string>()
    const fullSchedule = ref<Schedule[]>()

    const changeTable = (table: TimeTable) => {
      tableName.value = table.group
      selectedTable.value = table
      selectedSchedule.value = table.subGroupsTable[0].study
    }
    const changeSchedule = (subGroupTable: SubGroupsTable, common: Array<Study>) => {
      subGroupName.value = subGroupTable.subgroup
      selectedSchedule.value = subGroupTable.study
      fullSchedule.value = getSchedule(selectedSchedule.value, common )
    }

    return {
      selectedTable,
      timeTable,
      selectedSchedule,
      changeTable,
      changeSchedule,
      tableName,
      subGroupName,
      fullSchedule
    }
  },
  computed: {}

}


</script>

<template>
  <div class="flex flex-col h-full">
  <div class="flex flex-col w-full justify-center gap-2">
    <p class="text-h1 font-bold"> Time table </p>
    <!--  Select grades  -->
    <div class="flex flex-row items-center gap-6">
      <p class="text-body font-semibold">Select grade:</p>
      <div class="flex flex-col items-center gap-4" v-for="item in timeTable" :key="item">
        <button @click="changeTable(item)"> {{ item.group }}</button>
      </div>
    </div>
    <!--  Select Groups  -->
    <div v-if="selectedTable" class="flex flex-row gap-4">
      <p class="text-body font-semibold">Select Group:</p>
      <div v-for="item in selectedTable.subGroupsTable" :key="item">
        <button @click="changeSchedule(item, selectedTable.study )">{{ item.subgroup }}</button>
      </div>
    </div>
    <!--  Schedule  -->
    <div v-if="selectedSchedule" class="flex flex-col gap-2">
      <p> Time table for {{subGroupName}} of {{tableName}} </p>
      <ScheduleVue :schedule="fullSchedule"></ScheduleVue>
    </div>
  </div>
  </div>
</template>