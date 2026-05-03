HIỆN TẠI TÔI ĐANG BỊ LỖI TRÊN THANH HEADER Ở CÁC GIAO DIỆN CÁC TRANG NÓ KHÔNG ĐỒNG NHẤT THANH HEADER TÔI MUỐN GIAO DIỆN TRÊN THANH HEADER NÓ PHẢI ĐỒNG NHẤT CÁC TRANG TREONG WEB VÀ GIAO DIỆN THANH HEADER PHẢI ĐẸP - KHÔNG CODE RÁC KHÔNG LÀM ẢNH HƯỞNG ĐẾN CÁC CHỨC NĂNG KHÁC CỦA WEB TÔI 


CẤU TRÚC CODE HIỆN TẠI CỦA TÔI NHƯ SAO: 

```
spck-JSA13
├─ companies.html
├─ dashboard.html
├─ degital.html
├─ html
├─ index.html
├─ jobs.html
├─ js
│  └─ main.js
├─ login.html
├─ post-jobhunt.html
├─ profile.html
├─ README.md
├─ register.html
└─ style
   └─ style.css

```



CODE HIỆN TẠI CỦA TÔI NHƯ SAO 

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh Sách Công Ty - JobHunt</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style/style.css">
</head>
<body class="bg-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html"><i class="fas fa-briefcase"></i> JobHunt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="jobs.html">Việc làm</a></li>
                    <!-- Đánh dấu trang hiện tại là active -->
                    <li class="nav-item"><a class="nav-link active fw-bold text-primary" href="companies.html">Công ty</a></li>
                    <li class="nav-item"><a class="btn btn-outline-primary ms-2" href="login.html">Đăng nhập</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header tìm kiếm công ty -->
    <div class="bg-white py-5 mt-5 shadow-sm">
        <div class="container">
            <h2 class="fw-bold text-center mb-4">Khám Phá 100+ Công Ty Hàng Đầu</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Nhập tên công ty...">
                        <button class="btn btn-primary" type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Danh sách công ty -->
    <div class="container py-5">
        <div class="row g-4">
            
            <!-- Company 1 -->
            <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <!-- Ảnh bìa công ty -->
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80');">
                        <!-- Logo nhỏ -->
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://th.bing.com/th/id/OIP.K00dXLIpAnRv7ENDay8d6wHaFj?w=225&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">FPT Software</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Công nghệ thông tin</p>
                        <p class="small text-secondary line-clamp-2">
                            Môi trường làm việc chuyên nghiệp, cơ hội onsite nước ngoài, đãi ngộ hấp dẫn.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 15 vị trí</a>
                    </div>
                </div>
            </div>

            <!-- Company 2 -->
            <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=600&q=80');">
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://toppng.com/uploads/preview/viettel-vector-logo-download-free-115740601049odb446cbc.png" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">Tập đoàn Viettel</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Viễn thông / CNTT</p>
                        <p class="small text-secondary">
                            Tập đoàn công nghệ viễn thông quân đội hàng đầu Việt Nam.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 8 vị trí</a>
                    </div>
                </div>
            </div>

            <!-- Company 3 -->
            <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80');">
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://th.bing.com/th/id/OIP.YoclUhSAXQS5J-4MU8iPZAHaHa?w=169&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">Shopee Việt Nam</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Thương mại điện tử</p>
                        <p class="small text-secondary">
                            Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 20 vị trí</a>
                    </div>
                </div>
            </div>

             <!-- Company 4 -->
             <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80');">
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://th.bing.com/th/id/OIP.r8LYj7EID5rcC2m42w2zMwHaHa?w=138&h=150&c=6&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">Vingroup</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Đa ngành</p>
                        <p class="small text-secondary">
                            Tập đoàn tư nhân lớn nhất Việt Nam với hệ sinh thái đa dạng.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 12 vị trí</a>
                    </div>
                </div>
            </div>

             <!-- Company 5 -->
             <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80');">
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://th.bing.com/th/id/OIP.HN_ljUb-T1NY3bAu9JfLPwHaHa?w=158&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">Momo (Fintech)</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Tài chính / Công nghệ</p>
                        <p class="small text-secondary">
                            Ví điện tử số 1 Việt Nam, môi trường trẻ trung năng động.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 5 vị trí</a>
                    </div>
                </div>
            </div>

            <!-- Company 6 -->
            <div class="col-md-4 col-sm-6">
                <div class="company-item rounded overflow-hidden h-100">
                    <div class="company-banner" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80');">
                        <div class="company-logo-thumb shadow-sm">
                            <img src="https://th.bing.com/th?q=Game+Maker+Studio+1+Logo&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247" alt="Logo">
                        </div>
                    </div>
                    <div class="p-4 company-info">
                        <h5 class="fw-bold mb-1">VNG Corporation</h5>
                        <p class="text-muted small mb-2"><i class="fas fa-folder"></i> Công nghệ / Game</p>
                        <p class="small text-secondary">
                            Kỳ lân công nghệ đầu tiên của Việt Nam.
                        </p>
                        <a href="#" class="btn btn-light w-100 text-primary fw-bold mt-2">Đang tuyển 10 vị trí</a>
                    </div>
                </div>
            </div>

        </div>

        <!-- Phân trang -->
        <nav aria-label="Page navigation" class="mt-5">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled"><a class="page-link" href="#">Trước</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-li




