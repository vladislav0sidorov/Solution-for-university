// 1_6_1 Show an icon for incomplete items with ? :
/*
  Используйте условный оператор (cond ? a : b) для отображения ❌, если isPacked не является true.
*/

function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  )
}

export default function Profile() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  )
}
