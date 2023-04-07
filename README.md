# TimerQuiz
![Alt text](Assests/Images/Screenshot%202023-04-07%20154617.png)

## The Program
In this program, I wanted to create a quiz of initially 10 questions that also has a timer limit. This limit is set to 60 seconds. It should have the functionality to start the quiz when a button is pressed. This would start the timer and show the first question.

## The Method
When working in this program, I knew that I initially had to create the questions needed for the user to select answers from. I would go on to create an array of questions that I can cycle through as the quiz started. This would allow me to start the rest of the code. When a question is answered, the next one is generated while the previous question is evaluated to see if the user is correct. If they are correct, it would add +1 to the score value. When the question array has gone through the whole of the test, it would end the quiz. Alternatively, if the quiz timer had run to 0, it would also call upon the "endQuiz" function. When the "endQuiz" function is called, the "p" element in the HTML is then changed to the score that was generated in the background. It would then show the score in the "p" element. 