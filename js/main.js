// Quản lý Đăng ký
const regForm = document.getElementById('registerForm');
if(regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            name: document.getElementById('regUser').value,
            email: document.getElementById('regEmail').value,
            pass: document.getElementById('regPass').value,
            role: document.getElementById('regRole').value,
            cvName: ""
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Đăng ký thành công!");
        window.location.href = 'login.html';
    });
}

// Kiểm tra quyền truy cập
function checkRole(requiredRole) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if(!user || user.role !== requiredRole) {
        alert("Bạn không có quyền truy cập!");
        window.location.href = 'index.html';
    }
}

// Chức năng Đăng bài (Employer)
const jobForm = document.getElementById('jobForm');
if(jobForm) {
    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const jobId = document.getElementById('jobId').value || Date.now();
        
        const jobData = {
            id: jobId,
            title: document.getElementById('jobTitle').value,
            company: document.getElementById('jobCompany').value,
            desc: document.getElementById('jobDesc').value,
            owner: JSON.parse(localStorage.getItem('currentUser')).email
        };

        const index = jobs.findIndex(j => j.id == jobId);
        if(index > -1) jobs[index] = jobData; // Update
        else jobs.push(jobData); // New

        localStorage.setItem('jobs', JSON.stringify(jobs));
        window.location.href = 'dashboard.html';
    });
}

// Hiển thị thống kê và danh sách bài đăng (Employer)
function displayStats() {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const myJobs = jobs.filter(j => j.owner === currentUser.email);
    
    document.getElementById('totalJobs').innerText = myJobs.length;
    
    const list = document.getElementById('myJobsList');
    list.innerHTML = myJobs.map(job => `
        <div class="job-item">
            <h4>${job.title}</h4>
            <button onclick="window.location.href='post-job.html?id=${job.id}'">Sửa</button>
        </div>
    `).join('');
}

// Upload CV và Profile (Candidate)
function loadProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('profName').value = user.name;
    document.getElementById('profEmail').value = user.email;
    if(user.cvName) document.getElementById('cvStatus').innerText = "CV hiện tại: " + user.cvName;
}

const profileForm = document.getElementById('profileForm');
if(profileForm) {
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const fileInput = document.getElementById('cvUpload');
        
        user.name = document.getElementById('profName').value;
        if(fileInput.files.length > 0) {
            user.cvName = fileInput.files[0].name; // Chỉ lưu tên file giả lập
        }
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("Đã lưu hồ sơ!");
        loadProfile();
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}