<script>
import { getQuizzes } from '../services/apiService'
export default {
  data() {
    return {
      quizzes: []
    };
  },
  async mounted() {
    this.quizzes = await getQuizzes();
  }
}

</script>

<template>
  <main>
    <h2>Choose a Quiz</h2>
    <IListGroup>
      <IListGroupItem
        v-for="quiz in quizzes"
        :key="quiz.id"
        :to="'/quiz/' + quiz.id">
        {{ quiz.name }}
      </IListGroupItem>
    </IListGroup>
  </main>
</template>
