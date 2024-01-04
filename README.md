# 📊 Next Metrika / Яндекс.Метрика для Next

## 📦 Installation / Установка

```shell
npm i next-metrika
```

```shell
yarn add next-metrika
```

## 🔨 Usage / Использование

To use Yandex.Metrika in Next you have to create Metrika counter first. Then you can view code preview for it, you need to get ID from it.

Чтобы использовать Метрику в Next, вам понадобится сначала создать счетчик в Метрике, потом из предпросмотра кода скопировать ID.

<hr />

Use this ID as prop for component:

Используйте этот ID как параметр компонента:

```tsx
import Metrika from 'next-metrika';

const Layout: FC = () => {
  return (
    <>
      ...

      <Metrika id={123456789} /> {/* Your ID / Ваш ID */}
    </>
  )
}
```
