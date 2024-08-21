<script setup lang="ts">
import NavTabs from "@/components/NavTabs.vue";
const tabs = [
  {
    name: "Login",
    routeName: "signIn",
  },
  {
    name: "Register",
    routeName: "register",
  },
];
</script>

<template>
  <div class="users-management">
    <div class="flex gap-40">
      <span class="basis-3/5">
        <img
          src="@/assets/images/STSLogo.png"
          alt="login"
          class="w-full h-full"
        />
      </span>
      <span>
        <NavTabs :tabs="tabs" class="mt-28 ml-16" />
        <router-view></router-view>
      </span>
    </div>
  </div>
</template>

<style></style>
