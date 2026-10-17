const form = document.getElementById('registerForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function setError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    formGroup.className = 'form-group error';
    const feedback = formGroup.querySelector('.feedback');
    feedback.textContent = `✗ ${message}`;
}

function setSuccess(inputElement) {
    const formGroup = inputElement.parentElement;
    formGroup.className = 'form-group success';
    const feedback = formGroup.querySelector('.feedback');
    feedback.textContent = '✓ Hợp lệ';
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let isValid = true;

    if (fullNameInput.value.trim() === '') {
        setError(fullNameInput, 'Họ và tên không được để trống');
        isValid = false;
    } else {
        setSuccess(fullNameInput);
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        setError(emailInput, 'Email không được để trống');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Email không hợp lệ (thiếu tên miền)');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    if (passwordInput.value.length < 6) {
        setError(passwordInput, 'Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    } else {
        setSuccess(passwordInput);
    }

    if (confirmPasswordInput.value === '') {
        setError(confirmPasswordInput, 'Vui lòng xác nhận mật khẩu');
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Mật khẩu xác nhận không khớp');
        isValid = false;
    } else {
        setSuccess(confirmPasswordInput);
    }

    if (isValid) {
        alert('Đăng ký tài khoản thành công!');
    }
});