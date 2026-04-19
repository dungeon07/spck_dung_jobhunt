// Chờ trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // 1. Kiểm tra đăng nhập
    if (!currentUser) {
        if (window.location.pathname.includes('profile.html')) {
            alert("Bạn cần đăng nhập để vào trang này!");
            window.location.href = 'login.html';
        }
        return;
    }

    // 2. Hàm hiển thị dữ liệu lên trang Profile
    function renderProfile() {
        const sideName = document.getElementById('sideName');
        if(!sideName) return; // Nếu không ở trang profile thì dừng

        document.getElementById('sideName').innerText = currentUser.name;
        document.getElementById('sideEmail').innerText = currentUser.email;
        document.getElementById('sidePhone').innerText = currentUser.phone || "Chưa cập nhật";
        document.getElementById('sideTitle').innerText = currentUser.title || "Chưa cập nhật tiêu đề";
        
        document.getElementById('editName').value = currentUser.name;
        document.getElementById('editPhone').value = currentUser.phone || "";
        document.getElementById('editTitle').value = currentUser.title || "";

        // Hiển thị nút xem CV nếu đã có dữ liệu
        if(currentUser.cvData) {
            document.getElementById('cvStatus').classList.remove('d-none');
            document.getElementById('cvFileName').innerText = currentUser.cvName;
        }
    }
    renderProfile();

    // 3. Xử lý Lưu thông tin cá nhân
    const profileForm = document.getElementById('profileForm');
    if(profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            currentUser.name = document.getElementById('editName').value;
            currentUser.phone = document.getElementById('editPhone').value;
            currentUser.title = document.getElementById('editTitle').value;

            saveData(currentUser);
            alert("Đã cập nhật thông tin thành công!");
            renderProfile();
        });
    }

    // 4. Xử lý Upload CV (Chuyển sang Base64)
    const cvInput = document.getElementById('cvInput');
    if(cvInput) {
        cvInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;

            if (file.type !== "application/pdf") {
                alert("Vui lòng chỉ chọn file PDF!");
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                alert("File quá nặng! Vui lòng chọn file dưới 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                currentUser.cvName = file.name;
                currentUser.cvData = event.target.result; // Đây là chuỗi Base64 của file

                saveData(currentUser);
                alert("Tải lên CV thành công!");
                location.reload();
            };
            reader.readAsDataURL(file);
        });
    }
});

// Hàm hỗ trợ lưu dữ liệu vào LocalStorage (Cập nhật cả currentUser và danh sách users)
function saveData(userObj) {
    localStorage.setItem('currentUser', JSON.stringify(userObj));
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(u => u.email === userObj.email);
    if(index !== -1) {
        users[index] = userObj;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// HÀM XEM CV (Dùng cho nút Xem)
function viewCV() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.cvData) {
        alert("Không tìm thấy dữ liệu CV!");
        return;
    }

    const newTab = window.open();
    newTab.document.write(`
        <html>
            <head><title>Xem CV: ${user.cvName}</title></head>
            <body style="margin:0;display:flex;justify-content:center;background:#525659;">
                <embed src="${user.cvData}" type="application/pdf" width="100%" height="100%">
            </body>
        </html>
    `);
}

// Hàm xóa CV
function removeCV() {
    if(confirm("Bạn có chắc muốn xóa CV không?")) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        delete user.cvName;
        delete user.cvData;
        saveData(user);
        location.reload();
    }
}