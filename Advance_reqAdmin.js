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

    // Dropdown overlay logic
    const btn = document.getElementById('request-action-btn');
    const dropdownOverlay = document.getElementById('request-action-dropdown-overlay');
    const dropdown = document.getElementById('request-action-dropdown');

    if (btn && dropdownOverlay && dropdown) {
        dropdownOverlay.style.display = 'none';

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownOverlay.style.display = dropdownOverlay.style.display === 'block' ? 'none' : 'block';
            dropdown.focus();
        });

        dropdown.addEventListener('change', function() {
            btn.textContent = dropdown.value;
            dropdownOverlay.style.display = 'none';
        });

        document.addEventListener('mousedown', function(e) {
            if (!dropdownOverlay.contains(e.target) && e.target !== btn) {
                dropdownOverlay.style.display = 'none';
            }
        });
    }
});
