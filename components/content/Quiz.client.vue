<!-- Quiz.client.vue -->
<template>
  <NuxtLayout>
  <!-- <NuxtLayout name="content"> -->
    <div>
    <h3>{{ id }}. {{ question }}</h3>
    <div class="flex flex-col space-y-2 mt-4">
      <label
        v-for="(answer, index) in orderedAnswers"
        :key="answer"
        class="rounded-md py-3 px-5 border transition-colors duration-150"
        :class="{
          'border-gray-300': !showResults && selected !== index,
          'border-gray-500 bg-gray-100': !showResults && selected === index,
          'border-green-500': showResults && index === correctAnswerIndex,
          'bg-green-100':
            showResults && selected === index && index === correctAnswerIndex,
          'border-red-500 bg-red-100':
            showResults && selected === index && index !== correctAnswerIndex,
          'cursor-not-allowed': showResults,
          'cursor-pointer hover:bg-gray-100 hover:border-gray-500':
            !showResults,
        }"
      >
        <input
          type="radio"
          name="answer"
          class="hidden"
          :disabled="showResults"
          :value="index"
          v-model="selected"
        />
        {{ answer }}
      </label>
    </div>
  </div>
  </NuxtLayout>
</template>

<script setup>
import { defineProps } from 'vue';
import useQuiz from './useQuiz';

const props = defineProps({
  question: String,
  answers: Array,
});

const { addQuestion, showResults } = useQuiz();
const { id, selected, orderedAnswers, correctAnswerIndex } = addQuestion(
  props.question,
  props.answers
);
</script>
