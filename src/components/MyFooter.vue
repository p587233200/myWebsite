<template>
  <div class="d-flex justify-space-between background-color" color="indigo-lighten-3">
    <h1 class="my-text ml-15 "> Che-Sheng Hsu </h1>
    <div class="d-flex align-center">
      <v-icon icon="mdi-email" class="ml-18 my-3"></v-icon>
      <h2 class="mx-4">p587233200@gmail.com</h2>
    </div>
  </div>
  <div class="d-flex background-color">
    <h4 class="mx-15 my-1">Believe you can and you're halfway there.😎</h4>
  </div>
  <v-footer height="50" class="background-color">
    <div>
      <a v-for="item in items" :key="item.title" :href="item.href" :title="item.title"
        class="d-inline-block mx-4 social-link" rel="noopener noreferrer" target="_blank">
        <v-icon :icon="item.icon" />
      </a>
    </div>

    <div class="text-caption " style="position: absolute; right: 20px;">
      2024-{{ (new Date()).getFullYear() }} &copy;Copyright Che-Sheng Hsu All Rights Reserved.
    </div>
  </v-footer>
</template>

<script setup>

const items = [

  {
    title: 'My GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/p587233200',
  },
  {
    title: 'My instagram',
    icon: `mdi-instagram`,
    href: 'https://www.instagram.com/cheng10_28/',
  },
  {
    title: 'My email',
    icon: `mdi-email`,
    href: 'https://mail.google.com/mail/u/0/#inbox',
  },
  {
    title: 'My fackbook',
    icon: `mdi-facebook`,
    href: 'https://www.facebook.com/profile.php?id=100007010019036',
  },
]
</script>

<style scoped>
.background-color {
  background-color: #C5CAE9;
  /* indigo-lighten-4 靛藍-輕盈-4 */
}

.social-link :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.social-link :deep(.v-icon:hover) {
  color: rgba(196, 223, 19, 1);
}

.my-text {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>
