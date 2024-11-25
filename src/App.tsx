import { useRef } from 'react'

// 4_1_3  Fix debouncing
/*
  В этом примере все обработчики нажатия на кнопку выполняют "антидребезг". Чтобы увидеть, что это значит, нажмите на одну из кнопок. Обратите внимание, что через секунду появится сообщение. Если вы нажмете кнопку в ожидании сообщения, таймер сбросится. Таким образом, если вы будете нажимать одну и ту же кнопку много раз, сообщение появится только через секунду после того, как вы перестанете нажимать. Антидребезг позволяет отложить выполнение какого-либо действия до тех пор, пока пользователь не "перестанет делать что-то".

  Этот пример работает, но не совсем так, как было задумано. Кнопки не являются независимыми. Чтобы увидеть проблему, нажмите на одну из кнопок, а затем сразу же нажмите на другую. Можно было бы ожидать, что после задержки вы увидите сообщения обеих кнопок. Но отображается только сообщение последней кнопки. Сообщение первой кнопки теряется.

  Почему кнопки мешают друг другу? Найдите и устраните проблему.
*/

function DebouncedButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const timeoutID = useRef<number>()

  return (
    <button
      onClick={() => {
        clearTimeout(timeoutID.current)
        timeoutID.current = setTimeout(() => {
          onClick()
        }, 1000)
      }}
    >
      {children}
    </button>
  )
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>Launch the spaceship</DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
    </>
  )
}
