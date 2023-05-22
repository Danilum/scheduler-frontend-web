<script lang="ts">
import LeftBar from "@/components/LeftBar.vue";
export default  {
  name: "Home",
  components:{LeftBar},
  setup(){

    return {

    }
  }
}
</script>

<template>
  <div class="flex flex-row w-screen h-screen">
    <LeftBar></LeftBar>
    <router-view></router-view>

  </div>
</template>