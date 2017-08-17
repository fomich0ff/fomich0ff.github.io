---
title: Как подружить Jekyll с systemd
tags: [jekyll, ubuntu, systemd]
read-more: Обсудить...
---

Это просто!

1. Необходимо создать файл ```/lib/systemd/system/jekyll.service```
   ```bash
   sudo nano /lib/systemd/system/jekyll.service
   ```
   Содержимое файла:
   ```ini
   [Unit]
   Description=Jekyll Daemon
   After=syslog.target network.target

   [Service]
   Type=simple
   Restart=always
   StandardOutput=syslog
   StandardError=syslog
   SyslogIdentifier=jekyll
   ExecStart=/usr/local/bin/jekyll serve --source /www/jekyll/src --destination /www/jekyll/dst --host 0.0.0.0
   ```
   Замените ```--source``` и ```--destination``` на свои пути.
   В папке ```--source``` должны лежать исходники сайта. В ```--destination``` будет 
   сложен результат компиляции.
2. Необходимо активировать наш новый сервис
   ```bash
   sudo systemctl enable jekyll
   ```
3. ...и можно запускать
   ```bash
   sudo service jekyll start
   ```

Ну и напоследок: если интересно следить за тем, как там ```Jekyll``` 
ворочает файлами, то сделать это можно заглянув в syslog
```bash 
cat /var/log/syslog | grep jekyll | tail
```
Ну или с автообновлением:
```bash
watch 'cat /var/log/syslog | grep jekyll | tail'
```
<!--more-->