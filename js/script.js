document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('feedback-btn');
    const form = document.getElementById('feedback-form');
    const closeBtn = document.getElementById('close-btn');

    btn.addEventListener('click', () => {
        form.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        form.classList.remove('active');
    });

    // Закрытие формы при клике вне её области
    window.addEventListener('click', (e) => {
        if (e.target === form) {
            form.classList.remove('active');
        }
    });
});