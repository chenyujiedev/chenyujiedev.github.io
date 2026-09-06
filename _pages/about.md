---
layout: about
title: about
permalink: /
subtitle: 'Incoming PhD Student in Computer Science, <a href="https://www.ysu.ac.kr/">Youngsan University</a> · Advisor: Prof. Minpo Jung'

profile:
  align: right
  # image: prof_pic.jpg # 照片放到 assets/img/prof_pic.jpg 后取消注释
  image_circular: true
  more_info: >
    <p><strong>Yujie Chen</strong></p>
    <p>Dept. of Computer Science</p>
    <p>Youngsan University, South Korea</p>
    <p><a href="mailto:echenuiyj@gmail.com">echenuiyj@gmail.com</a></p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: true
  scrollable: true
  limit: 3
---

I am an incoming PhD student in Computer Science at **Youngsan University**, advised by Prof. Minpo Jung.
I work on **computer vision under low light** — the regime where photons are scarce, sensor noise
dominates, and the assumptions that ordinary detectors were trained on quietly stop holding.

#### What I work on

Most low-light pipelines are built in two disconnected halves. An enhancement model is trained to
produce an image a **human** would call good, and a detector is then bolted onto its output, having had
no say in what "good" meant. The detector inherits whatever the enhancer decided to amplify, including
artifacts that look fine to the eye and are actively misleading to a network.

My current work asks the question that split skips: **what should enhancement do when its only consumer
is a detector?** That is the subject of *DOLENet*, my first-author manuscript in preparation, evaluated
with multi-seed YOLOv8 experiments on ExDark, gradient-conflict analysis, and TP/FP/FN error
decomposition — the last one specifically to separate real detection gains from cosmetic ones.

My MSc thesis approached the same territory from the enhancement side: zero-reference learning, local
illumination balancing and shadow recovery, without paying for it at inference time. It introduced two
exposure-aware losses of my own design, benchmarked against Retinexformer and RUAS.

#### Research interests

- Low-light image enhancement and restoration
- Object detection under adverse imaging conditions
- Zero-reference and unsupervised supervision
- No-reference image quality assessment
- Robustness under distribution shift

#### Teaching

Before graduate study I spent four years as a **Senior Software Instructor**, independently designing and
delivering semester-long computer science courses — curriculum, lectures, labs, assignments, exams,
grading and project supervision — at roughly eleven universities and corporate programmes, to more than
a thousand learners. I also built a big-data training curriculum for **State Grid Corporation of China**.

I treat teaching as part of the work rather than a detour from it. The [teaching](/teaching/) page has
the full course list; my [CV](/cv/) has everything else.

#### Background

MSc in Computer Science from Youngsan University (GPA 4.4 / 4.5, with a 50% merit-based tuition
reduction), and a BEng in Computer Science and Technology from Concord University College, Fujian
Normal University. I teach in Mandarin Chinese and do research in English.

Email is the most reliable way to reach me.
