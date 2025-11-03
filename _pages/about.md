---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am Kangming Chen, come from China. Now I am a PhD student in the [System Optimization Lab](http://www-optima.amp.i.kyoto-u.ac.jp/) at [Kyoto University](https://www.kyoto-u.ac.jp/) under the supervision of Prof. [Ellen Hidemi Fukuda](http://www-optima.amp.i.kyoto-u.ac.jp/staff_website/ellen/).

<!-- Previously, my research focused on multi-objective optimization. Currently, I am also working on optimization algorithms on manifolds.
I've been working on Manifold optimization recently. 
My research is currently centered around exploring vector optimization on Riemannian manifolds. This exploration notably includes the application and advancement of conjugate, proximal, and conditional gradient methods. --> 

Interests: Continuous Optimization, Multiobjective Optimization, Manifold Optimization, Bilevel Optimization.

<!--I am actively seeking assistant professor or postdoctoral positions to further my research career. I am passionate about continuing my work in optimization, mathematical engineering, and related fields and am eager to contribute to and collaborate with a dynamic research team. Please feel free to contact me.--> 
I am actively seeking assistant professor or postdoctoral positions to further my research career. My interests lie in continuing my work in optimization, computational mathematics, and related fields such as artificial intelligence, machine learning, data science, operations research, and mathematical engineering. I am eager to contribute to and collaborate with a dynamic research team. Please feel free to contact me.



<section id="publications" style="padding-top: 60px;">
  <h2>Publications</h2>
  {% if author.googlescholar %}
    You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
  {% endif %}
  
  {% include base_path %}
  
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
</section>

<section id="talks" style="padding-top: 60px;">
  <h2>Talks and presentations</h2>
  {% if site.talkmap_link == true %}
    <p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>
  {% endif %}
  
  {% for post in site.talks reversed %}
    {% include archive-single-talk.html %}
  {% endfor %}
</section>

<!-- <section id="teaching" style="padding-top: 60px;">
  <h2>Teaching</h2>
  {% include base_path %}
  
  {% for post in site.teaching reversed %}
    {% include archive-single.html %}
  {% endfor %}
</section> -->

<!-- <section id="cv" style="padding-top: 60px;">
  <h2>CV</h2>
  </section> -->

<!-- <section id="blog-posts" style="padding-top: 60px;">
  <h2>Blog Posts</h2>
  {% for post in site.posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</section> -->

<!-- <section id="guide" style="padding-top: 60px;">
  <h2>Guide</h2>
  </section> -->
