let d = document.getElementById("d");
let m = document.getElementById("m");
let y = document.getElementById("y");

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let weekday = document.getElementById("weekday");
let hello = document.getElementById("hello");

let days = [
    "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư",
    "Thứ năm", "Thứ sáu", "Thứ bảy"
];

function chaoBuoi() {
    let hour = new Date().getHours();

    if (hour < 12) {
        hello.innerText = "Chào buổi sáng!";
    } else if (hour < 18) {
        hello.innerText = "Chào buổi chiều!";
    } else {
        hello.innerText = "Chào buổi tối!";
    }
}

function inLich() {
    let ngay = Number(d.value);
    let thang = Number(m.value);
    let nam = Number(y.value);

    if (d.value === "" || m.value === "" || y.value === "") {
        alert("Vui lòng nhập đủ ngày, tháng, năm!");
        return;
    }

    if (thang < 1 || thang > 12 || ngay < 1 || ngay > 31 || nam < 1) {
        alert("Ngày, tháng, năm không hợp lệ!");
        return;
    }

    let date = new Date(nam, thang - 1, ngay);

    if (
        date.getDate() !== ngay ||
        date.getMonth() !== thang - 1 ||
        date.getFullYear() !== nam
    ) {
        alert("Ngày, tháng, năm không hợp lệ!");
        return;
    }

    year.innerText = date.getFullYear();
    month.innerText = "Tháng " + (date.getMonth() + 1);
    day.innerText = date.getDate();
    weekday.innerText = days[date.getDay()];

    chaoBuoi();
}

document.getElementById("btn").addEventListener("click", inLich);

chaoBuoi();
