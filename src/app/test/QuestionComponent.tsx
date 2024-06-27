// src/app/test/TestComponent.tsx
"use client";

import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface Answer {
  text: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

const QuestionComponent = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/questions`)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswerClick = (score: number) => {
    setScores([...scores, score]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const totalScore = scores.reduce((a, b) => a + b, score);
      const personalityType = totalScore > 0 ? "Extrovert" : "Introvert";
      router.push(`/result?type=${personalityType}`);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom color="textPrimary">
        {currentQuestion.question}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {currentQuestion.answers.map((answer, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleAnswerClick(answer.score)}
            sx={{
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            {answer.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuestionComponent;
