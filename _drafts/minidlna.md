---
title: Установка и настройка miniDLNA
categories: [howto]
tags: [minidlna, ubuntu]
---

##Установка из репозитория

```bash
sudo apt install minidlna
```

##Установка из исходников

```bash
wget http://sourceforge.net/projects/minidlna/files/minidlna/1.1.2/minidlna-1.1.2.tar.gz
https://downloads.sourceforge.net/project/minidlna/minidlna/1.2.0/minidlna-1.2.0.tar.gz
```

```bash
sudo apt install libavutil-dev libavcodec-dev \
libavformat-dev libjpeg-dev libsqlite3-dev \
libexif-dev libid3tag0-dev libogg-dev \
libvorbis-dev libflac-dev checkinstall
```

##Настройка

```bash
sudo nano /etc/minidlna.conf
```
