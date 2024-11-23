import { LetterType } from './data'

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar
}: {
  letter: LetterType
  isHighlighted: boolean
  onHover: (letter: LetterType) => void
  onToggleStar: (letter: LetterType) => void
}) {
  return (
    <li
      className={isHighlighted ? 'highlighted' : ''}
      onFocus={() => {
        onHover(letter)
      }}
      onPointerMove={() => {
        onHover(letter)
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter)
        }}
      >
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}
