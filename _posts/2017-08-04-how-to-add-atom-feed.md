---
title: Как добавит Atom feed в свой блог
tags: [jekyll, github]
published: true
---
Обратимся к [Wikipedia](https://ru.wikipedia.org/wiki/Atom) для начала:

**Atom** — общее название двух связанных веб-технологий: формата для описания ресурсов на веб-сайтах и протокола для их публикации.

Формат Atom основан на XML и позволяет описывать наборы веб-ресурсов — например, новостные ленты, анонсы статей в блоге и тому подобное. Он решает те же задачи, что RSS, но возник позже и учёл многие его недостатки. Формат описан в RFC 4287 и сейчас активно поддерживается компанией Google во многих её проектах.

Итак, Atom это тот же RSS только немного другой :). Нас сейчас не интересует протокол публикации Atom. Мы сосредоточимся на формате выдачи новостной ленты Atom.

<!--more-->

Что нам понадобится:

1. Необходимо в корне своего GitHub Pages репозитория создать файл ```atom.xml``` вот с таким содержимым:

~~~HTML
---
---
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

 <title>{{ site.title }}</title>
 <link href="{{ site.url }}/atom.xml" rel="self"/>
 <link href="{{ site.url }}"/>
 <updated>{{ site.time | date_to_xmlschema }}</updated>
 <id>{{ site.url }}</id>
 <author>
   <name>{{ site.author }}</name>
   <email>{{ site.email }}</email>
 </author>

 {% for post in site.posts %}
 <entry>
   <title>{{ post.title }}</title>
   <link href="{{ site.url }}{{ post.url }}"/>
   <updated>{{ post.date | date_to_xmlschema }}</updated>
   <id>{{ site.url }}{{ post.id }}</id>
   <content type="html">{{ post.content | xml_escape }}</content>
 </entry>
 {% endfor %}

</feed>
~~~

2. В секцию ```head``` надо вставить ссылку на вновь созданный файл:

```HTML
<head>
    ...
    <link rel="alternate" type="application/atom+xml" title="{{ site.title }}" href="/atom.xml">
    ...
</head>
```

3. Добавить/обновить файл конфигурации ```_config.yml```

```YAML
...
title: Заголовок сайта
url: https://<your-user>.github.io
author: Василий Алибабаевич Али-Баба
email: vasya@somewhere.com
...
```

Ну и, конечно, никто не запрещает посмотреть как это сделано у [меня](https://github.com/fomich0ff/fomich0ff.github.io)
