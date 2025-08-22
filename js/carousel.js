let currentIndex = 1;

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const dots = document.querySelectorAll('.dot');
    const videos = document.querySelectorAll('.carousel-item video');

    // 更新滑动
    carouselInner.style.transform = `translateX(-${currentIndex * 110}%)`;

    // 更新圆点状态
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    // 控制视频播放
    videos.forEach((video, index) => {
        video.currentTime = 0; // 从头播放
        if (index === currentIndex) {
            video.play();         // 播放视频
        } else {
            video.pause();        // 暂停其他视频
        }
    });
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function gotoSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function createDots() {
    const dotsContainer = document.querySelector('.dots-container');
    const carouselItems = document.querySelectorAll('.carousel-item');

    // 清空容器（防止重复生成）
    dotsContainer.innerHTML = '';

    // 遍历生成圆点
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => gotoSlide(index); // 绑定跳转函数
        dotsContainer.appendChild(dot);
    });
}

// 初始化
createDots();
updateCarousel();
