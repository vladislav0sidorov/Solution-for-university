// 1_3_1 Convert some HTML to JSX
/*
  Этот HTML был вставлен в компонент, но это не корректный JSX. Исправьте его.
*/

export default function App() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <b>
          And <i>pictures</i>
        </b>{' '}
        of scientists!
      </p>
    </>
  )
}
