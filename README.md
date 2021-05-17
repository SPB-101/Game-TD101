# Game TD-101

## Игра

Tower Defense - Задача игрока построить оборону из башен на пути вражеских сил и не дать им пройти.

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

## Начать вклад в проект

- [Документация проекта](./docs/README.md)

### Общие скрипты

#### Установка

```
npm i
```

#### Деплой

```
npm run deploy
```

#### Покрытие тестами

```
todo
```

#### Сборка документации

```
todo
```

### Клиент

**Запуск линтера и форматтера**
необходима установка глобально eslint `$ npm i -g eslint`

```
npm run client:fix
```

**Запуск тестов**

```
npm test
```

**Обновление снапшотов**

```
npm test -- -u
```

### Клиент и сервер

**Запуск**

```
npm run build:prod && npm run start:server
```

**Запуск для разработки**

```
npm start
```

## Команда

|                                                                          |                                                                          |                                                                          |                                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ментор                                                                   | участник                                                                 | участник                                                                 | участник                                                                 |
| Евгений Городилов                                                        | Никита Строганов                                                         | Катя Блинова                                                             | Денис Спиридонов                                                         |
| ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01BNH82BQE-7960a19b00f5-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U0145PCPD6E-7b734e83f3cb-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01EAA8G8JW-eb48a0b0c1f8-512) | ![ava](https://ca.slack-edge.com/TPV9DP0N4-U01H4QNST29-ff1fc8c06772-512) |