C:\Users\HP\Desktop\spck-JSA13\dashboard.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Nhà Tuyển Dụng</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style/style.css">
</head>
<body class="bg-light">
    <!-- Navbar chuyên biệt cho NTD -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="dashboard.html">NTD Panel</a>
            <div class="ms-auto text-white">
                Chào, <span id="userNameDisplay">Nhà tuyển dụng</span> | 
                <a href="#" onclick="logout()" class="text-white text-decoration-none fw-bold">Thoát</a>
            </div>
        </div>
    </nav>

    <div class="container py-5">
        <div class="row mb-4">
            <div class="col-md-8"><h3>Thống kê bài đăng</h3></div>
            <div class="col-md-4 text-end">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#postJobModal">
                    <i class="fas fa-plus"></i> Đăng bài mới
                </button>
            </div>
        </div>

        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm p-4 text-center">
                    <h2 class="text-primary" id="countJobs">0</h2>
                    <p class="text-muted mb-0">Bài đã đăng</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm p-4 text-center">
                    <h2 class="text-success">15</h2>
                    <p class="text-muted mb-0">Hồ sơ ứng tuyển</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm p-4 text-center">
                    <h2 class="text-warning">1,240</h2>
                    <p class="text-muted mb-0">Lượt xem bài</p>
                </div>
            </div>
        </div>

        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <h5>Danh sách bài tuyển dụng của bạn</h5>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th>Tiêu đề</th>
                                <th>Ngày đăng</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="jobTableBody">
                            <!-- Dữ liệu JS tự đổ vào đây -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Đăng Bài -->
    <div class="modal fade" id="postJobModal" tabindex="-1">
        <div class="modal-dialog">
            <form class="modal-content" id="postJobForm">
                <div class="modal-header"><h5>Đăng tin tuyển dụng</h5></div>
                <div class="modal-body">
                    <input type="text" id="jobTitle" class="form-control mb-3" placeholder="Tên công việc" required>
                    <textarea id="jobDesc" class="form-control mb-3" placeholder="Mô tả ngắn" required></textarea>
                    <input type="text" id="jobSalary" class="form-control mb-3" placeholder="Mức lương">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="submit" class="btn btn-primary">Lưu bài đăng</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>





