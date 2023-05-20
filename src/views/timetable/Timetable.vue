<script lang="ts">
import {ref} from "vue";
import {timeTable} from "@/views/timetable/feature-api";
import Button from "@/components/Button.vue";
import {Study, SubGroupsTable, TimeTable} from "@/views/timetable/feature-rules";

export default {
  name: "Timetable",
  components: {Button},
  setup() {

    const selectedTable = ref<SubGroupsTable[]>()
    const selectedSchedule = ref<Study[]>()
    const tableName = ref<string>()
    const subGroupName = ref<string>()

    const changeTable = (table: TimeTable) => {
      tableName.value = table.group
      selectedTable.value = table.subGroupsTable
    }
    const changeSchedule = (subGroupTable: SubGroupsTable) => {
      subGroupName.value = subGroupTable.subgroup
      selectedSchedule.value = subGroupTable.study
    }

    return {
      selectedTable,
      timeTable,
      selectedSchedule,
      changeTable,
      changeSchedule,
      tableName,
      subGroupName
    }
  },
  computed: {}

}


</script>

<template>
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
      <div v-for="item in selectedTable" :key="item">
        <button @click="changeSchedule(item)">{{ item.subgroup }}</button>
      </div>
    </div>
    <!--  Schedule  -->
    <div v-if="selectedSchedule" class="flex flex-col gap-2">
      <p> Time table for {{subGroupName}} of {{tableName}} </p>
      <p>{{selectedSchedule}}</p>

    </div>
  </div>
</template>