let form = document.getElementById('form');

let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');
let errorConfirmPassword = document.querySelector('.error-confirm-password');

form.onsubmit = function (e) {
  e.preventDefault();

  // Lấy danh sách users mới nhất từ LocalStorage mỗi lần submit
  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (validateData(form, users)) {
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      email: form.email.value.trim(),
      password: form.password.value,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Thêm thông báo thành công và reset form
    alert('Đăng ký tài khoản thành công!');
    form.reset();
  }
};

function validateData(form, users) {
  let check = true;
  const emailValue = form.email.value.trim();

  // 1. Validate Email
  if (emailValue === '') {
    errorEmail.innerText = 'Email không được để trống';
    check = false;
  } else if (!validEmail(emailValue)) {
    errorEmail.innerText = 'Email không hợp lệ';
    check = false;
  } else if (users.some((u) => u.email === emailValue)) {
    // BỔ SUNG: Kiểm tra email đã tồn tại trong LocalStorage
    errorEmail.innerText = 'Email này đã tồn tại trên hệ thống';
    check = false;
  } else {
    errorEmail.innerText = '';
  }

  // 2. Validate Password
  if (form.password.value === '') {
    errorPassword.innerText = 'Password không được để trống';
    check = false;
  } else if (!validPassword(form.password.value)) {
    errorPassword.innerText =
      'Mật khẩu phải từ 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt';
    check = false;
  } else {
    errorPassword.innerText = '';
  }

  // 3. Validate Confirm Password
  if (form.confirmPassword.value === '') {
    errorConfirmPassword.innerText = 'Xác nhận mật khẩu không được để trống';
    check = false;
  } else if (form.password.value !== form.confirmPassword.value) {
    errorConfirmPassword.innerText = 'Xác nhận mật khẩu không trùng khớp';
    check = false;
  } else {
    errorConfirmPassword.innerText = '';
  }

  return check;
}

function validEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}

//Email: nguyenvana@gmail.com
//Password: Abc@1234
//Email: nguyenvanc@gmail.com
//Password: Abc@1234