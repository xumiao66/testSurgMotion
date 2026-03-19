// dataset-animation.js
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.count');
  const cards = document.querySelectorAll('.info-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 数字滚动
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = target < 30 ? 3000 : 2000; // 小数字用更长时间
          const steps = Math.ceil(duration / 20);
          const increment = target / steps;

          let current = 0;
          const updateCount = () => {
            current += increment;
            if (current < target) {
              counter.innerText = Math.ceil(current);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });


        // 卡片淡入
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          }, i * 150);
        });

        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('#dataset-distribution'));
  
});
