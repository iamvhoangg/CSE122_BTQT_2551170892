const cacKyQuan = document.querySelectorAll(".ky-quan");

console.log("Số kỳ quan:", cacKyQuan.length);

// Thêm sự kiện khi nhấn vào từng kỳ quan
cacKyQuan.forEach(function(kyQuan) {
    kyQuan.addEventListener("click", function() {
        const ten = kyQuan.querySelector("h2").textContent;
        alert("Bạn đang xem: " + ten);
    });
});