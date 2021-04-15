# Game TD-101

## Игра

Tower Defense - Задача игрока расправиться с наступающими врагами, до того, как они пересекут карту, с помощью строительства башен, атакующих их, когда те проходят вблизи

_Плюсы_

- свобода в графике и эффектах
- динамичный геймплей
- простота управления
- нет мультиплеера (если будет нужна то реализация ближе к пошаговым)

_Минусы_

- сложность в реализации механики стрельбы
- большой объем в реализации контента
- балансировка

## Сеттинг, графика, интерфейс

Киберпанк

## Название игры

TD101

## Рефы игры

todo

## Ссылки

-
- [HEROKU](https://yandex-praktikum-td.herokuapp.com/#/)
- [TRELLO](https://trello.com/b/EGSFMP1M/game-td101)
- [GITHUB](https://github.com/SPB-101/game-td101)
- [FIGMA](https://www.figma.com/file/DRsqLtFDYNSKpIUbugJlMZ/Game-TD101)

## Структура

```
├───client
│   ├───dist                      -
│   ├───public                    -
│   │   └───locales               -
│   └───src                       -
│       ├───api                   -
│       ├───assets                -
│       ├───component             -
│       ├───constants             -
│       ├───game                  -
│       ├───pages                 -
│       ├───router                -
│       ├───store                 -
│       │   ├───actions           -
│       │   ├───reducers          -
│       │   │   ├───collections   -
│       │   │   └───widgets       -
│       │   ├───selectors         -
│       │   │   ├───collections   -
│       │   │   └───widgets       -
│       │   └───thunks            -
│       │       ├───collections   -
│       │       └───widgets       -
│       ├───styles                -
│       └───utils                 -
│           └───validation        -
├───docs                          -
└───server
    ├───constants                 -
    ├───locales                   -
    ├───middleware                -
    ├───models                    -
    ├───routes                    -
    ├───test                      -
    └───utils                     -
```

## Скрипты

### Общие

**Установка**

```
npm i
```

**Деплой**

```
npm run deploy
```

**Покрытие тестами**

```
todo
```

### Клиент

**Запуск для сборки клинта**

```
npm run build
```

**Запуск для разработки клинта**

```
npm run client:dev
```

**Запуск линтера и форматтера**
\*install `npm i -g eslint`

```
npm run client:fix
```

**Тесты**

```
todo
```

### Сервер

**Запуск сервера**

```
npm run server
```

**Запуск для разработки сервера**

```
npm run server:dev
```

**Тесты**

```
todo
```

**Сборка документации**

```
todo
```

## Команда

|                                                                          |                                                                          |                                                                          |                                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ментор                                                                   | участник                                                                 | участник                                                                 | участник                                                                 |
| Евгений Городилов                                                        | Никита Строганов                                                         | Катя Блинова                                                             | Денис Спиридонов                                                         |
| ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01BNH82BQE-7960a19b00f5-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U0145PCPD6E-7b734e83f3cb-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01EAA8G8JW-eb48a0b0c1f8-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01H4QNST29-ff1fc8c06772-512) |
