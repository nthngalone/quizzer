<script>
import { getQuiz } from '../services/apiService';
export default {
  props: {
    quizId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quiz: {},
      answers: []
    };
  },
  async mounted() {
    this.quiz = await getQuiz(this.quizId);
  },
  methods: {
    getAnswerOptions(questionIndex) {
      const options = this.quiz.questions[questionIndex].options;
      return Object.keys(options).map((optionKey) => ({
        id: optionKey,
        label: options[optionKey]
      }));
    }
  }
}
</script>

<template>
  <div class="quiz">
    <h1>{{ quiz.name }}</h1>
    <IButton
      to="/quiz/0/questions/0"
    >
      Start Quiz
    </IButton>
  </div>
</template>
