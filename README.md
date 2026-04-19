giúp tôi tạo lại giao diện trang home nhìn đẹp hơn và khi người dùng đăng nhập thành công thì vào trang này 
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JobHunt - Tìm Việc Làm Nhanh & Uy Tín</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome (Icon) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html"><i class="fas fa-briefcase"></i> JobHunt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="jobs.html">Việc làm</a></li>
                    <li class="nav-item"><a class="nav-link" href="companies.html">Công ty</a></li>
                    
                    <!-- PHẦN ĐÃ SỬA: Thêm đường dẫn login.html vào href -->
                    <li class="nav-item"><a class="btn btn-outline-primary ms-2" href="login.html">Đăng nhập</a></li>
                    <li class="nav-item"><a class="btn btn-primary ms-2" href="login.html">Đăng ký</a></li>
                    
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section (Tìm kiếm việc làm) -->
    <header class="hero-section d-flex align-items-center">
        <div class="container text-center text-white">
            <h1 class="display-4 fw-bold mb-4">Tìm Công Việc Mơ Ước Của Bạn</h1>
            <p class="lead mb-5">Kết nối với hàng ngàn nhà tuyển dụng uy tín và tìm mức lương phù hợp.</p>
            
            <!-- Form Tìm Kiếm -->
            <div class="bg-white p-4 rounded shadow search-box">
                <form class="row g-3">
                    <div class="col-md-4">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                            <input type="text" class="form-control" placeholder="Tên công việc, vị trí...">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                            <select class="form-select">
                                <option selected>Tất cả địa điểm</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                                <option>Đà Nẵng</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fas fa-layer-group"></i></span>
                            <select class="form-select">
                                <option selected>Tất cả ngành nghề</option>
                                <option>Công nghệ thông tin</option>
                                <option>Marketing</option>
                                <option>Kinh doanh</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-primary w-100 fw-bold">Tìm Kiếm</button>
                    </div>
                </form>
            </div>
        </div>
    </header>

    <!-- Features Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Tại sao chọn JobHunt?</h2>
                <p class="text-muted">Giải pháp toàn diện cho người tìm việc</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4 col-sm-6">
                    <div class="card h-100 border-0 shadow-sm feature-card text-center p-4">
                        <div class="icon-box text-primary mb-3"><i class="fas fa-laptop-house fa-3x"></i></div>
                        <h5>Tìm việc Online</h5>
                        <p class="text-muted small">Tiếp cận hàng ngàn việc làm trực tuyến mọi lúc, mọi nơi.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card h-100 border-0 shadow-sm feature-card text-center p-4">
                        <div class="icon-box text-success mb-3"><i class="fas fa-building fa-3x"></i></div>
                        <h5>Công ty Uy Tín</h5>
                        <p class="text-muted small">Mạng lưới nhà tuyển dụng hàng đầu đã được xác thực.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card h-100 border-0 shadow-sm feature-card text-center p-4">
                        <div class="icon-box text-warning mb-3"><i class="fas fa-money-bill-wave fa-3x"></i></div>
                        <h5>Lương Phù Hợp</h5>
                        <p class="text-muted small">Công cụ lọc mức lương giúp bạn tìm thu nhập xứng đáng.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm feature-card text-center p-4">
                        <div class="icon-box text-info mb-3"><i class="fas fa-briefcase fa-3x"></i></div>
                        <h5>Đa Dạng Ngành Nghề</h5>
                        <p class="text-muted small">Tìm kiếm nhanh chóng theo chuyên môn và lĩnh vực của bạn.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm feature-card text-center p-4">
                        <div class="icon-box text-danger mb-3"><i class="fas fa-map-marked-alt fa-3x"></i></div>
                        <h5>Việc Làm Theo Địa Điểm</h5>
                        <p class="text-muted small">Bộ lọc địa điểm chính xác giúp tìm việc gần bạn nhất.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Jobs -->
    <section class="py-5">
        <div class="container">
            <h2 class="fw-bold mb-4">Việc Làm Nổi Bật</h2>
            <div class="row g-4">
                <!-- Job Item 1 -->
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm job-card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-primary">Full-time</span>
                                <span class="text-muted small"><i class="far fa-clock"></i> 2 giờ trước</span>
                            </div>
                            <h5 class="card-title fw-bold">Frontend Developer</h5>
                            <p class="card-text text-muted">Công ty Công Nghệ ABC</p>
                            <hr>
                            <div class="d-flex justify-content-between text-muted small mb-3">
                                <span><i class="fas fa-dollar-sign"></i> 15 - 25 Triệu</span>
                                <span><i class="fas fa-map-marker-alt"></i> Hà Nội</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary w-100">Ứng tuyển ngay</a>
                        </div>
                    </div>
                </div>
                 <!-- Job Item 2 -->
                 <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm job-card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-success">Remote</span>
                                <span class="text-muted small"><i class="far fa-clock"></i> 1 ngày trước</span>
                            </div>
                            <h5 class="card-title fw-bold">Nhân Viên Marketing</h5>
                            <p class="card-text text-muted">Tập Đoàn XYZ Global</p>
                            <hr>
                            <div class="d-flex justify-content-between text-muted small mb-3">
                                <span><i class="fas fa-dollar-sign"></i> 10 - 15 Triệu</span>
                                <span><i class="fas fa-map-marker-alt"></i> HCM</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary w-100">Ứng tuyển ngay</a>
                        </div>
                    </div>
                </div>
                 <!-- Job Item 3 -->
                 <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm job-card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-warning text-dark">Part-time</span>
                                <span class="text-muted small"><i class="far fa-clock"></i> 3 ngày trước</span>
                            </div>
                            <h5 class="card-title fw-bold">Thực Tập Sinh Sale</h5>
                            <p class="card-text text-muted">Công ty Bất Động Sản 123</p>
                            <hr>
                            <div class="d-flex justify-content-between text-muted small mb-3">
                                <span><i class="fas fa-dollar-sign"></i> Thỏa thuận</span>
                                <span><i class="fas fa-map-marker-alt"></i> Đà Nẵng</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary w-100">Ứng tuyển ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5 class="text-primary fw-bold">JobHunt</h5>
                    <p class="small">Nền tảng kết nối cơ hội việc làm tốt nhất cho bạn.</p>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Liên kết nhanh</h5>
                    <ul class="list-unstyled small">
                        <li><a href="#" class="text-white-50 text-decoration-none">Về chúng tôi</a></li>
                        <li><a href="#" class="text-white-50 text-decoration-none">Liên hệ</a></li>
                        <li><a href="#" class="text-white-50 text-decoration-none">Điều khoản sử dụng</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Theo dõi chúng tôi</h5>
                    <div>
                        <a href="#" class="text-white me-2"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-white me-2"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <hr class="border-secondary">
            <div class="text-center small">
                &copy; 2023 JobHunt. All rights reserved.
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>



