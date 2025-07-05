// iframe-resizer.js
document.addEventListener('DOMContentLoaded', function() {
    const formIframe = document.querySelector('.feedback-form iframe');
    formIframe.onload = function() {
        formIframe.style.height = formIframe.contentWindow.document.body.scrollHeight + 'px';
    };
});