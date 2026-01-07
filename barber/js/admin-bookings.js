const container = document.getElementById("bookingRows");
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const ADMIN_BARBER = localStorage.getItem("ADMIN_BARBER");

if (!ADMIN_BARBER) {
    alert("لم يتم اختيار الأدمن");
}


function renderBookings() {
    container.innerHTML = "";

    bookings
        .filter(b => b.barber === ADMIN_BARBER)
        .forEach((b, index) => {
            const row = document.createElement("div");
            row.className = "row";

            row.innerHTML = `
                <span>${b.name}</span>
                <span>${b.phone}</span>
                <span>${b.service}</span>
                <span>${b.time}</span>
                <span>
                    ${b.status === "بانتظار"
                        ? `<button class="btn accept" data-i="${index}">قبول</button>`
                        : `<button class="btn finish" data-i="${index}">انتهاء</button>`
                    }
                </span>
            `;

            container.appendChild(row);
        });

    localStorage.setItem("bookings", JSON.stringify(bookings));
}

container.onclick = e => {
    if (e.target.classList.contains("accept")) {
        bookings[e.target.dataset.i].status = "مقبول";
        renderBookings();
    }

    if (e.target.classList.contains("finish")) {
        bookings.splice(e.target.dataset.i, 1);
        renderBookings();
    }
};

renderBookings();
