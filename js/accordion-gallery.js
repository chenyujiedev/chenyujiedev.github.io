        // 优化后的初始化函数
        function initAccordionGallery() {
            // 添加重试机制
            let retryCount = 0;
            const maxRetries = 5;
            function tryInit() {
                const panels = document.querySelectorAll('.acc-panel');
                const gallery = document.querySelector('.acc-gallery-container');
                if (panels.length > 0 && gallery) {
                    // 清除之前的激活状态
                    panels.forEach(panel => panel.classList.remove('acc-active'));
                    // 绑定鼠标事件
                    panels.forEach(panel => {
                        panel.addEventListener('mouseenter', () => {
                            panels.forEach(p => p.classList.remove('acc-active'));
                            panel.classList.add('acc-active');
                        });
                    });
                    gallery.addEventListener('mouseleave', () => {
                        panels.forEach(p => p.classList.remove('acc-active'));
                        panels[0].classList.add('acc-active');
                    });
                    // 默认激活第一个
                    panels[0].classList.add('acc-active');

                    console.log('Gallery initialized successfully');
                } else if (retryCount < maxRetries) {
                    retryCount++;
                    setTimeout(tryInit, 200);
                } else {
                    console.warn('Failed to initialize gallery after retries');
                }
            }
            // 使用requestAnimationFrame确保布局稳定
            requestAnimationFrame(tryInit);
        }
        // 使用window.onload确保所有资源加载完成
        window.onload = initAccordionGallery;

        // PJAX 回调支持
        document.addEventListener('pjax:complete', function() {
            // 添加延迟确保新内容完全渲染
            setTimeout(initAccordionGallery, 100);
        });

        // 初始加载
        initAccordionGallery();