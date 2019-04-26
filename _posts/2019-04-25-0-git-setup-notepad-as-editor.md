---
title: Как поменять редактор в git
tags: [git,windows,vs code]
---

Если вдруг есть такие люди как я, которые нифига не могут запомнить "несложные" команды vim 
(или что там за редактор по-умолчанию в git?), то вот простая инструкция как поменять его (vim)
на `notepad`:

``` bash
git config --global core.editor notepad
```

Я это делаю в Windows для VS Code, но такой подход работает везде.

Вот [тут](https://help.github.com/en/articles/associating-text-editors-with-git) можно и другие 
примеры посмотреть.