<template>
  <div class="mb-24">
    <div class="flex flex-row justify-between items-end">
      <h3 class="text-3xl font-bold quiz-header mb-4">Quiz Results</h3>
      <button
        class="rounded-md bg-blue-500 text-white p-2"
        @click="showResults = !showResults"
      >
        {{ showResults ? "Hide Results" : "Show Results" }}
      </button>
    </div>
    <div
      v-if="showResults"
      class="flex justify-between mt-8"
      :class="{
        'text-green-500': score.percentage >= 70,
        'text-yellow-500': score.percentage >= 50 && score.percentage < 70,
        'text-red-500': score.percentage < 50,
      }"
    >
      <span class="text-3xl font-bold">{{ score.percentage }}%</span>
      <span class="text-3xl font-bold">
        {{ score.correct }}/{{ score.total }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  question: String,
  answers: Array,
});

const id = 1;
// const showResults = ref(false);
import useQuiz from './useQuiz';

const { showResults, score } = useQuiz();
const selected = ref(-1);
const orderedAnswers = props.answers;
</script>
