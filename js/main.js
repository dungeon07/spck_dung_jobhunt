// js/main.js

// 1. Hàm Đăng ký
function handleRegister() {
    const name = document.getElementById('rName').value;
    const email = document.getElementById('rEmail').value;
    const pass = document.getElementById('rPass').value;
    const role = document.getElementById('rRole').value;

    if (!name || !email || !pass) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Lấy danh sách user cũ từ localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra email đã tồn tại chưa
    const isExisted = users.some(user => user.email === email);
    if (isExisted) {
        alert("Email này đã được đăng ký!");
        return;
    }

    // Thêm user mới
    const newUser = { name, email, pass, role };
    users.push(newUser);

    // Lưu lại vào localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    
    // Chuyển sang tab đăng nhập bằng Bootstrap API
    const loginTab = new bootstrap.Tab(document.querySelector('#authTab button[data-bs-target="#loginForm"]'));
    loginTab.show();
}

// 2. Hàm Đăng nhập
function handleLogin() {
    const email = document.getElementById('lEmail').value;
    const pass = document.getElementById('lPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm user khớp email và password
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        // Lưu thông tin user đang đăng nhập vào session (localStorage)
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("Đăng nhập thành công!");

        // Điều hướng dựa trên vai trò
        if (user.role === 'employer') {
            window.location.href = 'dashboard.html';
        } else {
            window.location.href = 'index.html';
        }
    } else {
        alert("Email hoặc mật khẩu không chính xác!");
    }
}

// 3. Hàm Đăng xuất
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// 4. Kiểm tra trạng thái đăng nhập khi tải trang (hiển thị tên user lên navbar)
window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authLinks = document.getElementById('authLinks'); // Cần thêm id này vào navbar trong index.html

    if (currentUser && authLinks) {
        authLinks.innerHTML = `
            <li class="nav-item"><span class="nav-link text-dark">Chào, <b>${currentUser.name}</b></span></li>
            <li class="nav-item"><a class="btn btn-outline-danger ms-2" onclick="logout()">Đăng xuất</a></li>
        `;
    }
}