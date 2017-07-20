---
title: Метод научного тыка
---
{% for post in site.posts %}
  <div class="entry">
  	<div class="entrytitle">
  		<h2><a href="{{ post.url }}">{{ post.title }}</a> <span class="author">{{ post.author }}</span></h2> 
  		<h3>{{ post.date | date_to_string }}</h3>
  	</div>
  	
  	<div class="entrybody">
  	  {{ post.content | split:'<!--break-->' | first }}
  	</div>
  </div>
{% endfor %}