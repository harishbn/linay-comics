---
layout: default
body_class: homepage
---

<h1 class="page-title">Comics</h1>

<div class="comic-gallery">
  {% assign sorted_comics = site.comics | sort: 'date' | reverse %}
  {% for comic in sorted_comics %}
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
