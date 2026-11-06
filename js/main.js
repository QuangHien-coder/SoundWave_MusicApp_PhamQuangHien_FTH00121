/* ==========================================================================
   SOUNDWAVE - XỬ LÝ TƯƠNG TÁC JAVASCRIPT
   Chức năng: Trình phát nhạc đáy màn hình, Menu di động, Bộ lọc tìm kiếm & Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Đóng / Mở menu trên điện thoại
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // 2. Xử lý thanh phát nhạc cố định dưới đáy màn hình
  const playerPlayBtn = document.getElementById('player-play-btn');
  const playerSongTitle = document.getElementById('player-song-title');
  const playerArtist = document.getElementById('player-artist');
  const playerThumb = document.getElementById('player-thumb');
  const playerLikeBtn = document.getElementById('player-like-btn');
  const progressBarWrap = document.getElementById('progress-bar-wrap');
  const progressFill = document.getElementById('progress-fill');
  const currentTimeEl = document.getElementById('current-time');
  const durationTimeEl = document.getElementById('duration-time');

  let isPlaying = false;
  let progressInterval = null;
  let currentSeconds = 84; // Bắt đầu mặc định ở 01:24
  const totalSeconds = 225; // Tổng thời lượng 03:45

  // Hàm định dạng số giây sang phút:giây (mm:ss)
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Cập nhật độ dài thanh tiến trình và số thời gian hiện tại
  function updateProgress() {
    if (progressFill && currentTimeEl) {
      const percent = (currentSeconds / totalSeconds) * 100;
      progressFill.style.width = `${percent}%`;
      currentTimeEl.textContent = formatTime(currentSeconds);
    }
  }

  // Bắt đầu phát nhạc
  function startPlayback() {
    isPlaying = true;
    if (playerPlayBtn) {
      playerPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      playerPlayBtn.title = 'Tạm dừng';
    }
    clearInterval(progressInterval);
    progressInterval = setInterval(function () {
      if (currentSeconds < totalSeconds) {
        currentSeconds++;
        updateProgress();
      } else {
        currentSeconds = 0;
        updateProgress();
      }
    }, 1000);
  }

  // Tạm dừng phát nhạc
  function pausePlayback() {
    isPlaying = false;
    if (playerPlayBtn) {
      playerPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      playerPlayBtn.title = 'Phát';
    }
    clearInterval(progressInterval);
  }

  if (playerPlayBtn) {
    playerPlayBtn.addEventListener('click', function () {
      if (isPlaying) {
        pausePlayback();
      } else {
        startPlayback();
      }
    });
  }

  // Khi bấm nút Play ở bất kỳ bài hát nào trên trang thì nạp bài đó vào thanh nhạc
  const trackPlayButtons = document.querySelectorAll('.js-play-track');
  trackPlayButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const title = this.getAttribute('data-title') || 'Bài hát đang phát';
      const artist = this.getAttribute('data-artist') || 'Nghệ sĩ SoundWave';
      const thumb = this.getAttribute('data-thumb') || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300';

      if (playerSongTitle) playerSongTitle.textContent = title;
      if (playerArtist) playerArtist.textContent = artist;
      if (playerThumb) playerThumb.src = thumb;

      currentSeconds = 0;
      updateProgress();
      startPlayback();
    });
  });

  // Bấm vào thanh tiến trình để tua nhanh bài hát
  if (progressBarWrap) {
    progressBarWrap.addEventListener('click', function (e) {
      const rect = progressBarWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const ratio = Math.max(0, Math.min(1, clickX / width));
      currentSeconds = Math.floor(ratio * totalSeconds);
      updateProgress();
    });
  }

  // Nút thả tim yêu thích bài hát trên thanh phát nhạc
  if (playerLikeBtn) {
    playerLikeBtn.addEventListener('click', function () {
      playerLikeBtn.classList.toggle('liked');
      const icon = playerLikeBtn.querySelector('i');
      if (icon) {
        if (playerLikeBtn.classList.contains('liked')) {
          icon.className = 'fa-solid fa-heart';
        } else {
          icon.className = 'fa-regular fa-heart';
        }
      }
    });
  }

  // 3. Đổi trạng thái nút Theo dõi ca sĩ trên trang artist-songs.html
  const followBtn = document.getElementById('follow-artist-btn');
  if (followBtn) {
    followBtn.addEventListener('click', function () {
      const isFollowing = this.getAttribute('data-following') === 'true';
      if (isFollowing) {
        this.setAttribute('data-following', 'false');
        this.innerHTML = '<i class="fa-solid fa-plus"></i> Theo dõi';
        this.classList.remove('btn-outline');
        this.classList.add('btn-primary');
      } else {
        this.setAttribute('data-following', 'true');
        this.innerHTML = '<i class="fa-solid fa-check"></i> Đang theo dõi';
        this.classList.remove('btn-primary');
        this.classList.add('btn-outline');
      }
    });
  }

  // 4. Tìm kiếm và lọc bài hát trực tiếp trên trang search.html
  const searchInput = document.getElementById('live-search-input');
  const genreFilter = document.getElementById('filter-genre');
  const searchCountBadge = document.getElementById('search-count');
  const searchItems = document.querySelectorAll('.search-item');

  function runFilter() {
    if (!searchItems.length) return;

    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedGenre = genreFilter ? genreFilter.value.toLowerCase() : 'all';

    let matchCount = 0;

    searchItems.forEach(function (item) {
      const title = (item.getAttribute('data-title') || '').toLowerCase();
      const artist = (item.getAttribute('data-artist') || '').toLowerCase();
      const genre = (item.getAttribute('data-genre') || '').toLowerCase();

      const matchesQuery = !query || title.includes(query) || artist.includes(query);
      const matchesGenre = selectedGenre === 'all' || genre === selectedGenre;

      if (matchesQuery && matchesGenre) {
        item.style.display = '';
        matchCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (searchCountBadge) {
      searchCountBadge.textContent = `Tìm thấy ${matchCount} bài hát phù hợp`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', runFilter);
  }
  if (genreFilter) {
    genreFilter.addEventListener('change', runFilter);
  }

  // 5. Xử lý gửi biểu mẫu liên hệ trên trang contact.html
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('contact-feedback');

  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactFeedback.style.display = 'block';
      contactFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
      contactForm.reset();
      setTimeout(function () {
        contactFeedback.style.display = 'none';
      }, 5000);
    });
  }
});
