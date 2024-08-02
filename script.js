document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const currentCount = +counter.innerText;
        const increment = target / 100;

        if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment);
            setTimeout(() => updateCounter(counter), 15);
        } else {
            counter.innerText = target;
        }
    };

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const triggerCounters = () => {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('started')) {
                counter.classList.add('started');
                updateCounter(counter);
            }
        });
    };

    window.addEventListener('scroll', triggerCounters);
    triggerCounters();
});


// document.getElementById('imageInstallation').addEventListener('mouseover', function() {
//     document.getElementById('Text1').style.display = 'block';
// });

// document.getElementById('imageInstallation').addEventListener('mouseout', function() {
//     document.getElementById('Text1').style.display = 'none';
// });

// document.getElementById('imageFabrication').addEventListener('mouseover', function() {
//     document.getElementById('Text2').style.display = 'block';
// });

// document.getElementById('imageFabrication').addEventListener('mouseout', function() {
//     document.getElementById('Text2').style.display = 'none';
// });