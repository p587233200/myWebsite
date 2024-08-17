<template>
    <v-banner class="mt-4" color="deep-purple-accent-4" icon="mdi-account" lines="one">
        <v-banner-text class="text-h4 text-center">
            我的自我介紹
        </v-banner-text>
    </v-banner>

    <v-card class="mx-auto">
        <v-card-item>
            <v-card-title>
                Card title
            </v-card-title>

            <v-card-subtitle>
                Card subtitle secondary text
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </v-card-text>
    </v-card>
    <v-btn class="ma-2" color="primary" @click="expand = !expand">
        Expand Transition
    </v-btn>
    <v-expand-transition>
        <div v-show="expand">
            <v-card class="mx-auto bg-secondary" height="100" width="100"></v-card>
        </div>
    </v-expand-transition>
</template>

<script setup>
import { ref } from 'vue';
const expand = ref(false);
</script>
