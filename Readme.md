# Пиксель хантер

Игра «Пиксель хантер». Автор — Сергей Иншаков. Интенсив [«Продвинутый JavaScript»](https://htmlacademy.ru/intensive/ecmascript) от HTML Academy.

## Эта ветка

`mvp-server-rewrite` (бывшая `juice`) — отдельная линия от коммита `0c551a2` (24 ноября 2016, после module 2). Работа января–февраля 2019: MVP с игровым циклом и учебным сервером.

## Архитектура

`Application` переключает экраны. Игровой цикл живёт в `GamePresenter` ([js/screen/game-screen.js](js/screen/game-screen.js)), состояние — в `GameModel` ([js/data/game-model.js](js/data/game-model.js)), разметка — во `view/`.

## Данные

Запросы через `whatwg-fetch` в [js/actions.js](js/actions.js):

- вопросы — `https://es.dump.academy/pixel-hunter/questions`;
- отправка результата и чтение статистики — `https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats`.

Если вопросы не загрузились, показывается экран ошибки. Картинки уровней подготавливает адаптер в `js/image-loader/`.

## Отличие от `master`

На `master` шаблоны лежат в `js/template-modules/`, вопросы — в локальном `js/game-data.js`, плюс юнит-тесты module 4. Этих коммитов в данной ветке нет: игровой цикл написан заново и ходит на сервер.

## Запуск

```
npm install
npm start
```

`npm start` выполняет `gulp clean && gulp serve`. В `package.json` указан Node `6.7.0`. Учебные API 2019 года могут не отвечать.