C:\Users\HP\Desktop\spck-JSA13\degital.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi Tiết Công Việc - JobHunt</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style/style.css">
</head>
<body class="bg-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html"><i class="fas fa-briefcase"></i> JobHunt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link active" href="jobs.html">Việc làm</a></li>
                    <li class="nav-item"><a class="nav-link" href="companies.html">Công ty</a></li>
                    <li class="nav-item"><a class="btn btn-outline-primary ms-2" href="login.html">Đăng nhập</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Job Header (Banner) -->
    <div class="job-header-banner mt-5 pt-5 pb-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-2 text-center mb-3 mb-md-0">
                    <div class="bg-white p-3 rounded shadow-sm logo-box-large">
                        <img src="https://via.placeholder.com/150x150?text=Logo" alt="Company Logo" id="companyLogo">
                    </div>
                </div>
                <div class="col-md-7 text-white">
                    <h2 class="fw-bold mb-2" id="jobTitle">Senior Frontend Developer</h2>
                    <p class="mb-2 fs-5"><i class="fas fa-building me-2"></i> <span id="companyName">Công ty Công Nghệ TechBase</span></p>
                    <div class="d-flex flex-wrap gap-3 text-white-50 small">
                        <span><i class="fas fa-map-marker-alt"></i> Hà Nội</span>
                        <span><i class="fas fa-dollar-sign"></i> 20 - 35 Triệu</span>
                        <span><i class="fas fa-clock"></i> Hết hạn: 30/12/2023</span>
                    </div>
                </div>
                <div class="col-md-3 text-center text-md-end mt-3 mt-md-0">
                    <a href="#applyForm" class="btn btn-warning fw-bold btn-lg w-100 shadow"><i class="fas fa-paper-plane"></i> Ứng Tuyển Ngay</a>
                    <button class="btn btn-outline-light w-100 mt-2"><i class="far fa-heart"></i> Lưu tin</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container py-5">
        <div class="row">
            
            <!-- Cột trái: Nội dung chi tiết -->
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm p-4 mb-4">
                    <h4 class="fw-bold border-start border-4 border-primary ps-3 mb-4">Mô tả công việc</h4>
                    <ul class="text-secondary list-styled">
                        <li>Xây dựng và phát triển giao diện website sử dụng ReactJS, VueJS hoặc Angular.</li>
                        <li>Tối ưu hóa trải nghiệm người dùng (UX/UI) và tốc độ tải trang.</li>
                        <li>Phối hợp với team Backend để tích hợp API.</li>
                        <li>Tham gia review code và đưa ra các giải pháp kỹ thuật mới.</li>
                        <li>Đảm bảo tính tương thích trên đa thiết bị (Responsive Design).</li>
                    </ul>

                    <h4 class="fw-bold border-start border-4 border-primary ps-3 mb-4 mt-4">Yêu cầu ứng viên</h4>
                    <ul class="text-secondary list-styled">
                        <li>Có ít nhất 2 năm kinh nghiệm làm việc với HTML, CSS, JavaScript.</li>
                        <li>Thành thạo ít nhất một Framework (ReactJS, VueJS...).</li>
                        <li>Có kiến thức về Responsive Design, Bootstrap 5.</li>
                        <li>Biết sử dụng Git, làm việc theo mô hình Agile/Scrum.</li>
                        <li>Tư duy logic tốt, chủ động trong công việc.</li>
                    </ul>

                    <h4 class="fw-bold border-start border-4 border-primary ps-3 mb-4 mt-4">Quyền lợi được hưởng</h4>
                    <ul class="text-secondary list-styled">
                        <li>Mức lương cạnh tranh: 20 - 35 Triệu + Thưởng dự án.</li>
                        <li>Lương tháng 13, review lương 2 lần/năm.</li>
                        <li>Bảo hiểm đầy đủ, khám sức khỏe định kỳ.</li>
                        <li>Teambuilding, du lịch hàng năm.</li>
                        <li>Môi trường làm việc trẻ trung, năng động (Open office).</li>
                    </ul>
                </div>

                <!-- FORM ỨNG TUYỂN (DIGITAL APPLY) -->
                <div id="applyForm" class="card border-0 shadow-sm p-4 border-top border-5 border-warning">
                    <h3 class="fw-bold text-center mb-4">Nộp Đơn Ứng Tuyển</h3>
                    <form onsubmit="submitApplication(event)">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Họ và tên <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" required placeholder="Nguyễn Văn A">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" required placeholder="email@example.com">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Số điện thoại <span class="text-danger">*</span></label>
                                <input type="tel" class="form-control" required placeholder="0912 xxx xxx">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Link Portfolio / LinkedIn</label>
                                <input type="url" class="form-control" placeholder="https://...">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-bold">CV đính kèm (PDF, DOC) <span class="text-danger">*</span></label>
                                <input type="file" class="form-control" required accept=".pdf,.doc,.docx">
                                <div class="form-text">Dung lượng không quá 5MB.</div>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-bold">Thư giới thiệu (Cover Letter)</label>
                                <textarea class="form-control" rows="4" placeholder="Viết đôi lời về bản thân và lý do bạn phù hợp..."></textarea>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-lg px-5 fw-bold w-100">GỬI HỒ SƠ ỨNG TUYỂN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Cột phải: Thông tin Công ty -->
            <div class="col-lg-4 mt-4 mt-lg-0">
                <!-- Box Thông tin tóm tắt -->
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="fw-bold mb-3">Thông tin chung</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-calendar-alt text-primary me-2"></i> <strong>Ngày đăng:</strong> 20/05/2023</li>
                            <li class="mb-2"><i class="fas fa-layer-group text-primary me-2"></i> <strong>Cấp bậc:</strong> Senior</li>
                            <li class="mb-2"><i class="fas fa-clock text-primary me-2"></i> <strong>Kinh nghiệm:</strong> 2 năm</li>
                            <li class="mb-2"><i class="fas fa-users text-primary me-2"></i> <strong>Số lượng:</strong> 2 người</li>
                            <li class="mb-2"><i class="fas fa-briefcase text-primary me-2"></i> <strong>Hình thức:</strong> Toàn thời gian</li>
                        </ul>
                    </div>
                </div>

                <!-- Box Giới thiệu công ty -->
                <div class="card border-0 shadow-sm">
                    <div class="card-body text-center">
                        <img src="https://via.placeholder.com/80" class="rounded-circle mb-3 border" width="80" height="80">
                        <h5 class="fw-bold">Công Ty TechBase</h5>
                        <p class="text-muted small">Công ty công nghệ hàng đầu chuyên cung cấp giải pháp phần mềm cho doanh nghiệp.</p>
                        <hr>
                        <div class="text-start">
                            <p class="small mb-2"><i class="fas fa-map-marker-alt text-danger me-2"></i> <strong>Địa chỉ:</strong> Tòa nhà ABC, Cầu Giấy, Hà Nội</p>
                            <p class="small mb-2"><i class="fas fa-globe text-primary me-2"></i> <strong>Website:</strong> www.techbase.com</p>
                            <p class="small mb-0"><i class="fas fa-user-friends text-success me-2"></i> <strong>Quy mô:</strong> 100-200 nhân viên</p>
                        </div>
                        <a href="companies.html" class="btn btn-outline-primary w-100 mt-3">Xem trang công ty</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container text-center">
            <p>&copy; 2023 JobHunt. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JS Xử lý gửi đơn -->
    <script>
        function submitApplication(event) {
            event.preventDefault(); // Ngăn load lại trang
            alert("Chúc mừng! Hồ sơ của bạn đã được gửi thành công.\nNhà tuyển dụng sẽ liên hệ sớm nhất.");
            window.location.href = "index.html";
        }
    </script>
