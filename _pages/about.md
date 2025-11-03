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
  
**Papers (peer-reviewed)：**

1) <u>K. Chen</u>, E. H. Fukuda. Riemannian conditional gradient methods for composite optimization problems. To appear in *Computational and Applied Mathematics,* 2025. [[arXiv]](https://doi.org/10.48550/arXiv.2412.19427)

2) <u>K. Chen</u>, E. H. Fukuda, and H. Sato. Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds with retraction and vector transport. *Applied Mathematics and Computation,* vol. 486, p. 129001, 2025. [doi: 10.1016/j.amc.2024.129001.](https://www.sciencedirect.com/science/article/pii/S0096300324004624)
  
3) <u>K. Chen</u>, E. H. Fukuda and N. Yamashita. A proximal gradient method with Bregman distance in multi-objective optimization. *Pacific Journal of Optimization*. 2024, 20(4): 809-826.  [doi: 10.61208/pjo-2024-012.](https://doi.org/10.61208/pjo-2024-012) [[Access]](http://yokohamapublishers.jp/online2/oppjo/vol20/p809.html)


**Preprint：**


1) M. M. Alves, <u>K. Chen</u>, E. H. Fukuda. An inertial iteratively regularized extragradient method for bilevel variational inequality problems. *Submitted*, 2025. [[arXiv]](https://arxiv.org/abs/2507.16640)

  
</section>

<section id="talks" style="padding-top: 60px;">
  <h2>Talks and presentations</h2>
  <!-- {% if site.talkmap_link == true %}
    <p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>
  {% endif %} -->
  
  {% for post in site.talks reversed %}
    {% include archive-single-talk.html %}
  {% endfor %}

*  <u>Kangming Chen</u>, Maicon Marques Alves, Ellen Hidemi Fukuda, An inertial iteratively regularized extragradient method for bilevel variational inequality problems, The 2025 autumn national conference of Operations Research Society of Japan (ORSJ), Hiroshima, Japan, 2025/09/12. [[Detail]](https://orsj.org/2025f/) 
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Nobuo Yamashita, Proximal Gradient Method for Multi-Objective Optimization with Bregman Distance, Workshop: ‘‘Optimization: Modeling and Algorithms’’, Tokyo, Japan,  2025/03/17. [[Detail]](http://grips-tsuchiya.blue.coocan.jp/sympo2025.html)
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Riemannian generalized conditional gradient methods, 2024 Annual Meeting of the Japan Society for Industrial and Applied Mathematics (JSIAM), Kyoto, Japan, 2024/09/15. [[Detail]](https://conference.wdc-jp.com/jsiam/2024/program/program_flash.html) 
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Generalized Conditional Gradient Method with Three Step Size Strategies on Riemannian Manifolds, The 2024 autumn national conference of Operations Research Society of Japan (ORSJ), Nagoya, Japan, 2024/09/10. [[Detail]](https://orsj.org/nc2024f/) [[Abstract]](https://kangming.tech/files/OR2024autumn_Abstract_Chen.pdf)
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Riemannian conditional gradient methods for composite optimization problems, The 17th SIAM East Asian Section Conference, University of Macau, Macao SAR, China, 2024/06/30. [[Detail]](https://www.easiam2024.org/)
*  <u>Kangming Chen</u>, Multiobjective Proximal gradient methods on Riemannian manifolds, The 20th Joint Meeting of the Japan Society for Industrial and Applied Mathematics (JSIAM) Activity Groups, Nagaoka, Japan, 2024/03/04. [[Detail]](https://jsiam.org/union2024) 
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Hiroyuki Sato, Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds, The 2023 autumn national conference of Operations Research Society of Japan (ORSJ), Nishinomiya, Japan, 2023/09/15. [[Detail]](https://orsj.org/nc2023f/) [[Abstract]](https://kangming.tech/files/OR2023_Abstract_Chen_Kangming.pdf)
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Hiroyuki Sato, Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds, RIMS workshop on Mathematical Optimization 2023, Kyoto, Japan, 2023/08/29. [[Detail]](http://infoshako.sk.tsukuba.ac.jp/~maiko/RIMS2023/)
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Hiroyuki Sato, Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds, The 10th International Congress on Industrial and Applied Mathematics (ICIAM), Tokyo, Japan, 2023/08/23. [[Detail]](https://iciam2023.org/registered_data?id=01064)
*  <u>Kangming Chen</u>, Ellen Hidemi Fukuda, Nobuo Yamashita, A proximal gradient method with Bregman distance in multi-objective optimization, International Workshop on Continuous Optimization, Tokyo (online), Japan,  2022/12/04. [[Detail]](http://www.opt.c.titech.ac.jp/DecemberWorkshop/schedule.html)


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
