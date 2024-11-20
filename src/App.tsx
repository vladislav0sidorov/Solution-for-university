// 1_6_2 Show the item importance with &&
/*
В этом примере каждый Item получает числовой параметр importance. Используйте оператор &&, чтобы отобразить "(Важность: X)" курсивом, но только для тех элементов, которые имеют ненулевую важность. В итоге ваш список предметов должен выглядеть следующим образом:

- Космический скафандр (Важность: 9).
- Шлем с золотым листом
- Фотография Тама (Важность: 6)

Не забудьте добавить пробел между двумя метками!
*/

function Item({ name, importance }: { name: string; importance: number }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && <em> (Важность: {importance})</em>}
    </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  )
}
