<script setup lang="ts">
import AppInput from "@/components/Form/AppInput.vue";
import Profile from "@/layouts/dashboard/components/Profile.vue";
import Chat from "@/modules/home/pages/chat.vue";

const cards = {
  today: [
    { text: "Chat2", time: "23:11" },
    { text: "Chat3", time: "23:11" },
  ],
  yesterday: [
    { text: "Chat4", time: "23:11" },
    { text: "Chat5", time: "22:35" },
    { text: "Chat6", time: "10:33" },
  ],
  lastDays: [
    { text: "Chat7", time: "23:11" },
    { text: "Chat8", time: "22:35" },
    { text: "Chat9", time: "10:33" },
    { text: "Chat10", time: "10:33" },
  ],
};
</script>

<template>
  <div class="flex flex-row gap-10 parent pb-5">
    <div class="bg-[#F6F4FE] py-2 basis-1/5 ">
      <!-- heading -->
      <div class="px-5">
        <span class="flex items-center gap-2">
          <img src="@/assets/images/logo.png" />
          <p class="text-[#25282B] text-2xl font-semibold">STS Chat Bot</p>
        </span>
        <!-- content -->
        <AppInput
          name="search"
          placeholder="Search Recent Chats"
          icon="search"
          icon-position="right"
          class="w-full pt-8 pb-5 search"
        />
      </div>
      <hr class="border border-solid border-[#EAEAEA] w-full" />

      <!-- Today's Cards -->
      <div class="card-category px-5">
        <p class="card-title my-2">Today</p>
        <div class="card-container gap-8">
          <div
            class="card rounded-md cursor-pointer"
            v-for="(card, index) in cards.today"
            :key="'today-' + index"
            :class="{ 'first-card': index === 0 }"
          >
            <div class="card-text">{{ card.text }}</div>
            <div class="card-time">{{ card.time }}</div>
          </div>
        </div>
      </div>

      <hr class="border border-solid border-[#EAEAEA] w-full my-4" />

      <!-- Yesterday's Cards -->
      <div class="card-category px-5">
        <p class="card-title my-3">Yesterday</p>
        <div class="card-container gap-8">
          <div
            class="card rounded-md cursor-pointer"
            v-for="(card, index) in cards.yesterday"
            :key="'yesterday-' + index"
          >
            <div class="card-text">{{ card.text }}</div>
            <div class="card-time">{{ card.time }}</div>
          </div>
        </div>
      </div>

      <hr class="border border-solid border-[#EAEAEA] w-full my-4" />

      <!-- Last 7'Days Cards -->
      <div class="card-category px-5">
        <p class="card-title my-3">Last 7'Days</p>
        <div class="card-container gap-8">
          <div
            class="card rounded-md cursor-pointer"
            v-for="(card, index) in cards.lastDays"
            :key="'yesterday-' + index"
          >
            <div class="card-text">{{ card.text }}</div>
            <div class="card-time">{{ card.time }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="basis-3/4 py-5">
      <!-- profile -->
      <div class="flex justify-end">
        <Profile />
      </div>

      <!-- heading -->
      <div class="my-8">
        <span class="flex items-center gap-10 justify-center mb-4">
          <hr class="border border-solid border-[#25282B] w-1/3 my-4" />
          <p class="text-[#25282B]">1 Jan 2024</p>
          <hr class="border border-solid border-[#25282B] w-1/3 my-4" />
        </span>
      </div>

      <div>
        <Chat />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.parent {
  background: linear-gradient(
    to left,
    #fcc4c4 0%,
    #fcc4c4 50%,
    #f4f4f7 10%,
    #f4f4f7 20%
  );
  background-size: 10% 100%;
}
::v-deep .search .p-inputtext {
  font-size: 1rem;
  border-radius: 3rem;
  background-color: #f0f0f0;
  padding: 0.8rem;
}

::v-deep .search .p-inputtext::placeholder {
  color: #000;
  font-weight: 600;
  padding-left: 0.7rem;
}

::v-deep .search .p-icon-field .p-input-icon {
  width: 3.5rem;
  height: 1.2rem;
}

::v-deep .search .p-input-icon svg {
  fill: #e22222;
}

.card-container {
  display: flex;
  flex-direction: column;
}

.card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #a9a9a9;
}

.card-title {
  font-size: 12px;
  font-weight: bold;
}

.card-text {
  flex: 1;
}

.first-card {
  background-color: #980000;
  color: #fff;
}
</style>
