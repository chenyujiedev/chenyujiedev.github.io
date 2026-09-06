# chenyujiedev.github.io

Personal academic site of **Yujie Chen** — PhD student in Computer Science at Youngsan University,
working on low-light computer vision and detection-oriented image enhancement.

Live at <https://chenyujiedev.github.io>.

Built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll). Pushing to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch.

## Where things live

| What | Where |
| :--- | :--- |
| Front page bio | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| CV content | `_data/cv.yml` |
| News items on the front page | `_news/` |
| Blog posts | `_posts/` |
| Teaching page | `_pages/teaching.md` |
| Social links | `_data/socials.yml` |
| Site-wide settings | `_config.yml` |

## Local preview

No Ruby needed if you have Docker:

```bash
docker compose up
```

Then open <http://localhost:8080>.

## History

This site previously ran on Hexo with the Butterfly theme. That version is preserved on the
`hexo-backup` branch, and its source remains in the `chenyujiedev/chenyujiedev` repository.
