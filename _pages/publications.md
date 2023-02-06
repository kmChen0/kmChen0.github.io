---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

1) Gong W, Chen K, Huggins T J, et al. Risk Evaluation Based on Variable Fuzzy Sets and Information Diffusion Method. Journal of Applied Mathematics and Physics, 2020, 8(5): 821-830.

2) Huggins T J, Chen K, Gong W, et al. The razor in the waterfall: Using longitudinal data to sharpen the analysis of cascading disaster risk. IOP Conference Series: Earth and Environmental Science. IOP Publishing, 2020, 432(1): 012015.

3) Huggins, T.J.; E, F.; Chen, K.; Gong, W.; Yang, L. Infrastructural Aspects of Rain-Related Cascading Disasters: A Systematic Literature Review. Int. J. Environ. Res. Public Health 2020, 17, 5175. https://doi.org/10.3390/ijerph17145175


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
