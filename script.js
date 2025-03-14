document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            smoothScroll(target, 1000); 
        });
    });

    
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        document.querySelectorAll('section').forEach(function(section) {
            var top = section.offsetTop - 100; 
            var bottom = top + section.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < bottom) {
                links.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

function openWin() {
    alert("ส่งข้อมูลสำเร็จ ขอบคุณสำหรับความคิดเห็นครับ")
  }