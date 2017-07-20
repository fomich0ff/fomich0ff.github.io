---
title: Метод научного тыка
layout: default
---
{% for post in site.posts %}
  <div class="post">
  	<div class="post-title">
  		<h2><a href="{{ post.url }}">{{ post.title }}</a> <span class="author">{{ post.author }}</span></h2> 
  		<h3>{{ post.date | date_to_string }}</h3>
  	</div>
  	
  	<div class="post-body">
  	  {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
  	</div>
  </div>
{% endfor %}