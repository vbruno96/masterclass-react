import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import '../assets/css/tweet.css'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/vbruno96.png" alt="Bruno Vinícius" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Bruno Vinícius</strong>
          <span>@brunovm__</span>
        </div>
        <p>
          { content }
        </p>
        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            10
          </button>
          <button>
            <ArrowsClockwise />
            20
          </button>
          <button>
            <Heart />
            30
          </button>
        </div>
      </div>
    </Link>
  )
}
