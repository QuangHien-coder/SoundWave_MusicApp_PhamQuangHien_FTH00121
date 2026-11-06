# SOUNDWAVE - NỀN TẢNG ÂM NHẠC TRỰC TUYẾN HIỆN ĐẠI

> **Dự án Môn học:** Thiết kế Giao diện Web Frontend (HTML5 / CSS3 / JavaScript)  
> **Sinh viên thực hiện:** Phạm Quang Hiển — **MSSV:** FTH00121  
> **Lớp:** T2608E - FPT Aptech  
> **Nền tảng triển khai:** GitHub Pages (Trực tuyến 100%)

---

## LIÊN KẾT NỘP BÀI TRỰC TUYẾN

* **Video Demo Thuyết Minh (Google Drive):** [https://drive.google.com/file/d/1acwCFJCeyz43xfghsX7xkN7o6LPu_gnD/view?usp=sharing](https://drive.google.com/file/d/1acwCFJCeyz43xfghsX7xkN7o6LPu_gnD/view?usp=sharing)
* **Website Chạy Trực Tuyến (GitHub Pages):** [https://quanghien-coder.github.io/SoundWave_MusicApp_PhamQuangHien_FTH00121/](https://quanghien-coder.github.io/SoundWave_MusicApp_PhamQuangHien_FTH00121/)
* **Source Code GitHub:** [https://github.com/QuangHien-coder/SoundWave_MusicApp_PhamQuangHien_FTH00121](https://github.com/QuangHien-coder/SoundWave_MusicApp_PhamQuangHien_FTH00121)

---

## 1. GIỚI THIỆU DỰ ÁN

**SoundWave** là nền tảng âm nhạc trực tuyến thế hệ mới, kết hợp tinh hoa thẩm mỹ hiện đại giữa Spotify và SoundCloud. Dự án hướng tới cộng đồng yêu âm nhạc trẻ, đặc biệt là tôn vinh dòng nhạc Indie, Lo-Fi, Acoustic và Pop Ballad Việt Nam đương đại.

Hệ thống cho phép người dùng:
* Khám phá bảng xếp hạng các bài hát thịnh hành theo tuần.
* Tìm kiếm và lọc nâng cao theo thể loại, năm phát hành, định dạng âm thanh.
* Tra cứu thông tin chuyên sâu đa chiều: từ **Bài hát** $\rightarrow$ **Ca sĩ thể hiện** $\rightarrow$ **Tác giả / Nhạc sĩ sáng tác** $\rightarrow$ **Album tuyển chọn**.
* Xem lời bài hát (Lyrics) trực quan.
* Trải nghiệm trình phát nhạc Fake Player cố định chân trang (Bottom Fixed Player) với đầy đủ cụm điều khiển và thanh tiến trình.

---

## 2. CẤU TRÚC 10 TRANG GIAO DIỆN

Hệ thống bao gồm đúng 10 trang HTML riêng biệt, liên kết mượt mà và không tồn tại liên kết hỏng (404):

1. **`index.html` (Trang Chủ):** Hero banner truyền cảm hứng, Bảng xếp hạng Top Charts tuần, Thẻ danh mục phong cách, Album thịnh hành và Bảng giá gói cước (Pricing Table).
2. **`search.html` (Tìm Kiếm):** Bộ lọc đa năng (thể loại, năm, sắp xếp), ô tìm kiếm trực tiếp với thông báo số lượng bài hát tìm thấy dạng lưới.
3. **`song-detail.html` (Bài Hát Chi Tiết):** Banner ca khúc *"Đường Tôi Chở Em Về"* (Bùi Trường Linh), thông số lượt stream, khối hiển thị lời bài hát (Lyrics) định dạng rõ nét, cột phụ gợi ý bài hát (*Quá Đủ Rồi - CoolKid*, *Xương Rồng - Dangrangto*, *Vết Thương - Fishy*, *Thành Đô - Tinh Hà*).
4. **`artist-songs.html` (Ca Sĩ):** Hồ sơ nghệ sĩ **Bùi Trường Linh (buitruonglinh)** đã xác minh, tiểu sử, lượt theo dõi, bảng danh sách ca khúc thể hiện và album phát hành.
5. **`composer-songs.html` (Nhạc Sĩ):** Thông tin tác giả **Bùi Trường Linh & Thế Hệ Tác Giả Trẻ** (CoolKid, Dangrangto, Fishy, Tinh Hà), phong cách sáng tác, giải thưởng âm nhạc và gia tài ca khúc.
6. **`album-songs.html` (Album):** Bìa đĩa lớn Album *"Từng Ngày Như Mãi Mãi (Special Edition)"*, ngày ra mắt, tổng thời lượng và bảng Tracklist thứ tự từng bài.
7. **`detail.html` (Tin Tức & Review):** Bài viết chuyên sâu đánh giá (Review) thế hệ nghệ sĩ mới (Bùi Trường Linh, CoolKid, Dangrangto, Fishy, Tinh Hà), thang chấm điểm chất lượng âm thanh 9.5/10.
8. **`about.html` (Về Chúng Tôi):** Sứ mệnh SoundWave, số liệu thống kê nền tảng và thẻ thông tin đội ngũ phát triển (Meet Our Team).
9. **`contact.html` (Liên Hệ & Hợp Tác):** Biểu mẫu liên hệ đa chủ đề, địa chỉ phòng thu Studio và bản đồ nhúng Google Maps trực quan.
10. **`policy-terms.html` (Chính Sách & Điều Khoản):** Menu mục lục cố định, quy định bản quyền DMCA, bảo mật dữ liệu và quyền lợi gói Premium.

---

## 3. CÔNG NGHỆ & ĐIỂM NỔI BẬT

* **HTML5 Semantic:** Sử dụng 100% chuẩn cấu trúc ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<table>`).
* **CSS3 Hiện Đại:**
  * Bố cục chuẩn mực kết hợp **Flexbox** và **CSS Grid**.
  * Chủ đề tối **Dark Theme** sang trọng, phối màu dạ quang Cyan & Indigo.
  * Hiệu ứng chuyển động mượt mà (`:hover`, `:focus`, `:active`) trên nút bấm và thẻ bài hát.
* **Responsive 100%:** Tương thích mượt mà trên 3 phân khúc thiết bị:
  * Mobile ($< 768\text{px}$)
  * Tablet ($768\text{px} - 1024\text{px}$)
  * Desktop ($\ge 1024\text{px}$)
* **JavaScript Tương Tác:**
  * Thanh phát nhạc đáy màn hình có thể Play/Pause, bấm vào bài hát bất kỳ để nạp thông tin, kéo/chọn tiến trình bài hát, thả tim yêu thích.
  * Menu di động bật/tắt dạng trượt.
  * Bộ lọc tìm kiếm trực tiếp (live filter) theo từ khóa và thể loại.
  * Xử lý gửi biểu mẫu phản hồi tức thì.

---

## 4. HƯỚNG DẪN CÀI ĐẶT & KÍCH HOẠT GITHUB PAGES

1. **Chạy thử cục bộ (Local):**
   * Mở thư mục dự án bằng VS Code.
   * Mở bất kỳ file `.html` nào bằng trình duyệt web (hoặc sử dụng extension Live Server).

2. **Kích hoạt GitHub Pages:**
   * Truy cập vào kho lưu trữ (Repository) trên GitHub: `https://github.com/QuangHien-coder/SoundWave_MusicApp_PhamQuangHien_FTH00121`
   * Vào mục **Settings** $\rightarrow$ **Pages** (cột menu bên trái).
   * Tại mục **Build and deployment** > **Branch**: Chọn nhánh `main` và thư mục `/ (root)`.
   * Nhấn **Save**. Sau 1 - 2 phút, đường link trực tuyến xuất bản sẽ xuất hiện tại đây.
