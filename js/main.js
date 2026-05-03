/**
 * TRUNG TÂM ĐIỀU KHIỂN LOGIC - JOBHUNT PROJECT
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Tự động vẽ Header dựa trên trạng thái đăng nhập
    renderNavbar();

    // 2. Tự động kiểm tra và chạy logic cho từng trang cụ thể
    const path = window.location.pathname;

    if (path.includes('profile.html')) {
        initProfilePage();
    }

    if (path.includes('dashboard.html')) {
        initDashboardPage();
    }

    // 3. Lắng nghe sự kiện đăng ký (nếu đang ở trang login/register)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // Xử lý nút tab chuyển đổi (Bootstrap)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tab') === 'register') {
            const regTab = document.querySelector('#authTab button[data-bs-target="#registerForm"]');
            if (regTab) regTab.click();
        }
    }
});

/* =========================================
   A. QUẢN LÝ HEADER (NAVBAR) ĐỒNG NHẤT
   ========================================= */
function renderNavbar() {
    const authSection = document.getElementById('authSection');
    if (!authSection) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // Giao diện khi ĐÃ ĐĂNG NHẬP
        authSection.innerHTML = `
            <div class="dropdown">
                <a class="d-flex align-items-center text-decoration-none dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                    <div class="user-avatar me-2" style="width:35px; height:35px; background:#0d6efd; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        ${currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="fw-bold d-none d-sm-inline">${currentUser.name}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2" style="border-radius:12px;">
                    <li><a class="dropdown-item rounded-3" href="profile.html"><i class="fas fa-user-circle me-2 text-primary"></i>Hồ sơ cá nhân</a></li>
                    ${currentUser.role === 'employer' ? '<li><a class="dropdown-item rounded-3" href="dashboard.html"><i class="fas fa-chart-line me-2 text-success"></i>Dashboard NTD</a></li>' : ''}
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item rounded-3 text-danger" href="#" onclick="handleLogout(event)"><i class="fas fa-sign-out-alt me-2"></i>Đăng xuất</a></li>
                </ul>
            </div>
        `;
    } else {
        // Giao diện khi CHƯA ĐĂNG NHẬP
        authSection.innerHTML = `
            <div class="d-flex align-items-center">
                <a href="login.html" class="text-decoration-none text-dark fw-bold me-3">Đăng nhập</a>
                <a href="login.html?tab=register" class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">Đăng ký</a>
            </div>
        `;
    }
}

function handleLogout(e) {
    if (e) e.preventDefault();
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

/* =========================================
   B. XỬ LÝ ĐĂNG NHẬP & ĐĂNG KÝ
   ========================================= */

// Hàm Đăng ký
function handleRegister() {
    const name = document.getElementById('rName').value;
    const email = document.getElementById('rEmail').value;
    const pass = document.getElementById('rPass').value;
    const role = document.getElementById('rRole').value;

    if (!name || !email || !pass) return alert("Vui lòng nhập đầy đủ thông tin!");

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) return alert("Email này đã được sử dụng!");

    const newUser = { name, email, pass, role, jobsPosted: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    location.reload(); // Quay lại tab đăng nhập
}

// Hàm Đăng nhập
function handleLogin() {
    const email = document.getElementById('lEmail').value;
    const pass = document.getElementById('lPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("Chào mừng " + user.name + " đã quay trở lại!");
        window.location.href = user.role === 'employer' ? 'dashboard.html' : 'index.html';
    } else {
        alert("Email hoặc mật khẩu không chính xác!");
    }
}

/* =========================================
   C. LOGIC TRANG HỒ SƠ (PROFILE.HTML)
   ========================================= */
function initProfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    // Hiển thị dữ liệu
    document.getElementById('sideName').innerText = currentUser.name;
    document.getElementById('sideEmail').innerText = currentUser.email;
    document.getElementById('sidePhone').innerText = currentUser.phone || "Chưa cập nhật";
    document.getElementById('sideTitle').innerText = currentUser.title || "Chưa cập nhật";

    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editPhone').value = currentUser.phone || "";
    document.getElementById('editTitle').value = currentUser.title || "";

    // Xử lý CV
    if (currentUser.cvData) {
        document.getElementById('cvStatus').classList.remove('d-none');
        document.getElementById('cvFileName').innerText = currentUser.cvName;
    }

    // Sự kiện lưu form
    document.getElementById('profileForm').addEventListener('submit', function (e) {
        e.preventDefault();
        currentUser.name = document.getElementById('editName').value;
        currentUser.phone = document.getElementById('editPhone').value;
        currentUser.title = document.getElementById('editTitle').value;

        updateUserInDatabase(currentUser);
        alert("Cập nhật thành công!");
        location.reload();
    });

    // Xử lý Upload CV
    const cvInput = document.getElementById('cvInput');
    if (cvInput) {
        cvInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file && file.type === "application/pdf") {
                const reader = new FileReader();
                reader.onload = function (event) {
                    currentUser.cvName = file.name;
                    currentUser.cvData = event.target.result;
                    updateUserInDatabase(currentUser);
                    alert("Tải lên CV thành công!");
                    location.reload();
                };
                reader.readAsDataURL(file);
            } else {
                alert("Vui lòng chọn file định dạng PDF!");
            }
        });
    }
}

// Hàm xem CV
function viewCV() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const newTab = window.open();
    newTab.document.write(`<iframe src="${user.cvData}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
}

// Hàm xóa CV
function removeCV() {
    if (confirm("Bạn muốn xóa hồ sơ này?")) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        delete user.cvName;
        delete user.cvData;
        updateUserInDatabase(user);
        location.reload();
    }
}

/* =========================================
   D. LOGIC DASHBOARD (DASHBOARD.HTML)
   ========================================= */
function initDashboardPage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'employer') {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('userNameDisplay').innerText = currentUser.name;
    renderJobTable();

    // Xử lý form đăng bài
    document.getElementById('postJobForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const newJob = {
            id: Date.now(),
            title: document.getElementById('jobTitle').value,
            desc: document.getElementById('jobDesc').value,
            salary: document.getElementById('jobSalary').value,
            date: new Date().toLocaleDateString('vi-VN')
        };

        currentUser.jobsPosted = currentUser.jobsPosted || [];
        currentUser.jobsPosted.push(newJob);
        updateUserInDatabase(currentUser);

        alert("Đăng tin thành công!");
        location.reload();
    });
}

function renderJobTable() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const tableBody = document.getElementById('jobTableBody');
    const countJobs = document.getElementById('countJobs');

    if (!tableBody) return;
    tableBody.innerHTML = "";
    
    const jobs = user.jobsPosted || [];
    countJobs.innerText = jobs.length;

    jobs.forEach(job => {
        tableBody.innerHTML += `
            <tr>
                <td><span class="fw-bold">${job.title}</span></td>
                <td>${job.date}</td>
                <td><span class="badge bg-success">Đang hiển thị</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteJob(${job.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

function deleteJob(id) {
    if (confirm("Bạn muốn xóa tin tuyển dụng này?")) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        user.jobsPosted = user.jobsPosted.filter(j => j.id !== id);
        updateUserInDatabase(user);
        renderJobTable();
    }
}

/* =========================================
   E. TIỆN ÍCH DÙNG CHUNG
   ========================================= */

// Cập nhật dữ liệu User vào danh sách tổng (LocalStorage)
function updateUserInDatabase(userObj) {
    localStorage.setItem('currentUser', JSON.stringify(userObj));
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(u => u.email === userObj.email);
    if (index !== -1) {
        users[index] = userObj;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Hàm logout cho dashboard gọi trực tiếp
function logout() {
    handleLogout();
}