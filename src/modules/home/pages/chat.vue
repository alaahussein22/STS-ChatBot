<template>
  <div class="chat-container">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="['message-container', message.sender === 'me' ? 'me' : 'other']"
      class="flex items-center"
    >
      <img :src="message.image" class="sender-image" />
      <div
        :class="['message', message.sender === 'other' ? 'bg-gray' : 'bg-red']"
        class="flex flex-col"
      >
        <div>{{ message.text }}</div>
        <div class="time">{{ message.time }}</div>
      </div>
    </div>

    <div class="relative mt-[18.5rem]">
      <!-- Icons -->
      <div
        class="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
        @click="toggleDropdown"
      >
        <svg
          class="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- File Outline -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V9l-6-6z"
          />
          <!-- Arrow Inside (Pin Shape) -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15l-3-3m3 3l3-3M12 6v9"
          />
          <!-- Pin Shape Detail -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 18v3m-1-1h2M12 20a2 2 0 01-2-2v-1a2 2 0 012-2a2 2 0 012 2v1a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div
        class="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
      >
        <svg
          class="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
      <!-- Input Field -->
      <input
        type="text"
        class="w-full py-4 px-12 border rounded-lg bg-[#a9a9a9]"
        placeholder="Message STS Chat bot Here"
      />

      <!-- Dropdown List -->
      <div
        v-if="showDropdown"
        class="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        <div
          class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
          @click="selectOption('Option 1')"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Document Outline -->
            <path fill="#f87171" d="M5 3v18h14V8l-6-6H5z" />
            <!-- Document Content -->
            <path
              fill="#fff"
              d="M12 7h3v4h-3V7zm-5 4h3v6H7v-6zm5 0h3v6h-3v-6z"
            />
            <!-- Text -->
            <path
              stroke="#d1d5db"
              stroke-width="2"
              d="M12 7h3v4h-3V7zm-5 4h3v6H7v-6zm5 0h3v6h-3v-6z"
            />
          </svg>
          PDF File
        </div>
        <div
          class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
          @click="selectOption('Option 2')"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- File Outline -->
            <path
              fill="#4f46e5"
              d="M6 2H4a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V8l-6-6z"
            />
            <!-- SQL Text -->
            <text
              x="12"
              y="16"
              font-size="6"
              text-anchor="middle"
              fill="#ffffff"
              font-family="Arial, sans-serif"
            >
              SQL
            </text>
            <!-- Document Content -->
            <path fill="#e5e7eb" d="M10 11h4v2h-4v-2zM10 14h4v2h-4v-2z" />
          </svg>
          SQL File
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import AppInput from "@/components/Form/AppInput.vue";
import { ref, onUnmounted } from "vue";
// import inlineSvg from "vue-inline-svg";
// import { useSvg } from "@/composables/useDynamicAssets";

const messages = ref([
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    sender: "me",
    image: "https://via.placeholder.com/40?text=O",
    time: "12:50",
  },
  {
    text: "Hi there!",
    sender: "other",
    image: "https://via.placeholder.com/40?text=M",
  },
  {
    text: "How are you?",
    sender: "me",
    image: "https://via.placeholder.com/40?text=O",
    time: "12:50",
  },
  {
    text: "I am good, thanks!",
    sender: "other",
    image: "https://via.placeholder.com/40?text=M",
  },
]);

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

// Handle click outside to close dropdown
function handleClickOutside(event:any) {
  if (!event.target.closest(".relative")) {
    showDropdown.value = false;
  }
}

// Add and remove event listener for clicks outside
document.addEventListener("click", handleClickOutside);

function selectOption(option:any) {
  console.log("Selected:", option);
  showDropdown.value = false;
}

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
::v-deep .send .p-inputtext {
  color: black;
  padding: 1rem;
  border-radius: 0.75rem;
  border-color: #a9a9a9;
}

::v-deep .send .p-inputtext::placeholder {
  color: black;
  font-weight: 600;
  margin: 0 20rem;
}

::v-deep .send .p-icon-field > .p-input-icon {
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
  color: black;
  fill: black;
  cursor: pointer;
}
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
  padding: 0 9rem;
}

.message-container {
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
}

.message-container.me {
  flex-direction: row-reverse;
}

.sender-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
}

.message {
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  max-width: 80%;
  word-break: break-word;
  padding: 1rem;
}

.bg-gray {
  background-color: #a9a9a9;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  opacity: 0.6;
  color: black;
}

.bg-red {
  background-color: #980000;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.time {
  font-size: 12px;
  color: #fff;
  text-align: right;
  margin-top: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  color: #4b5563;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #f9fafb;
  color: #1f2937;
}
</style>
