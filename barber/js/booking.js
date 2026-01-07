document.getElementById("bookingForm").onsubmit = e => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];


    bookings.push({
        name: name.value,
        phone: phone.value,
        service: service.value,
        barber: barber.value,   // ← هذا المهم
        time: time.value,
        status: "بانتظار"
    });

    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert("تم الحجز");
    e.target.reset();
};