</body>
</html>





C:\Users\HP\Desktop\spck-JSA13\index.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JobHunt - Tìm Việc</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>

    <!-- NAVBAR ĐỒNG NHẤT (Copy đoạn này cho mọi trang) -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html">
                <i class="fas fa-briefcase me-2"></i>JobHunt
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="jobs.html">Việc làm</a></li>
                    <li class="nav-item"><a class="nav-link" href="companies.html">Công ty</a></li>
                </ul>
                <div id="authSection" class="ms-auto d-flex align-items-center">
                    <!-- JS xử lý login/logout ở đây -->
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section (Dành riêng trang index) -->
    <header class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container hero-content text-center">
            <h1 class="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">Tìm Công Việc Mơ Ước</h1>
            <p class="lead mb-5 opacity-75">Hơn 50,000+ cơ hội việc làm đang chờ đón bạn</p>
            
            <div class="search-box-container mx-auto animate__animated animate__fadeInUp">
                <form class="row g-0 p-2 bg-white home-search-form shadow-lg">
                    <div class="col-lg-5 p-2">
                        <input type="text" class="form-control border-0" placeholder="Tên công việc...">
                    </div>
                    <div class="col-lg-4 p-2 border-start">
                        <select class="form-select border-0">
                            <option>Tất cả địa điểm</option>
                            <option>Hà Nội</option>
                            <option>TP. HCM</option>
                        </select>
                    </div>
                    <div class="col-lg-3 p-2">
                        <button class="btn btn-primary w-100 rounded-pill py-2 fw-bold">Tìm ngay</button>
                    </div>
                </form>
            </div>
        </div>
    </header>

    <!-- Hero Section (Đã sửa lỗi hiển thị và thêm ảnh nền quảng bá) -->
    <header class="hero-section">
        <!-- Lớp phủ này giúp chữ trắng nổi bật trên nền ảnh -->
        <div class="hero-overlay"></div> 
        
        <div class="container text-center text-white hero-content">
            <h1 class="display-3 fw-bold mb-3 animate__animated animate__fadeInDown text-white">
                Tìm Công Việc Mơ Ước
            </h1>
            <p class="lead mb-5 opacity-75 animate__animated animate__fadeInUp animate__delay-1s">
                Hơn 50,000+ cơ hội việc làm đang chờ đón bạn
            </p>
            
            <!-- Search Box (Giữ nguyên code cũ) -->
            <div class="search-box-container mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                <form class="row g-2 p-2 bg-white rounded-pill shadow-lg">
                    <div class="col-md-5">
                        <div class="input-group border-0">
                            <span class="input-group-text bg-transparent border-0"><i class="fas fa-search text-muted"></i></span>
                            <input type="text" class="form-control border-0 shadow-none" placeholder="Tên công việc, vị trí...">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="input-group border-0 border-start d-none d-md-flex">
                            <span class="input-group-text bg-transparent border-0"><i class="fas fa-map-marker-alt text-muted"></i></span>
                            <select class="form-select border-0 shadow-none">
                                <option selected>Tất cả địa điểm</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-primary w-100 rounded-pill py-2 fw-bold">Tìm ngay</button>
                    </div>
                </form>
            </div>
        </div>
    </header>

    <!-- Popular Categories (Giữ nguyên code cũ) -->
    <section class="py-5">
        <div class="container text-center">
            <h2 class="fw-bold mb-4">Ngành Nghề Phổ Biến</h2>
            <div class="row g-3">
                <div class="col-6 col-md-3">
                    <div class="category-card p-4 rounded shadow-sm bg-white">
                        <i class="fas fa-code fa-2x text-primary mb-3"></i>
                        <h6>Công nghệ thông tin</h6>
                        <small class="text-muted">1,200 việc làm</small>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card p-4 rounded shadow-sm bg-white">
                        <i class="fas fa-bullhorn fa-2x text-success mb-3"></i>
                        <h6>Marketing</h6>
                        <small class="text-muted">850 việc làm</small>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card p-4 rounded shadow-sm bg-white">
                        <i class="fas fa-headset fa-2x text-warning mb-3"></i>
                        <h6>Chăm sóc khách hàng</h6>
                        <small class="text-muted">600 việc làm</small>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="category-card p-4 rounded shadow-sm bg-white">
                        <i class="fas fa-chart-line fa-2x text-danger mb-3"></i>
                        <h6>Kinh doanh</h6>
                        <small class="text-muted">950 việc làm</small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Jobs (Giữ nguyên code cũ) -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <h2 class="fw-bold">Việc Làm Nổi Bật</h2>
                <a href="jobs.html" class="text-primary text-decoration-none">Xem tất cả <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="row g-4" id="featuredJobsList">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm job-card p-3">
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" class="rounded me-3" alt="logo">
                            <div>
                                <h6 class="mb-0 fw-bold">Frontend Developer</h6>
                                <small class="text-muted">FPT Software</small>
                            </div>
                        </div>
                        <div class="mb-3">
                            <span class="badge bg-soft-primary">Full-time</span>
                            <span class="badge bg-soft-success">15-25 Triệu</span>
                        </div>
                        <div class="d-flex justify-content-between text-muted small">
                            <span><i class="fas fa-map-marker-alt me-1"></i> Hà Nội</span>
                            <span>2 giờ trước</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer (Giữ nguyên code cũ) -->
    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4">
                    <h5 class="text-primary fw-bold mb-3">JobHunt</h5>
                    <p class="small text-white-50">Nền tảng kết nối cơ hội việc làm tốt nhất tại Việt Nam.</p>
                </div>
                <div class="col-md-4">
                    <h5 class="mb-3">Dành cho ứng viên</h5>
                    <ul class="list-unstyled small text-white-50">
                        <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none">Tìm việc làm</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5 class="mb-3">Liên hệ</h5>
                    <p class="small text-white-50"><i class="fas fa-envelope me-2"></i> contact@jobhunt.com</p>
                </div>
            </div>
            <hr class="mt-4 border-secondary">
            <div class="text-center small text-white-50">&copy; 2023 JobHunt Project. All rights reserved.</div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom Logic Đăng nhập (GIỮ NGUYÊN TÍNH NĂNG CŨ CỦA BẠN) -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const authSection = document.getElementById('authSection');
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));

            if (currentUser) {
                authSection.innerHTML = `
                    <div class="dropdown">
                        <a class="d-flex align-items-center text-decoration-none dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                            <div class="bg-primary text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">
                                ${currentUser.name.charAt(0).toUpperCase()}
                            </div>
                            <span class="fw-bold">${currentUser.name}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                            <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user me-2"></i>Hồ sơ cá nhân</a></li>
                            ${currentUser.role === 'employer' ? '<li><a class="dropdown-item" href="dashboard.html"><i class="fas fa-chart-line me-2"></i>Dashboard</a></li>' : ''}
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item text-danger" href="#" id="logoutBtn"><i class="fas fa-sign-out-alt me-2"></i>Đăng xuất</a></li>
                        </ul>
                    </div>
                `;

                document.getElementById('logoutBtn').addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                });
            }
        });
    </script>
