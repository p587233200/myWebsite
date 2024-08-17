<template>
  <v-container class="h-screen" fluid>
    <Topbar></Topbar>
    <v-card class="background-color">
      <v-card-item>
        <template v-slot:title>
          <div class="text-center text-h4 font-weight-medium py-3">
            <v-icon class="mx-3" icon="mdi-home" size="35"></v-icon>
            <text>我的首頁</text>
          </div>
        </template>
      </v-card-item>
      <v-divider class="my-auto" thickness="1" color=""></v-divider>
      <v-card-text class="my-auto">
        <v-row class="my-auto d-flex justify-space-between">
          <v-col class="d-flex flex-column justify-space-evenly">
            <v-row class="font-weight-medium text-h3 my-auto" justify="center">
              Che-Sheng Hsu的網站
            </v-row>
            <v-row class="my-auto" justify="center">
              <div class="text-center">
                <h3>哈囉～妳好，歡迎來到我的網站 </h3><br>
                <h3>目前就讀國立中山大學</h3><br>
                <h3>資料庫系統實驗室</h3><br>
                <h3>你可以點選按鈕了解更多</h3><br>
                <h3>#NSYSU #NKUST</h3>
              </div>
            </v-row>
            <v-row class="d-flex justify-space-evenly">
              <v-btn prepend-icon="mdi-account-school" variant="outlined" class="rounded-pill px-10 button-color"
                @click="cardShowStore.educationCardShow">
                <template v-slot:prepend>
                  <v-icon color="success"></v-icon>
                </template>
                畢業學校
              </v-btn>
              <v-btn prepend-icon="mdi-card-account-mail-outline" variant="outlined"
                class="rounded-pill px-10 button-color" @click="cardShowStore.contactCardShow">
                <template v-slot:prepend>
                  <v-icon color="success"></v-icon>
                </template>
                聯絡方式
              </v-btn>
            </v-row>
          </v-col>
          <v-col>
            <v-img :width="380" aspect-ratio="16/9" cover class="rounded-lg mx-auto my-auto"
              src="/Users/cheng/Documents/GitHub/myWebsite/src/assets/myPortrait.jpg"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider class="my-1" thickness="2" color="" length=""></v-divider>
      <div class="d-flex py-5 justify-space-around">
        <v-list-item prepend-icon="mdi-calendar-today">
          <v-list-item-subtitle>today is {{ (new Date()).getFullYear() }} / {{ (new Date()).getMonth() + 1 }} / {{ (new
            Date()).getDate() }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item prepend-icon="mdi-clock">
          <v-list-item-subtitle>{{ currentTime }}</v-list-item-subtitle>
        </v-list-item>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { useCardShowStore } from '@/services/cardShow.js';
import { ref, onMounted, onUnmounted } from 'vue';
const cardShowStore = useCardShowStore();

const currentTime = ref('');

const updateTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  currentTime.value = `${hours}:${minutes}:${seconds}`;
};
onMounted(() => {
  updateTime(); // 初始化顯示時間
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});

</script>

<style scoped>
.background-color {
  background-color: #f9f4ef;
}

.button-color {
  background-color: #ffffff;
}

</style>
