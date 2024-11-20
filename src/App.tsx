// 2_6_1 Fix incorrect state updates
/*
    В этом задании вам предстоит реализовать крошечную часть React с нуля! Это не так сложно, как кажется.

    Посмотрите результат работы программы. Обратите внимание, что в ней показаны четыре тестовых случая. Они соответствуют примерам, которые вы видели ранее на этой странице. Ваша задача — реализовать функцию getFinalState так, чтобы она возвращала правильный результат для каждого из этих случаев. Если вы реализуете функцию правильно, все четыре теста должны пройти.

    Вы получите два аргумента: baseState — начальное состояние (например, 0), и queue — массив, содержащий смесь чисел (например, 5) и функций обновления (например, n => n + 1) в порядке их добавления.

    Ваша задача — вернуть конечное состояние, точно такое же, как в тестах на странице с результатом работы программы!
*/

import { useState, ChangeEvent } from 'react'

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10
  })

  function handlePlusClick() {
    // Используем setPlayer для иммутабельного обновления состояния
    setPlayer({
      ...player,
      score: player.score + 1
    })
  }

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      firstName: e.target.value
    })
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    // Добавляем spread оператор чтобы сохранить все поля
    setPlayer({
      ...player,
      lastName: e.target.value
    })
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b> <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  )
}
