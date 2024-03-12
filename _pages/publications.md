---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

**Preprint：**

1) <u>K. Chen</u>, E. H. Fukuda, and H. Sato, Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds with retraction and vector transport, submitted, 2024.
2) 
3) <u>K. Chen</u>, E. H. Fukuda and N. Yamashita. A proximal gradient method with Bregman distance in multi-objective optimization. To appear in *Pacific Journal of Optimization*, 2023.

<!-- 
**Papers：**

1) Gong W, <u>Chen K</u>, Huggins T J, et al. Risk Evaluation Based on Variable Fuzzy Sets and Information Diffusion Method. Journal of Applied Mathematics and Physics, 2020, 8(5): 821-830.

2) Huggins T J, <u>Chen K</u>, Gong W, et al. The razor in the waterfall: Using longitudinal data to sharpen the analysis of cascading disaster risk. IOP Conference Series: Earth and Environmental Science. IOP Publishing, 2020, 432(1): 012015.

3) Huggins T J, E F, <u>Chen K</u>, Gong W, Yang L. Infrastructural Aspects of Rain-Related Cascading Disasters: A Systematic Literature Review. Int J Environ Res Public Health. 2020, 17(14):5175.
 -->
**Master's thesis：**

[A Proximal Gradient Method with Bregman Distance in Multi-objective Optimization](http://www-optima.amp.i.kyoto-u.ac.jp/papers/master/2022_master_chen.pdf)


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
