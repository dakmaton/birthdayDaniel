document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box');
    var labels = document.querySelectorAll('.label');
    var endTime = new Date('2024-11-14T23:59:59').getTime();

    setInterval(function () {
        var now = new Date().getTime();
        var distance = endTime - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateBoxAndLabel(0, days, 'Días');
        updateBoxAndLabel(1, hours, 'Hors');
        updateBoxAndLabel(2, minutes, 'Mins');
        updateBoxAndLabel(3, seconds, 'Segs');

    }, 1000);

    function updateBoxAndLabel(index, value, labelText) {
        var box = boxes[index];
        var label = labels[index];
        var previousValue = parseInt(box.textContent);
        box.textContent = formatNumber(value);
        label.textContent = labelText;

        if (previousValue !== value) {
            box.classList.add('fade-effect');
            setTimeout(() => {
                box.classList.remove('fade-effect');
            }, 500);
        }
    }

    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }
});

