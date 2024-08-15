// useQuiz.js
import { reactive, toRefs } from 'vue';

const state = reactive({
  questions: [],
  showResults: false,
  score: {
    correct: 0,
    total: 0,
    percentage: 0,
  },
});

export default () => {
  const { showResults, score } = toRefs(state);

  const addQuestion = (question, answers) => {
    const orderedAnswers = [...answers].sort(() => Math.random() - 0.5);
    const correctAnswerIndex = orderedAnswers.findIndex(
      (answer) => answer === answers[0]
    );
    const testingIndex = 1

    const q = {
      id: state.questions.length + 1,
      question,
      answers,
      orderedAnswers,
      correctAnswerIndex,
      selected: ref(-1),
      toggleSelection(index) {
        // Toggle selection: deselect if already selected, select otherwise
        this.selected.value = this.selected.value === index ? -1 : index;
      },
    };

    state.questions.push(q);

    return q;
  };

  const calculateScore = () => {
    const correct = state.questions.filter(
      (question) => question.correctAnswerIndex === question.selected
    ).length;

    state.score = {
      correct,
      total: state.questions.length,
      percentage: correct / state.questions.length * 100,
    };
  };

  watch(() => state.showResults, calculateScore);

  return {
    addQuestion,
    showResults,
    score,
  };
};