// Xử lý sự kiện gửi form ở trang liên hệ
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Ngăn trang bị reload
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi lại trong vòng 24 giờ.');
            contactForm.reset(); // Xóa sạch dữ liệu vừa nhập trong form
        });
    }
});