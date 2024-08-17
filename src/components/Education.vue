<template>
    <v-container fluid class="py-2">
        <div v-show="cardShowStore.educationShow" ref="educationcard">
            <v-card color="brown-lighten-5" >
                <v-card-item>
                    <template v-slot:title>
                        <div class="text-center text-h4 font-weight-medium py-3">
                            <v-icon class="mx-3" color="green" icon="mdi-account-school" size="35"></v-icon>
                            <text>我的畢業學校</text>
                        </div>
                    </template>
                </v-card-item>
                <v-divider class="my-auto" thickness="1" color=""></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-timeline side="end">
                                <v-timeline-item dot-color="green" size="x-small">
                                    <div class="mb-4">
                                        <v-icon color="info" icon="mdi-school" size="25" class="mr-2"></v-icon>
                                        <strong class="text-h6">National Sun Yat-Sen University , Taiwan</strong>
                                        <div>國立中山大學 資訊工程學系 碩士</div>
                                        <div>September 2024 - June 2026 (Expected)</div>
                                    </div>
                                </v-timeline-item>
                                <v-timeline-item dot-color="cyan" size="x-small">
                                    <div class="mb-4">
                                        <v-icon color="info" icon="mdi-school" size="25" class="mr-2"></v-icon>
                                        <strong class="text-h6">National Kaohsiung University of Science and Technology
                                            ,
                                            Taiwan</strong>
                                        <div>國立高雄科技大學 資訊工程學系 學士</div>

                                        <div>September 2020 - June 2024</div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-col>
                        <v-col>
                            <v-img :width="500" aspect-ratio="16/9" cover class="rounded-lg mx-auto my-10"
                                :src="img"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>

<script setup>
import { useCardShowStore } from '@/services/cardShow.js';
import img from '@/assets/NSYSUimg.jpg'
import { ref, onMounted } from 'vue';

const cardShowStore = useCardShowStore();

const educationcard = ref(null);

onMounted(() => {
    cardShowStore.educationcard = educationcard.value;
});
</script>
<style>
.hat-color {
    color: #eaddcf;
}
</style>