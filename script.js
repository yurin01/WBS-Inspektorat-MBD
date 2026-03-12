// Fungsi untuk membuka Google Forms di tab baru
function openReportForm() {
    // 🔁 GANTI URL DI BAWAH INI DENGAN LINK GOOGLE FORMS KAMU
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdrqkmLLjZkDOfVgMxwymrVxVR2lwoIejMSbVcc2AfLu00Jqw/viewform?usp=dialog');
}

// Fungsi untuk scroll halus ke section tertentu
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll untuk semua link internal (yang diawali #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Abaikan jika hanya "#" atau "#lapor-sekarang" (karena tombol lapor pakai onclick)
        if (href !== '#' && href !== '#lapor-sekarang') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});