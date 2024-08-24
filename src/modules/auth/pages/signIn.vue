<template>
  <div class="pr-40 md:m-0 sm:m-auto">
    <div class="flex flex-col items-start gap-6 pb-9">
      <div>
        <p class="text-grey-500 text-5xl font-medium">Welcome to STS Chatbot</p>
        <p class="text-[#545454] text-lg font-normal leading-normal mt-4">
          Please login to your account
        </p>
      </div>
    </div>

    <!-- form -->
    <div class="">
      <validation-form class="space-y-4" ref="loginForm" @submit="submitForm">
        <AppInput
          name="email"
          class="chat w-full border-0 border-none bg-inherit"
          v-model="userData.email"
          label="Username or Email"
          validation="required"
        />
        <AppInput
          name="password"
          class="chat w-full border-0 border-none bg-inherit"
          v-model="userData.password"
          label="Password"
          type="password"
          validation="required"
        />
        <span class="flex justify-between items-center">
          <p class="text-[#545454] underline cursor-pointer">Forgot Password</p>
          <button
            class="bg-[#980000] text-white rounded-full px-12 py-3 border-strk-s3"
            type="submit"
            submit-title=""
          >
            OK
          </button>
        </span>

        <span class="flex justify-between items-center py-8">
          <AppButton
            class="btn w-full bg-[#F2F2F2] text-[#545454] rounded-full px-12 py-3 border-strk-s3"
            type="submit"
            icon="facebook"
            icon-position="left"
          >
            login with facebook
          </AppButton>
        </span>

        <p class="text-[#8E8E8E] text-center">
          Terms and Conditions & Privacy Policy
        </p>
      </validation-form>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { reactive } from "vue";
import AppButton from "@/components/AppButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userData = reactive({
  email: "",
  password: "",
});

const submitForm = () => {
  if (userData.email && userData.password) {
    router.push({ name: "home" });
  }
};
</script>

<style scoped>
.logo {
  height: 100%;
  background-size: contain;
}
::v-deep .chat .p-inputtext {
  border: 0;
  border-bottom: 2px solid #aaaaaa;
  border-radius: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

::v-deep .chat .p-inputtext.p-invalid {
  border: 0;
  border-bottom: 2px solid #db1521;
  border-radius: 0;
  margin-bottom: 1rem;
}

.btn {
  border-radius: 9999px;
  background-color: #f2f2f2;
  color: #545454;
}
.btn svg {
  fill: #980000;
}
</style>
