## Версия 1.0.0

### утечек памяти не обнаружено.

Переходя по страницам и прогоняя стандартные пользовательские сценарии корректно создаются и удаляются обработчики событий и ноды.

![memory-react](./media/memory-react-1.0.0.png)

Во время игры память выделяется и освобождается равномерно количеству эффектов на сцене, каждая волна увеличивает занимаемой памяти но когда волна заканчивается - сборщик корректно всё удаляет.

![memory-game](./media/memory-game-1.0.0.png)

## Версия 1.0.3

### была обнаружена утечка памяти - _устранена_

Возникала утечка при запуске игры и потом переходе на другую страницу. Был добавлен синглтон `world` что бы в нем всегда хранить состояние игры и иметь доступ вне игры для очистки.
