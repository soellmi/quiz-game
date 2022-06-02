import React, { useState } from 'react';

function App() {
	const questions = [
		{
			questionText: <p> Once upon a time there lived in a certain village a little country girl, the
      prettiest creature who was ever seen. Her mother was excessively fond of
      her; and her grandmother doted on her still more. This good woman had a
      little red riding hood made for her. It suited the girl so extremely well that
      everybody called her Little Red Riding Hood...
      One day her mother, having made some cakes, said to her, 
      - Go, my dear, and see how your grandmother is doing, for I hear she has been very ill. Take her a cake, and this little pot of butter.
       </p>,
			answerOptions: [
				{ answerText: 'Treat yourself with a piece of cake and save some crumbles', isCorrect: false },
				{ answerText: 'Carefully cover up the cake', isCorrect: false },
			
			],
		},
		{
			questionText: <p>Little Red Riding Hood set out immediately to go to her grandmother, who lived in another
      village.
      As she was going through the wood, she met with a wolf, who had a very great mind to eat
      her up, but he dared not, because of some woodcutters working nearby in the forest. He
      asked her where she was going. The poor child, who did not know that it was dangerous to
      stay and talk to a wolf, said to him, "I am going to see my grandmother and carry her a
      cake and a little pot of butter from my mother."
      "Does she live far off?" said the wolf
      Little Red Riding Hood answeres...</p>,
			answerOptions: [
				{ answerText: <p>'"it is beyond that mill you see there, at the first house in the village."'</p>, isCorrect: false },
				{ answerText: <p>'With a shrug on the shoulders'</p>, isCorrect: false },
			],
		},
		{
			questionText: <p>"Well," said the wolf, "and I'll go and see her too. I'll go this way and go you that, and we
      shall see who will be there first."
      The wolf ran as fast as he could, taking the shortest path, and the little girl took a
      roundabout way, entertaining herself by gathering nuts, running after butterflies, and
      gathering bouquets of little flowers. It was not long before the wolf arrived at the old
      woman's house. He knocked at the door: tap, tap.
      "Who's there?"
      The wolf answers:</p>,
			answerOptions: [
				{ answerText: <p>"Your grandchild, Little Red Riding Hood," replied the wolf, counterfeiting her voice; "who
        has brought you a hammer and newspaper"</p>, isCorrect: false },
				{ answerText: <p>"Your grandchild, Little Red Riding Hood," replied the wolf, counterfeiting her voice; "who
        has brought you a cake and a little pot of butter sent you by mother."</p>, isCorrect: false },
			],
		},
		{
			questionText: <p>The good grandmother, who was in bed, because she was somewhat ill, cried out, "Pull
      the bobbin, and the latch will go up."
      The wolf pulled the bobbin, and the door opened, and then he immediately fell upon the
      good woman and ate her up in a moment, for it been more than three days since he had
      eaten. He then shut the door and got into the grandmother's bed, expecting Little Red
      Riding Hood, who came some time afterwards and knocked at the door: tap, tap.
      "Who's there?"
      Little Red Riding Hood, hearing the big voice of the wolf, was at first afraid and ...</p>,
			answerOptions: [
				{ answerText: <p>She really had a hard time believing it really was her grandmother speaking.</p>, isCorrect: false },
				{ answerText: <p>Because her grandmother had a cold and was hoarse her voice was a bit different.</p>, isCorrect: false },
			],
		},
    {
			questionText: <p>Little Red Riding Hood answered:
      "It is your grandchild Little Red Riding Hood, who has brought you a cake and a little pot of
      butter mother sends you."
      The wolf cried out to her, softening his voice as much as he could, "Pull the bobbin, and
      the latch will go up."
      Little Red Riding Hood pulled the bobbin, and the door opened.
      The wolf, seeing her come in, said to her, hiding himself under the bedclothes, "Put the
      cake and the little pot of butter upon the stool, and come get into bed with me."</p>,
			answerOptions: [
				{ answerText: <p>Little Red Riding Hood took off her clothes and got into bed.</p>, isCorrect: false },
				{ answerText: <p>Little Red Riding Hood sat on the bed a bit hesitant.</p>, isCorrect: false },
			],
		},

    {
			questionText: <p>She was greatly amazed to see how her grandmother looked in her nightclothes, and said
      to her, "Grandmother, what big arms you have!"
      "All the better to hug you with, my dear."
      "Grandmother, what big legs you have!"
      "All the better to run with, my child."
      "Grandmother, what big ears you have!"
      "All the better to hear with, my child."
      "Grandmother, what big eyes you have!"
      "All the better to see with, my child."
      "Grandmother, what big teeth you have got!"
      "All the better to eat you up with."</p>,
			answerOptions: [
				{ answerText: <p>And, saying these words, this wicked wolf fell upon Little Red Riding Hood, and ate her all
          up...</p>, isCorrect: true },
				{ answerText: <p>And, saying these words, Little Red Riding Hood understood the danger. She ran out
          and seeked out help from the closest neighbor. The neighbor had a rifle at her disposal,
          and the wicked wolf was no more...</p>, isCorrect: false },
			],
		},
    {
			questionText: <p>Game Over</p>,
			answerOptions: [
				{ answerText: <p>Restart Game</p>, isCorrect: false },
				
			],
		},

    {
			questionText: <p>You won</p>,
			answerOptions: [
				{ answerText: <p>Restart Game.</p>, isCorrect: false },
				
			],
		},
	];

const [currentQuestion, setCurrentQuestion] =useState(0);

const [showScore, setShowScore] =useState(false); 

const [score, setScore] = useState(0);

const handleAnswerButtonClick = (isCorrect) => {
  if(isCorrect===true){}
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion);
  } 
  
}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> </span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText} </div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=> 
            <button onClick={() =>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText} </button>)}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
