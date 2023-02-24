import { ChangeEvent, FormEvent, useState  } from "react";
import { Tweet } from "../components/Tweet";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import '../assets/css/timeline.css'

export function Timeline() {
  const [tweets, setTweets] = useState([
    `Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: 
    <br />
    ✅ npm start: De 32s para 400ms (sim, demorava 30s)<br />
    ✅ npm build: De 120s para 22s<br />
    <br />
    Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`,
    'Tweet 2',
    'Teste 1'
  ])
  const [newTweet, setNewTweet] = useState('')
  
  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets(prevState => [newTweet, ...prevState])
    setNewTweet('')
  }


  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vbruno96.png" alt="Bruno Vinícius" />
          <textarea
            id="tweet"
            placeholder="What's happeing?"
            value={newTweet}
            onChange={
              event => {
                setNewTweet(event.target.value)
              }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {
        tweets.map(tweet => (
          <Tweet key={tweet}  content={tweet} />
        ))
      }
    </main>
  )
}
