<template>
  <div class="chat-container">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="['message-container', message.sender === 'me' ? 'me' : 'other']"
      class="flex items-center"
    >
      <img :src="message.image || defaultImage" class="sender-image" />
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
      <svg fill="#000000" height="1.5rem" width="1.5rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M467.076,68.86c-59.902-59.902-156.846-59.896-216.741,0L34.919,284.276c-46.558,46.557-46.558,122.312,0,168.87
			c46.57,46.571,122.326,46.544,168.87,0L419.205,237.73c33.36-33.36,33.36-87.64,0-121c-33.359-33.361-87.64-33.361-121,0
			L114.478,300.457c-6.975,6.975-6.975,18.285,0,25.259c6.975,6.975,18.285,6.975,25.259,0l183.727-183.727
			c19.432-19.432,51.05-19.432,70.481,0c19.431,19.432,19.431,51.05,0,70.481L178.53,427.887c-32.71,32.71-85.646,32.706-118.352,0
			c-15.806-15.806-24.511-36.821-24.511-59.175s8.706-43.369,24.511-59.176L275.594,94.119c45.94-45.94,120.287-45.934,166.222,0
			c45.827,45.828,45.827,120.395,0,166.222l-95.741,95.741c-6.975,6.975-6.975,18.284,0,25.259s18.285,6.975,25.259,0l95.741-95.741
			C526.978,225.7,526.971,128.754,467.076,68.86z"/>
	</g>
</g>
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
        class="absolute left-0 bottom-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
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
import { ref, onUnmounted } from "vue";
import defaultImage from '@/assets/images/logo.png';

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
    image: "",
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
    image: "",
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
