import { LetterType } from './data'

export default function Letter({ letter, onToggle, isSelected }: { letter: LetterType; onToggle: (id: number) => void; isSelected: boolean }) {
  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id)
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
