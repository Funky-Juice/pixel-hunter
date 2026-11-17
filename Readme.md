# Пиксель хантер

Игра «Пиксель хантер». Автор — Сергей Иншаков. Интенсив [«Продвинутый JavaScript»](https://htmlacademy.ru/intensive/ecmascript) от HTML Academy.

## Эта ветка

`mvp-server-rewrite` (бывшая `juice`) — отдельная линия от коммита `0c551a2` (24 ноября 2016, после module 2). Работа января–февраля 2019: MVP с игровым циклом и учебным сервером.

`dependencies-update` продолжает эту линию и обновляет зависимости сборки.

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

`npm start` выполняет `gulp serve`. Сборка — в [gulpfile.mjs](gulpfile.mjs). Рабочая версия Node — 24 (в `package.json` поле `engines.node` — `>=22`).

Зависимости сборки:

- Gulp `^5.0.1`
- Babel 7 (`@babel/core` `^7.28.5`, `@babel/preset-env` `^7.28.5`)
- Webpack `^5.102.1` и `webpack-stream` `^7.0.0`
- ESLint `^8.57.1`
- `whatwg-fetch` `^3.6.20`

Учебные API 2019 года могут не отвечать.
