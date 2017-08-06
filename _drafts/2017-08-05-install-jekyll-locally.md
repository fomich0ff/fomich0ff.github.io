---
title: Как установить Jekyll локально.
bash-prompt: **user@localshost:~$**
---

Это хорошая идея установить Jekyll локально на своей машине/сервере
и проверять правильность оформления статей/постов (да и всего сайта 
целиком) перед публикацией их на всеобщее обозрение.

<!--more-->

Согласно [документации Jekyll](https://jekyllrb.com/docs/installation/) 
для установки нам понадобятся:

1. GNU/Linux, Unix, или macOS
2. Ruby версии 2.1 или выше, включая заголовочные файлы
3. RubyGems
4. GCC и Make

С первым пунктом всё понятно. У меня в наличие Ubuntu Server 16.04.3 LTS i386.
Да, всё это крутится в виртуалке. Но не суть. Первый пункт выполнен.
Переходим ко второму. 

## Ruby

Установить Ruby вместе с заголовочными файлами можно так:

```bash
sudo apt install ruby ruby-dev
```

После установки уточняем версию:

```bash
{{ bash-prompt }} ruby --version
ruby 2.3.1p112 (2016-04-26) [i386-linux-gnu]
```

## RubyGems

Здесь всё опять просто: RubyGems устанавливаются вместе с ruby. 
Проверить, что всё установилось можно так:

```bash
{{ bash-prompt }} gem -v
2.5.1
```

Если же что-то пошло не так, то установить RubyGems можно обычным
способом:

```bash
sudo apt install rubygems
```

## GCC и Make

И пять всё просто:

```bash
sudo apt install gcc make
```
Проверяем версии:

```bash
{{ bash-prompt }} gcc --version
gcc (Ubuntu 5.4.0-6ubuntu1~16.04.4) 5.4.0 20160609
Copyright (C) 2015 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

{{ bash-prompt }} make -v
GNU Make 4.1
Built for i686-pc-linux-gnu
Copyright (C) 1988-2014 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```
## Jekyll

Переходим к основной части - установке Jekyll. Мы будем следовать рекомендациям
документации и установим Jekyll с помощью RubyGems

```bash 
sudo gem install jekyll
```

Проверяем, что всё установилось

```bash
{{ bash-prompt }} jekyll --version
jekyll 3.5.1
```

## Всё установлено. Что дальше?

А дальше остаётся отдать на растерзание Jekyll'у наш сайт и посмотреть как же он 
выглядит.

Переходим в папку с сайтом и запускаем Jekyll

```bash 
{{ bash-prompt }} jekyll serve --host 0.0.0.0
Configuration file: /home/user/cool-site/_config.yml
            Source: /home/user/cool-site
       Destination: /home/user/cool-site/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 1.311 seconds.
 Auto-regeneration: enabled for '/home/user/cool-site'
    Server address: http://0.0.0.0:4000
  Server running... press ctrl-c to stop.
```

Опция ```--host 0.0.0.0```