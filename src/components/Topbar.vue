<template>
    <v-toolbar density="compact"  class="background-color1">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>Che-Sheng Hsu的首頁 </v-toolbar-title>
        <v-toolbar-title></v-toolbar-title>

        <v-icon icon="mdi-email" class="ml-18 my-3 mx-4"></v-icon>

        <v-spacer>p587233200@gmail.com</v-spacer>

        <v-btn prepend-icon="mdi-account-school" variant="outlined" class="mx-4 button-color"
            @click="cardShowStore.educationCardShow">
            <template v-slot:prepend>
                <v-icon color="success"></v-icon>
            </template>
            畢業學校
        </v-btn>

        <v-btn prepend-icon="mdi-card-account-mail-outline" variant="outlined" class="mx-4 button-color"
            @click="cardShowStore.contactCardShow">
            <template v-slot:prepend>
                <v-icon color="success"></v-icon>
            </template>
            聯絡方式
        </v-btn>
    </v-toolbar>
</template>

<script setup>
import { useCardShowStore } from '@/services/cardShow.js';

const cardShowStore = useCardShowStore();


console.log('contactcard',cardShowStore.contactcard,"contactcard")


</script>

<style scoped>
.background-color1 {
    background-color: #eaddcf;
}
.button-color{
  background-color: #ffffff;
}

.title {
  size: 24px;
  color: black;
}
</style>
