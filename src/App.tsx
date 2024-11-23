// 3_2_3 Fix the disappearing selection
/*
    Выводится список писем, которые хранятся в переменной состояния letters. Когда вы наводите курсор или фокус на определенное письмо - оно выделяется (подсвечивается). Текущее выделенное письмо хранится в переменной состояния highlightedLetter. Вы можете "выделять" и "снимать выделение" отдельных писем, что приводит к обновлению массива letters в состоянии.

    Этот код работает, но есть небольшой сбой в пользовательском интерфейсе. Когда вы нажимаете "Star" или "Unstar", подсветка на мгновение исчезает. Однако она снова появляется, как только вы перемещаете указатель или переключаетесь на другое письмо с клавиатуры. Почему это происходит? Исправьте это, чтобы подсветка не исчезала после нажатия кнопки.
*/

import { useState } from 'react'
import { initialLetters, LetterType } from './data.js'
import Letter from './Letter.js'

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters)
  const [highlightedLetter, setHighlightedLetter] = useState<LetterType | null>(null)

  function handleHover(letter: LetterType) {
    setHighlightedLetter(letter)
  }

  function handleStar(starred: LetterType) {
    setLetters(
      letters.map(letter => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred
          }
        } else {
          return letter
        }
      })
    )
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={highlightedLetter ? letter.id === highlightedLetter.id : false}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  )
}
