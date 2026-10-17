const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const statusText = document.getElementById('statusText');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('toi');
        statusText.textContent = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        body.classList.remove('toi');
        statusText.textContent = 'Đây là giao diện ở chế độ SÁNG (đang bật).';
    }
});