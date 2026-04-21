/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Lightbulb, 
  Check, 
  ArrowLeft,
  GraduationCap
} from 'lucide-react';
import { questions } from './data/questions';
import { MCQQuestion, TrueFalseQuestion, ShortAnswerQuestion, Question } from './types';

export default function App() {
  const [view, setView] = useState<'dashboard' | 'quiz' | 'result'>('dashboard');
  const [activeSection, setActiveSection] = useState<1 | 2 | 3 | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const startQuiz = (section: 1 | 2 | 3) => {
    setActiveSection(section);
    setCurrentIdx(0);
    setAnswers([]);
    setScore(0);
    setShowFeedback(false);
    setView('quiz');
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    if (currentIdx < questions[activeSection!].length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setView('result');
    }
  };

  const handleMCQAnswer = (optionIdx: number) => {
    if (showFeedback) return;
    const question = questions[activeSection!][currentIdx] as MCQQuestion;
    const isCorrect = optionIdx === question.correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentIdx] = { selected: optionIdx, isCorrect };
    setAnswers(newAnswers);

    if (isCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleTFAnswer = (statementId: string, value: boolean) => {
    if (showFeedback) return;
    const newAnswers = [...answers];
    const currentQuestionAnswers = newAnswers[currentIdx] || {};
    newAnswers[currentIdx] = { ...currentQuestionAnswers, [statementId]: value };
    setAnswers(newAnswers);
  };

  const submitTFQuestion = () => {
    if (showFeedback) return;
    const question = questions[activeSection!][currentIdx] as TrueFalseQuestion;
    const userAnswers = answers[currentIdx] || {};
    
    let allCorrect = true;
    question.statements.forEach(s => {
      if (userAnswers[s.id] !== s.isCorrect) allCorrect = false;
    });

    if (allCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleSAAnswer = (itemId: string, value: string) => {
    if (showFeedback) return;
    const newAnswers = [...answers];
    const currentQuestionAnswers = newAnswers[currentIdx] || {};
    newAnswers[currentIdx] = { ...currentQuestionAnswers, [itemId]: value };
    setAnswers(newAnswers);
  };

  const submitSAQuestion = () => {
    if (showFeedback) return;
    const question = questions[activeSection!][currentIdx] as ShortAnswerQuestion;
    const userAnswers = answers[currentIdx] || {};
    
    let allCorrect = true;
    question.items.forEach(item => {
      if (userAnswers[item.id]?.trim().toLowerCase() !== item.correctAnswer.toLowerCase()) allCorrect = false;
    });

    if (allCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  if (view === 'dashboard') {
    return (
      <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto flex flex-col gap-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between bg-slate-800/50 p-6 md:p-8 rounded-[2rem] border border-slate-700/50 backdrop-blur-md gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <GraduationCap className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Ôn Luyện KHTN 7</h1>
              <p className="text-slate-400 text-sm">Chương trình giáo dục phổ thông mới</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Tiến độ tổng thể</p>
              <div className="flex items-center gap-3">
                <div className="w-32 md:w-48 progress-bar">
                  <div className="progress-fill w-[65%]"></div>
                </div>
                <span className="text-sm font-mono text-indigo-400">65%</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-400 border-2 border-slate-700 shadow-inner"></div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(140px,auto)]">
          <div className="md:col-span-8 md:row-span-3 bg-gradient-to-br from-indigo-600/30 to-indigo-900/50 rounded-[2.5rem] border border-indigo-500/30 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
            <div className="relative z-10">
              <span className="px-3 py-1 bg-indigo-500 text-[10px] font-bold rounded-full uppercase tracking-wider text-white">Phần I</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-6 text-white leading-tight">Câu Hỏi Trắc Nghiệm</h2>
              <p className="text-slate-300 mt-4 max-w-md text-base md:text-lg">Luyện tập bộ câu hỏi nhiều lựa chọn từ đề cương ôn tập KHTN 7.</p>
            </div>
            <button 
              onClick={() => startQuiz(1)}
              className="relative z-10 w-fit mt-10 px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-slate-100 transition-all hover:translate-y-[-2px] active:translate-y-0"
            >
              Bắt đầu Phần I
            </button>
          </div>

          <SectionCard 
            title="Phần II"
            subtitle="Trắc Nghiệm Đúng Sai"
            description="Phân tích và đánh giá tính đúng sai của các nhận định khoa học."
            icon={<Lightbulb className="text-orange-400" />}
            color="orange"
            progress={0}
            className="md:col-span-4 md:row-span-2"
            onClick={() => startQuiz(2)}
          />

          <SectionCard 
            title="Phần III"
            subtitle="Trả Lời Ngắn"
            description="Thử thách khả năng ghi nhớ và trả lời chính xác các thuật ngữ."
            icon={<BookOpen className="text-rose-400" />}
            color="rose"
            className="md:col-span-4 md:row-span-2"
            onClick={() => startQuiz(3)}
          />

          <div className="md:col-span-4 md:row-span-1 bento-card flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-400">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Hạng của bạn</p>
                <p className="text-white font-bold text-lg">Top 5%</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-center gap-1 bg-indigo-500 shadow-xl shadow-indigo-500/20 border-none text-center">
            <h4 className="text-lg font-bold text-white">Ôn Thi Hiệu Quả</h4>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[activeSection!][currentIdx];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto flex flex-col">
      <nav className="flex items-center justify-between mb-10 bg-slate-800/30 p-4 rounded-3xl border border-slate-700/30 backdrop-blur-sm">
        <button 
          onClick={() => setView('dashboard')}
          className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Thoát</span>
        </button>
        <div className="flex items-center gap-4 md:gap-8 flex-1 justify-end">
          <div className="hidden sm:block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Câu {currentIdx + 1} / {questions[activeSection!].length}
          </div>
          <div className="w-24 md:w-48 progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIdx + 1) / questions[activeSection!].length) * 100}%` }}
            />
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="flex-1"
        >
          {view === 'quiz' ? (
            <div className="space-y-6">
              <div className="bento-card bg-slate-800/30 border-slate-700/30 p-8 md:p-12">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold rounded-full uppercase tracking-wider border border-indigo-500/30"> Phần {activeSection}</span>
                </div>
                <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-10 leading-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-4">
                  {currentQuestion.type === 'mcq' && (
                    (currentQuestion as MCQQuestion).options.map((opt, idx) => {
                      const isCorrect = idx === (currentQuestion as MCQQuestion).correctAnswer;
                      const isSelected = answers[currentIdx]?.selected === idx;
                      
                      let btnClass = "";
                      if (showFeedback) {
                        if (isCorrect) btnClass = "quiz-btn-correct";
                        else if (isSelected) btnClass = "quiz-btn-wrong";
                      } else if (isSelected) {
                        btnClass = "quiz-btn-selected";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleMCQAnswer(idx)}
                          className={`quiz-btn group flex items-center gap-5 p-5 ${btnClass}`}
                          disabled={showFeedback}
                        >
                          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900/60 flex items-center justify-center font-bold text-slate-400 group-hover:text-indigo-400 transition-colors border border-slate-700/50">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-grow text-base md:text-lg">{opt}</span>
                          {showFeedback && isCorrect && <CheckCircle2 className="text-emerald-400" size={24} />}
                          {showFeedback && isSelected && !isCorrect && <XCircle className="text-rose-400" size={24} />}
                        </button>
                      );
                    })
                  )}

                  {currentQuestion.type === 'true_false' && (
                    <div className="space-y-6">
                      {(currentQuestion as TrueFalseQuestion).statements.map((s) => {
                        const userVal = answers[currentIdx]?.[s.id];
                        
                        return (
                          <div key={s.id} className="p-6 rounded-2xl border border-slate-700/30 bg-slate-900/20">
                            <p className="mb-4 text-slate-300 font-medium text-lg">
                              {s.id}. {s.text}
                            </p>
                            <div className="flex gap-4">
                              <button
                                onClick={() => handleTFAnswer(s.id, true)}
                                disabled={showFeedback}
                                className={`flex-1 py-3 px-4 rounded-xl border transition-all font-bold ${
                                  userVal === true
                                    ? showFeedback 
                                      ? s.isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-rose-500 border-rose-500 text-white'
                                      : 'bg-indigo-500 border-indigo-500 text-white'
                                    : showFeedback && s.isCorrect === true
                                      ? 'border-emerald-500 text-emerald-400'
                                      : 'bg-slate-800/50 border-slate-700 text-slate-400'
                                }`}
                              >
                                Đúng
                              </button>
                              <button
                                onClick={() => handleTFAnswer(s.id, false)}
                                disabled={showFeedback}
                                className={`flex-1 py-3 px-4 rounded-xl border transition-all font-bold ${
                                  userVal === false
                                    ? showFeedback
                                      ? s.isCorrect === false ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-rose-500 border-rose-500 text-white'
                                      : 'bg-indigo-500 border-indigo-500 text-white'
                                    : showFeedback && s.isCorrect === false
                                      ? 'border-emerald-500 text-emerald-400'
                                      : 'bg-slate-800/50 border-slate-700 text-slate-400'
                                }`}
                              >
                                Sai
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      {!showFeedback && (
                        <button 
                          onClick={submitTFQuestion}
                          className="w-full py-5 bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all mt-8"
                        >
                          Xác nhận câu trả lời
                        </button>
                      )}
                    </div>
                  )}

                  {currentQuestion.type === 'short_answer' && (
                    <div className="space-y-8">
                      {(currentQuestion as ShortAnswerQuestion).items.map((item) => {
                        const userVal = answers[currentIdx]?.[item.id] || '';
                        const isCorrect = userVal.trim().toLowerCase() === item.correctAnswer.toLowerCase();

                        return (
                          <div key={item.id} className="space-y-4">
                            <p className="text-slate-300 font-medium text-lg">
                              {item.id}. {item.text}
                            </p>
                            <input 
                              type="text"
                              disabled={showFeedback}
                              placeholder="Nhập câu trả lời..."
                              className={`w-full p-5 bg-slate-900/40 rounded-2xl border-2 outline-none transition-all font-display text-xl text-white placeholder:text-slate-600 ${
                                showFeedback 
                                  ? isCorrect ? 'border-emerald-500 bg-emerald-500/10' : 'border-rose-500 bg-rose-500/10'
                                  : 'border-slate-700/50 focus:border-indigo-500'
                              }`}
                              onChange={(e) => handleSAAnswer(item.id, e.target.value)}
                              value={userVal}
                            />
                            {showFeedback && !isCorrect && (
                              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-bold flex items-center gap-2">
                                <Check size={16} />
                                Đáp án đúng: {item.correctAnswer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                      {!showFeedback && (
                        <button 
                          onClick={submitSAQuestion}
                          className="w-full py-5 bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                        >
                          Kiểm tra kết quả
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {showFeedback && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleNextQuestion}
                  className="w-full py-6 bg-white text-slate-900 font-bold text-xl rounded-3xl shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {currentIdx === questions[activeSection!].length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                  <ChevronRight />
                </motion.button>
              )}
            </div>
          ) : (
            <div className="bento-card bg-slate-800/30 border-slate-700/30 p-12 text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-28 h-28 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
              >
                <Trophy size={56} />
              </motion.div>
              
              <h2 className="text-4xl font-display font-bold text-white mb-2">Hoàn thành!</h2>
              <p className="text-slate-400 mb-10">Bạn đã hoàn thành bài ôn tập Phần {activeSection}</p>
              
              <div className="max-w-xs mx-auto bg-slate-900/50 rounded-[2rem] p-8 mb-10 border border-slate-700/30">
                <div className="text-6xl font-display font-bold text-indigo-400 mb-2">
                  {score}/{questions[activeSection!].length}
                </div>
                <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Điểm số của bạn</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => startQuiz(activeSection!)}
                  className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20"
                >
                  <RotateCcw size={20} />
                  Làm lại
                </button>
                <button 
                  onClick={() => setView('dashboard')}
                  className="px-8 py-4 bg-slate-800 text-slate-300 font-bold rounded-2xl hover:bg-slate-700 transition-all border border-slate-700"
                >
                  Về trang chủ
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SectionCard({ title, subtitle, description, icon, color, progress, className = '', onClick }: { 
  title: string; 
  subtitle: string;
  description: string; 
  icon: React.ReactNode; 
  color: 'orange' | 'rose' | 'indigo';
  progress?: number;
  className?: string;
  onClick: () => void;
}) {
  const colorMap = {
    orange: 'bg-orange-500 text-orange-400 border-orange-500/20',
    rose: 'bg-rose-500 text-rose-400 border-rose-500/20',
    indigo: 'bg-indigo-500 text-indigo-400 border-indigo-500/20'
  };

  return (
    <motion.button 
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bento-card bento-card-hover flex flex-col justify-between group ${className}`}
    >
      <div className="flex justify-between items-start w-full mb-4">
        <div className={`p-3 bg-opacity-20 rounded-2xl ${colorMap[color].split(' ')[1]} ${colorMap[color].split(' ')[0]} bg-clip-padding backdrop-blur-sm border ${colorMap[color].split(' ')[2]}`}>
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{title}</span>
      </div>
      
      <div className="text-left w-full">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{subtitle}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{description}</p>
      </div>

      {progress !== undefined && (
        <div className="w-full mt-6 bg-slate-900/50 rounded-2xl p-4 border border-slate-700/30">
          <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500 mb-2">
            <span>Tiến trình</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className={`h-full ${colorMap[color].split(' ')[0]}`}
            />
          </div>
        </div>
      )}
    </motion.button>
  );
}
