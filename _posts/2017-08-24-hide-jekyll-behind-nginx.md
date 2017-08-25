---
title: Прячем Jekyll за nginx
tags: [jekyll, nginx]
---

В предыдущих статьях ([1]({% post_url 2017-08-05-install-jekyll-locally%}), 
[2]({% post_url 2017-08-17-run-jekyll-as-a-daemon%})) мы установили Jekyll
локально и настроили его автозапуск в качестве демона. Всё замечательно
работает (по крайней мере, у меня ;)), однако хочется большего: например 
не вспоминать всякий раз на каком порту он висит, а просто обращаться к 
серверу по имени и чтоб он возвращал нам наш блог. Ну вот как-то так
{% include image.html src="screenshot.png" alt="Screenshot" %}

Давайте сразу договоримся о начальных данных:
1. Имеем виртуальную (в моём случае) или отдельную машину (web-server) с
   установленным на ней Jekyll. В принципе и наличие одной машины подойдёт. 
   Тут важна концепция, а не детали.
2. 10 минут свободного времени.
3. Желание.

А больше ничего и не потребуется ;).

Начнём.
<!--more-->

### Установка и настройка

1. Устанавливаем [nginx](http://nginx.org/ru/).
   ```bash
   sudo apt install nginx
   ```
2. Убеждаемся, что ```systemd``` модуль ```nginx.service``` существует
   и активирован
   ```bash 
   sudo systemctl enable nginx.service
   sudo service nginx restart
   ```
3. Создаём конфиг для нашего сервера
   ```bash
   sudo nano /etc/nginx/sites-available/web-server
   ```
   с содержимым
   ```nginx
   server {
      listen  80;
      server_name web-server;
      location / {
          proxy_pass http://localhost:4000/;
      }
   }
   ```
4. Добавляем наш вновь созданный сервер в группу активных серверов
   ```bash
   sudo ln -s /etc/nginx/sites-enabled/web-server /etc/nginx/sites-available/web-server
   ```
   и перезапускаем ```nginx```
   ```bash
   sudo service nginx restart
   ```
5. Необходимо модифицировать наш ```jekyll.service```, 
    чтоб он отдавал контент только локально (а не каждому проходимцу). 
    1. Открываем модуль
    ```bash
    sudo nano /lib/systemd/system/jekyll.service
    ```
    2. Убираем параметр ```--host 0.0.0.0```
    3. Перезагружаем ```systemd``` 
       ```bash  
       sudo systemctl daemon-reload
       ```
    4. Перезапускаем ```Jekyll```
        ```bash
        sudo service jekyll restart
        ```

### Как проверить, что всё работает

Проверить всё можно довольно просто: откройте браузер и 
перейдите по ссылке [http://web-server](http://web-server). 
Если всё настроено верно, то откроется ваш блог/сайт. А если 
не открылся то вот пара возможных причин:

1. Ваша клиентская машина не может найти серверную.
    Убедиться в этом можно пропинговав сервер с клиента 
    по имени
    ```bash
    ping web-server
    ```
    Для пущей уверенности стоит убедиться, что по IP 
    сервер всё же доступен
    ```bash
    ping <ip сервера>
    ```
    Починить эту проблему можно достаточно просто: 
    внесите IP адрес и имя сервера в клиентский ```/etc/hosts```
2. ```nginx``` настроен неверно. Например файл конфигурации 
    с ошибками или просто забыли добавить свой конфиг в активные 
    сервера и перезагрузить ```nginx```

Ну а если всё правильно и всё-равно не работает, то тут может быть 
всё, что угодно. Пишите, будем разбираться.