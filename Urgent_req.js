document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.request-form');
    const uploadBtn = document.querySelector('.upload-btn');
    const overlay = document.getElementById('successOverlay');
    const closeBtn = document.querySelector('.close-btn');

    uploadBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*,.pdf';
        input.click();

        input.onchange = function() {
            console.log(input.files);
        };
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });
});
