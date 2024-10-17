// Thêm sự kiện click cho nút 'Xem bản đồ' nhà gái
document.getElementById("bride-map").addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps?q=21.491775512695312,106.11824798583984&z=14&t=m&mapclient=embed",
    "_blank"
  );
});

// Thêm sự kiện click cho nút 'Xem bản đồ' nhà trai
document.getElementById("groom-map").addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps/place/21%C2%B017'37.8%22N+105%C2%B016'33.9%22E/@21.29383,105.273503,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.29383!4d105.2760779?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
});

// Đặt ngày cưới
const weddingDate = new Date("October 26, 2024 00:00:00").getTime();

// Cập nhật đếm ngược mỗi giây
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Tính toán thời gian còn lại
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Khi đến ngày cưới, dừng đếm ngược
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerText =
      "Chúc mừng! Đã đến ngày cưới!";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // Tạo Intersection Observer cho phần bông hoa
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  // Quan sát ảnh bông hoa
  let flowerImage = document.querySelector(".flower-image");
  observer.observe(flowerImage);

  var audio = document.getElementById("background-music");
  var button = document.getElementById("toggle-music");

  // Ban đầu, nhạc sẽ không phát (paused), nút thể hiện trạng thái tắt nhạc
  button.innerText = "🔈"; // Đặt trạng thái ban đầu là tắt nhạc

  // Thiết lập sự kiện click cho nút
  button.addEventListener("click", function () {
    if (audio.paused) {
      audio.play(); // Bật nhạc nếu đang tạm dừng
      this.innerText = "🔊"; // Đổi biểu tượng thành bật âm thanh
    } else {
      audio.pause(); // Tạm dừng nhạc
      this.innerText = "🔈"; // Đổi biểu tượng thành tắt âm thanh
    }
  });
});

let sectionsToObserve = document.querySelectorAll(".flower-image, .our-story");
sectionsToObserve.forEach(function (section) {
  observer.observe(section);
});
