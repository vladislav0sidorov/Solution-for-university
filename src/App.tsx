// 2_2_3 Fix a crash
/*
  Вот небольшая форма, которая должна позволить пользователю оставить отзыв. Когда отзыв отправлен, предполагается отобразить сообщение с благодарностью. Однако при этом происходит сбой с сообщением об ошибке: "Rendered lesser hooks than expected". Можете ли вы заметить ошибку и исправить ее?
*/

export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?') ?? ''
    alert(`Hello, ${name}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
