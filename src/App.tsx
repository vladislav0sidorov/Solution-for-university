// 2_5_1 Fix a request counter
/*
    В этом задании вам предстоит реализовать крошечную часть React с нуля! Это не так сложно, как кажется.

    Посмотрите результат работы программы. Обратите внимание, что в ней показаны четыре тестовых случая. Они соответствуют примерам, которые вы видели ранее на этой странице. Ваша задача — реализовать функцию getFinalState так, чтобы она возвращала правильный результат для каждого из этих случаев. Если вы реализуете функцию правильно, все четыре теста должны пройти.

    Вы получите два аргумента: baseState — начальное состояние (например, 0), и queue — массив, содержащий смесь чисел (например, 5) и функций обновления (например, n => n + 1) в порядке их добавления.

    Ваша задача — вернуть конечное состояние, точно такое же, как в тестах на странице с результатом работы программы!
*/
import { useState } from 'react'

export default function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending(p => p + 1)
    await delay(3000)
    setPending(p => p - 1)
    setCompleted(c => c + 1)
  }

  return (
    <>
      <h3>Отложенные: {pending}</h3>
      <h3>Выполненные: {completed}</h3>
      <button onClick={handleClick}>Купить</button>
    </>
  )
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
