import { FormEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import '../assets/css/status.css'

export function Status() {
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
  ])
  const [newAnswer, setNewAnswer] = useState('')
  
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers(prevState => [newAnswer, ...prevState])
    setNewAnswer('')
  }
  
  return (
    <main className="answer">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae rem aspernatur officia doloremque. Quas ipsa facere beatae, vitae numquam tempore itaque illum perspiciatis ipsum soluta hic neque repudiandae asperiores." />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vbruno96.png" alt="Bruno Vinícius" />
          <textarea
            id="tweet"
            placeholder="What's happeing?"
            value={newAnswer}
            onChange={
              event => {
                setNewAnswer(event.target.value)
              }
            }
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      <Separator />
      {
        answers.map(answer => (
          <Tweet key={answer}  content={answer} />
        ))
        }
    </main>
  )
}
