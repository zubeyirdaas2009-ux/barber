function loginAdmin(barber) {
    localStorage.setItem("ADMIN_BARBER", barber);
    window.location.href = "admin.html";
}
