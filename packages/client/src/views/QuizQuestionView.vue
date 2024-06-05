<script>
import { getQuiz, createSession } from '../services/apiService';
export default {
  props: {
    sessionId: {
      type: Number,
      required: true
    },
    quizId: {
      type: Number,
      required: true
    },
    questId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quiz: null,
      question: null,
      answers: [],
      sessionId: null
    };
  },
  async mounted() {
    this.quiz = await getQuiz(this.quizId);
    this.loadQuestion();
  },
  watch: {
    questId() {
      this.loadQuestion();
    }
  },
  methods: {
    loadQuestion() {
      this.question = this.quiz.questions[this.questId];
    },
    getAnswerOptions() {
      const options = this.question.options;
      return Object.keys(options).map((optionKey) => ({
        id: optionKey,
        label: options[optionKey]
      }));
    },
    async submit() {
      if (this.sessionId === null) {
        this.sessionId = await createSession();
      }

      if (this.questId < this.quiz.questions.length-1) {
        this.$router.push(`/session/${this.sessionId}/quiz/${this.quizId}/questions/${this.questId+1}`);
      } else {
        this.$router.push(`/session/${this.sessionId}/quiz/${this.quizId}/results`);
      }
    }
  }
}
</script>

<template>
  <div class="quizQuestion" v-if="question">
    <h3>{{ question.prompt }}</h3>
    <IRadioGroup
      v-model="answers[questId]"
      :options="getAnswerOptions()"
    />
    <IButton @click="submit()">
      Submit
    </IButton>
  </div>
</template>
