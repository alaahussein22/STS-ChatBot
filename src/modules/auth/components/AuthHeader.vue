<template>
  <header>
    <h4 class="font-normal text-[5rem] leading-[6rem] text-grey-500"
      v-html="headerTitle"
    >
      
    </h4>
    <p
      class="text-grey-300 text-lg font-normal leading-normal"
    >
      {{ headerContent }}<slot></slot>
    </p>
  </header>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
    },
    headerContent: {
      type: String,
    },
  },
};
</script>

<style></style>
