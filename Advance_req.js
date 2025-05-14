document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.request-form');
    const uploadBtn = document.querySelector('.upload-btn');

    uploadBtn.addEventListener('click', function() {
        // Add file upload functionality here
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*,.pdf';
        input.click();

        input.onchange = function() {
            // Handle selected files
            console.log(input.files);
        };
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
    });
});
