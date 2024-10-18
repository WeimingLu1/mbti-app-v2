import React, { useEffect, useState } from 'react';
import { Question, Answer } from '../types';
import { ChevronLeft, ChevronRight, Clock, AlertCircle } from 'lucide-react';

interface QuestionListProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  progress: number;
  totalQuestions: number;
  currentQuestionNumber: number;
  currentAnswer?: Answer;
  elapsedTime: number;
  unansweredQuestions: number[];
}

const QuestionList: React.FC<QuestionListProps> = ({ 
  question, 
  onAnswer, 
  onPrevious,
  onNext,
  onFinish,
  progress, 
  totalQuestions,
  currentQuestionNumber,
  currentAnswer,
  elapsedTime,
  unansweredQuestions
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setShuffledAnswers([...question.answers].sort(() => Math.random() - 0.5));
  }, [question]);

  useEffect(() => {
    setShowWarning(unansweredQuestions.length > 0);
  }, [unansweredQuestions]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleFinish = () => {
    onFinish();
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">问题 {currentQuestionNumber} / {totalQuestions}</h2>
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>{formatTime(elapsedTime)}</span>
        </div>
      </div>
      <h3 className="text-lg font-medium mb-4 text-gray-700">{question.text}</h3>
      <div className="space-y-3">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={`${question.id}-${index}`}
            className={`w-full py-3 px-4 text-left rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm ${
              currentAnswer && currentAnswer.text === answer.text
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
            onClick={() => onAnswer(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={onPrevious}
          className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
          disabled={currentQuestionNumber === 1}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          上一题
        </button>
        {currentQuestionNumber === totalQuestions ? (
          <button
            onClick={handleFinish}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            完成测试
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
          >
            下一题
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        )}
      </div>
      {showWarning && (
        <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>
            还有 {unansweredQuestions.length} 道题未回答
            （第 {unansweredQuestions.join(', ')} 题）。请回答所有问题后再完成测试。
          </span>
        </div>
      )}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;