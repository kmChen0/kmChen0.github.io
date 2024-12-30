---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<!-- 
**Preprint：**

 -->


**Papers (peer-reviewed)：**

1) <u>K. Chen</u>, E. H. Fukuda, and H. Sato. Nonlinear conjugate gradient method for vector optimization on Riemannian manifolds with retraction and vector transport. *Applied Mathematics and Computation,* vol. 486, p. 129001, 2025. [doi: 10.1016/j.amc.2024.129001.](https://www.sciencedirect.com/science/article/pii/S0096300324004624)
  
2) <u>K. Chen</u>, E. H. Fukuda and N. Yamashita. A proximal gradient method with Bregman distance in multi-objective optimization. *Pacific Journal of Optimization*. 2024, 20(4): 809-826.  [doi: 10.61208/pjo-2024-012.](https://doi.org/10.61208/pjo-2024-012)


<!-- 
**Papers：**

1) Gong W, <u>Chen K</u>, Huggins T J, et al. Risk Evaluation Based on Variable Fuzzy Sets and Information Diffusion Method. Journal of Applied Mathematics and Physics, 2020, 8(5): 821-830.

2) Huggins T J, <u>Chen K</u>, Gong W, et al. The razor in the waterfall: Using longitudinal data to sharpen the analysis of cascading disaster risk. IOP Conference Series: Earth and Environmental Science. IOP Publishing, 2020, 432(1): 012015.

3) Huggins T J, E F, <u>Chen K</u>, Gong W, Yang L. Infrastructural Aspects of Rain-Related Cascading Disasters: A Systematic Literature Review. Int J Environ Res Public Health. 2020, 17(14):5175.
 -->


**Preprint：**

1) <u>K. Chen</u>, E. H. Fukuda. Riemannian conditional gradient methods for composite optimization problems. *Submitted*, 2024. [https://doi.org/10.48550/arXiv.2412.19427](https://doi.org/10.48550/arXiv.2412.19427)


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
