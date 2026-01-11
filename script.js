function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Demo credentials (for hackathon prototype)
    if (user === "zakariya" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText =
            "Access Denied: Invalid Operator Credentials";
    }
}
