export type QuestionType = 'mcq' | 'true_false' | 'short_answer';

export interface MCQQuestion {
  id: number;
  type: 'mcq';
  text: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
}

export interface TrueFalseStatement {
  id: string; // 'a', 'b', 'c', 'd'
  text: string;
  isCorrect: boolean;
}

export interface TrueFalseQuestion {
  id: number;
  type: 'true_false';
  text: string;
  statements: TrueFalseStatement[];
}

export interface ShortAnswerItem {
  id: string; // 'a', 'b', 'c', 'd'
  text: string;
  correctAnswer: string;
}

export interface ShortAnswerQuestion {
  id: number;
  type: 'short_answer';
  text: string;
  items: ShortAnswerItem[];
}

export type Question = MCQQuestion | TrueFalseQuestion | ShortAnswerQuestion;

export interface AppState {
  view: 'dashboard' | 'quiz';
  activeSection: 1 | 2 | 3 | null;
  quizProgress: {
    currentQuestionIndex: number;
    answers: any[];
    isFinished: boolean;
  };
}
