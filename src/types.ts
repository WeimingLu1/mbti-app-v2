export interface Answer {
  text: string;
  type: string;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}