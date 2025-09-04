---
layout: default
---

<h1>Comics</h1>

<div class="comic-gallery">
  {% for comic in site.comics %}
    <div class="comic-card">
      <a href="{{ comic.url | relative_url }}">
        <img src="{{ comic.thumbnail | relative_url }}" alt="{{ comic.title }} thumbnail">
        <div class="comic-info">
          <h2>{{ comic.title }}</h2>
          <p>{{ comic.date | date: "%B %d, %Y" }}</p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
