<script setup lang="ts">
import { reactive, ref } from "vue";
import "dayjs/locale/zh-cn";
const msg = ref<string>("123");
const a = reactive({ name: "zhangsan" });
</script>

<template>
  <el-config-provider>
    <!-- <router-view></router-view> -->
    <div class="text-red mt100">{{ msg }}</div>
    <div>{{ a.name }}</div>
  </el-config-provider>
</template>
<style scoped lang="scss">
.text-red {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 10px;
}
</style>
