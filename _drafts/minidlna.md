---
title: Установка и настройка miniDLNA
categories: [howto]
tags: [minidlna, ubuntu]
---

##Установка из репозитория

```shell
sudo apt install minidlna
```

##Установка из исходников

```shell
wget http://sourceforge.net/projects/minidlna/files/minidlna/1.1.2/minidlna-1.1.2.tar.gz
```

```shell
sudo apt install libavutil-dev libavcodec-dev \
libavformat-dev libjpeg-dev libsqlite3-dev \
libexif-dev libid3tag0-dev libogg-dev \
libvorbis-dev libflac-dev checkinstall
```

##Настройка

```shell
sudo nano /etc/minidlna.conf
```