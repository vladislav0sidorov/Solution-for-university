// 1_7_4 List with a separator
/*
Этот пример отображает знаменитое хайку Кацусики Хокусая, каждая строка которого обернута в тег <p>. Ваша задача — вставить разделитель <hr /> между каждым абзацем. Ваша результирующая структура должна выглядеть следующим образом:

<article>
    <p>I write, erase, rewrite</p>
    <hr />
    <p>Erase again, and then</p>
    <hr />
    <p>A poppy blooms.</p>
</article>

  В хайку всего три строки, но ваше решение должно работать с любым количеством строк. Обратите внимание, что элементы <hr /> появляются только между элементами <p>, а не в начале или конце!

  Это редкий случай, когда индекс в качестве ключа допустим, потому что строки стихотворения никогда не будут перестраиваться.
*/

import { Fragment } from 'react/jsx-runtime'

const poem = {
  lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.']
}

export default function RecipeList() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  )
}
