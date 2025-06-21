function initAccordionGallery() {
  const panels = document.querySelectorAll('.acc-panel');

  if (panels.length === 0) return; // 防止非画廊页面出错

  panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      panels.forEach(p => p.classList.remove('acc-active'));
      panel.classList.add('acc-active');
    });
  });

  const gallery = document.querySelector('.acc-gallery-container');
  gallery.addEventListener('mouseleave', () => {
    panels.forEach(p => p.classList.remove('acc-active'));
    panels[0].classList.add('acc-active');
  });

  // 默认激活第一个
  panels[0].classList.add('acc-active');
}

// 首次加载
document.addEventListener('DOMContentLoaded', initAccordionGallery);

// PJAX 回调支持（针对 Hexo Butterfly、Matery、Fluid 等）
document.addEventListener('pjax:complete', initAccordionGallery);
