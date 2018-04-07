---
title: Полезности
tags: [linux,terminal]
---

Решил собрать наиболее часто используемые, ну или просто полезные 
команды в отдельном посте. Думаю, что будет постоянно (настолько, 
наскольно это применимо ко мне ;))
<!--more-->

## Работа с устройствами

```bash
lsblk
```
```bash
df -Th
```

## Статистика

```bash
bmon -p <interface>
```
```bash
sudo iftop -i <interface>
```

## Полезные утилиты

```bash
gpg -c <path-to-file-to-encrypt>
gpg <path-to-encrypted-file>
```
