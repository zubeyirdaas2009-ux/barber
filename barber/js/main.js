let selectedBarber = null;


const ADMIN_PASSWORDS = {
    barber1: "1111", // كلمة مرور أدمن 1
    barber2: "2222"  // كلمة مرور أدمن 2
};

function openAdminModal(barber) {
    selectedBarber = barber;
    document.getElementById("adminPassword").value = "";
    document.getElementById("adminError").textContent = "";
    document.getElementById("adminModal").style.display = "flex";
}

document.getElementById("loginBtn").onclick = () => {
    const password = document.getElementById("adminPassword").value;

    if (!selectedBarber) {
        document.getElementById("adminError").textContent = "حدث خطأ";
        return;
    }

    if (password === ADMIN_PASSWORDS[selectedBarber]) {
        localStorage.setItem("ADMIN_BARBER", selectedBarber);
        window.location.href = "admin.html";
    } else {
        document.getElementById("adminError").textContent = "كلمة المرور خاطئة";
    }
};

document.getElementById("closeModal").onclick = () => {
    document.getElementById("adminModal").style.display = "none";
};
