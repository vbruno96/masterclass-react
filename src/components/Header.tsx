import { Sparkle } from "phosphor-react";
import '../assets/css/header.css'

interface TimelineHeaderProps {
  title: string
}

export function Header({ title }: TimelineHeaderProps) {
  return (
    <div className="timeline-header">
      { title }
      <Sparkle />
    </div>
  )
}
