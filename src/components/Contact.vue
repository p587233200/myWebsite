<template>
    <v-container class="mb-3" fluid>
        <div v-show="cardShowStore.contactShow" ref="contactcard">
            <v-card class="mx-auto bg-brown-lighten-5" >
                <v-card-item class="text-center">
                    <template v-slot:title>
                        <div class="text-center text-h4 font-weight-medium py-2 ">
                            <v-icon color="green" icon="mdi-card-account-mail-outline" size="30" class="mx-4"></v-icon>
                            <text>我的聯絡方式</text>
                        </div>
                    </template>
                    <template v-slot:subtitle>
                        <v-icon class="me-1 pb-1" color="blue" icon="mdi-check" size="30"></v-icon>
                        歡迎使用以下幾種方式聯繫我~
                    </template>
                </v-card-item>
                <v-divider class="my-auto" thickness="1" color=""></v-divider>
                <v-card-text class="px-20">
                    <v-row class="my-5 d-flex justity-space-evenly">
                        <v-card append-icon="mdi-open-in-new" class="py-2 mx-auto"
                            href="https://www.instagram.com/cheng10_28/" width="250" prepend-icon="mdi-instagram"
                            rel="noopener" subtitle="Follow My instagram" target="_blank" title="My Instagram"
                            color="pink-lighten-4 "></v-card>
                        <v-card append-icon="mdi-open-in-new" class="py-2 mx-auto" width="250"
                            href="https://github.com/p587233200" prepend-icon="mdi-github"
                            rel="noopener" subtitle="Follow My Github" target="_blank" title="My Github"
                            color="grey-darken-3">
                        </v-card>
                    </v-row>
                    <v-row class="my-5 d-flex justity-space-evenly">
                        <v-card append-icon="mdi-open-in-new" class="py-2  mx-auto"
                            href="https://www.facebook.com/profile.php?id=100007010019036" width="250"
                            prepend-icon="mdi-facebook" rel="noopener" subtitle="Follow My Facebook" target="_blank"
                            title="My Facebook" color="light-blue-darken-2">
                        </v-card>

                        <v-card append-icon="mdi-open-in-new" class="py-2 mx-auto"
                            href="https://mail.google.com/mail/u/0/#inbox" width="250" prepend-icon="mdi-email"
                            rel="noopener" subtitle="Follow My Email " target="_blank" title="My Email"></v-card>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </v-container>

</template>

<script setup>
import { useCardShowStore } from '@/services/cardShow.js';

const cardShowStore = useCardShowStore();

import { ref, onMounted } from 'vue';

const contactcard = ref(null);

onMounted(() => {
    cardShowStore.contactcard = contactcard.value;
});


</script>