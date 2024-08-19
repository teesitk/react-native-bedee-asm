import { QuestionsProps } from '@/components/Questions';
import { makeObservable, observable, action } from 'mobx';

class QuestionsStore {
    questions: QuestionsProps = {data:[]};

  constructor() {
    makeObservable(this, {
      questions: observable,
      fetchQuestions: action,
    });
  }

  fetchQuestions() {
    this.questions.data = require('@/services/mock/apis.json')?.data?.questions;
    return this.questions
  }
}

const questionsStore = new QuestionsStore();
export default questionsStore;