</body>
</html>





C:\Users\HP\Desktop\spck-JSA13\jobs.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh Sách Việc Làm - JobHunt</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../style/style.css">
</head>
<body class="bg-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html"><i class="fas fa-briefcase"></i> JobHunt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link active fw-bold text-primary" href="jobs.html">Việc làm</a></li>
                    <li class="nav-item"><a class="nav-link" href="companies.html">Công ty</a></li>
                    <li class="nav-item"><a class="btn btn-outline-primary ms-2" href="login.html">Đăng nhập</a></li>
                    <li class="nav-item"><a class="btn btn-primary ms-2" href="login.html?tab=register">Đăng ký</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Header nhỏ -->
    <div class="bg-primary py-5 mt-5">
        <div class="container text-white text-center">
            <h2 class="fw-bold">Tìm kiếm việc làm tốt nhất</h2>
            <p>Hàng ngàn cơ hội nghề nghiệp đang chờ đón bạn</p>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container py-5">
        <div class="row">
            <!-- Sidebar: Bộ lọc -->
            <div class="col-lg-3 mb-4">
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white fw-bold">
                        <i class="fas fa-filter"></i> Lọc tìm kiếm
                    </div>
                    <div class="card-body">
                        <!-- Địa điểm -->
                        <div class="mb-3">
                            <label class="form-label fw-bold small">Địa điểm</label>
                            <select class="form-select" id="filterLocation" onchange="applyFilter()">
                                <option value="all">Tất cả</option>
                                <option value="hanoi">Hà Nội</option>
                                <option value="hcm">Hồ Chí Minh</option>
                                <option value="danang">Đà Nẵng</option>
                            </select>
                        </div>
                        
                        <!-- Loại hình -->
                        <div class="mb-3">
                            <label class="form-label fw-bold small">Loại hình</label>
                            <select class="form-select" id="filterType" onchange="applyFilter()">
                                <option value="all">Tất cả</option>
                                <option value="remote">Online / Remote</option>
                                <option value="office">Tại văn phòng</option>
                                <option value="intern">Thực tập sinh</option>
                            </select>
                        </div>

                        <!-- Mức lương -->
                        <div class="mb-3">
                            <label class="form-label fw-bold small">Mức lương</label>
                            <select class="form-select" id="filterSalary" onchange="applyFilter()">
                                <option value="all">Tất cả</option>
                                <option value="high">Trên 20 Triệu</option>
                                <option value="mid">10 - 20 Triệu</option>
                            </select>
                        </div>

                        <button class="btn btn-outline-danger w-100 mt-3" onclick="resetFilter()">Xóa bộ lọc</button>
                    </div>
                </div>
            </div>

            <!-- Job List -->
            <div class="col-lg-9">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold">
                        <i class="fas fa-star text-warning me-2"></i> Top <span id="jobCount" class="text-primary">0</span> công việc nổi bật
                    </h5>
                </div>

                <!-- Vùng chứa danh sách việc làm -->
                <div id="jobListContainer"></div>

                <!-- Phân trang -->
                <nav aria-label="Page navigation" class="mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#">Trước</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">Sau</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-5 pb-3 mt-5">
        <div class="container text-center">
            <p>&copy; 2023 JobHunt. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        const jobsDB = [
            { 
                title: "Frontend Developer", 
                company: "FPT Software", 
                salary: "15-25 Triệu", 
                loc: "hanoi", 
                type: "office", 
                logoUrl: "https://th.bing.com/th/id/OIP.EegtI7ZjzZfu5y5UODyDgQHaHa?w=149&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" 
            },
            { 
                title: "Content Marketing Online", 
                company: "Media Z", 
                salary: "8-12 Triệu", 
                loc: "hcm", 
                type: "remote", 
                logoUrl: "https://th.bing.com/th/id/OIP.h3O4Bm6nfRkUC3OvUBodHwHaHa?w=167&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1Z"
            },
            { 
                title: "Sale Bất Động Sản", 
                company: "VinHomes", 
                salary: "Thỏa thuận", 
                loc: "hanoi", 
                type: "office", 
                logoUrl: "https://th.bing.com/th/id/OIP.dZOvyH0eH8LePGAyhT_GeAHaEr?w=228&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
            },
            { 
                title: "ReactJS Developer (Remote)", 
                company: "Tech Global", 
                salary: "1000$ - 2000$", 
                loc: "hcm", 
                type: "remote", 
                logoUrl: "https://th.bing.com/th/id/OIP.en0Dv-Ae_-ST616rvQuevAHaHa?w=164&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
            },
            { 
                title: "Nhân viên CSKH", 
                company: "Viettel", 
                salary: "7-10 Triệu", 
                loc: "danang", 
                type: "office", 
                logoUrl: "https://tse4.mm.bing.net/th/id/OIP.My_UfAhRUWijsS0TNKOOewAAAA?pid=ImgDet&w=150&h=150&c=7&dpr=1.3&o=7&rm=3"
            }
        ];

        function renderJobs(data) {
            const container = document.getElementById('jobListContainer');
            const countLabel = document.getElementById('jobCount');
            container.innerHTML = "";
            countLabel.innerText = data.length;

            if (data.length === 0) {
                container.innerHTML = `<div class="alert alert-warning text-center">Không tìm thấy công việc phù hợp.</div>`;
                return;
            }

            data.forEach(job => {
                let locText = job.loc === 'hanoi' ? "Hà Nội" : (job.loc === 'hcm' ? "TP.HCM" : "Đà Nẵng");
                const html = `
                    <div class="card border-0 shadow-sm mb-3 job-card p-3">
                        <div class="row align-items-center">
                            <div class="col-md-2 d-flex justify-content-center mb-3 mb-md-0">
                                <div class="logo-box">
                                    <img src="${job.logoUrl}" alt="${job.company}">
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h5 class="card-title fw-bold text-primary mb-1">${job.title}</h5>
                                <p class="mb-2 fw-bold text-dark small">${job.company}</p>
                                <div class="text-muted small">
                                    <span class="me-3"><i class="fas fa-dollar-sign text-success"></i> ${job.salary}</span>
                                    <span class="me-3"><i class="fas fa-map-marker-alt text-danger"></i> ${locText}</span>
                                    <span class="badge bg-light text-dark border">${job.type === 'remote' ? 'Online' : 'Văn phòng'}</span>
                                </div>
                            </div>
                            <div class="col-md-3 text-end">
                                <button class="btn btn-outline-primary w-100 fw-bold">Ứng tuyển</button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            });
        }

        function applyFilter() {
            const locValue = document.getElementById('filterLocation').value;
            const typeValue = document.getElementById('filterType').value;
            let result = jobsDB;
            if (locValue !== 'all') result = result.filter(job => job.loc === locValue);
            if (typeValue !== 'all') result = result.filter(job => job.type === typeValue);
            renderJobs(result);
        }

        function resetFilter() {
            document.getElementById('filterLocation').value = 'all';
            document.getElementById('filterType').value = 'all';
            renderJobs(jobsDB);
        }

        renderJobs(jobsDB);
    </script>
</body>
</html>



C:\Users\HP\Desktop\spck-JSA13\login.html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập & Đăng ký - JobHunt</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style/style.css">
</head>
<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html"><i class="fas fa-briefcase"></i> JobHunt</a>
        </div>
    </nav>

    <div class="container mt-5 pt-5">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card auth-card shadow mt-4">
                    <div class="card-body p-4 p-md-5">
                        <div class="text-center mb-4">
                            <h3 class="fw-bold">Hành trình mới bắt đầu</h3>
                            <p class="text-muted">Đăng nhập để tiếp tục với JobHunt</p>
                        </div>
                        
                        <ul class="nav nav-pills mb-4 justify-content-center" id="authTab">
                            <li class="nav-item">
                                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#loginForm">Đăng nhập</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#registerForm">Đăng ký</button>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <!-- FORM ĐĂNG NHẬP -->
                            <div class="tab-pane fade show active" id="loginForm">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Email công việc</label>
                                    <input type="email" id="lEmail" class="form-control" placeholder="name@company.com">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Mật khẩu</label>
                                    <input type="password" id="lPass" class="form-control" placeholder="••••••••">
                                </div>
                                <button onclick="handleLogin()" class="btn btn-primary w-100 mt-2">Đăng nhập ngay</button>
                            </div>

                            <!-- FORM ĐĂNG KÝ -->
                            <div class="tab-pane fade" id="registerForm">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Họ và tên</label>
                                    <input type="text" id="rName" class="form-control" placeholder="Nguyễn Văn A">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Email</label>
                                    <input type="email" id="rEmail" class="form-control" placeholder="name@example.com">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Mật khẩu</label>
                                    <input type="password" id="rPass" class="form-control" placeholder="••••••••">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold text-primary">Vai trò của bạn</label>
                                    <select class="form-select border-primary" id="rRole">
                                        <option value="candidate">Người ứng tuyển (Tìm việc)</option>
                                        <option value="employer">Nhà tuyển dụng (Đăng tin)</option>
                                    </select>
                                </div>
                                <button onclick="handleRegister()" class="btn btn-success w-100">Đăng ký tài khoản</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>









<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Quản lý bài đăng</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <div class="container">
        <h2 id="formTitle">Đăng bài tuyển dụng mới</h2>
        <form id="jobForm">
            <input type="hidden" id="jobId">
            <input type="text" id="jobTitle" placeholder="Tiêu đề công việc" required>
            <input type="text" id="jobCompany" placeholder="Tên công ty" required>
            <textarea id="jobDesc" placeholder="Mô tả chi tiết"></textarea>
            <button type="submit">Lưu bài đăng</button>
        </nav>
    </div>
    <script src="js/main.js"></script>
    <script>
        checkRole('employer');
        // Nếu có ID trên URL thì là chế độ Edit
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('id')) loadJobData(urlParams.get('id'));
    </script>
</body>
</html>







<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Đăng ký tài khoản</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <div class="auth-container">
        <form id="registerForm">
            <h2>Đăng ký</h2>
            <input type="text" id="regUser" placeholder="Họ và tên" required>
            <input type="email" id="regEmail" placeholder="Email" required>
            <input type="password" id="regPass" placeholder="Mật khẩu" required>
            
            <label>Bạn là:</label>
            <select id="regRole">
                <option value="candidate">Người ứng tuyển (Candidate)</option>
                <option value="employer">Nhà tuyển dụng (Employer)</option>
            </select>
            
            <button type="submit">Đăng ký</button>
            <p>Đã có tài khoản? <a href="login.html">Đăng nhập</a></p>
        </form>
    </div>
    <script src="js/main.js"></script>
</body>
</html>





