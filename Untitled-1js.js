/* ================================== */
/* KODE ASLI ANDA (UNTUK SCROLL & FORM) */
/* ================================== */

const tryBtn = document.getElementById("tryBtn");
const daftarBtn = document.getElementById("daftarBtn");
const contactSection = document.getElementById("contact");

// Tanda ? (optional chaining) akan mencegah error jika elemen tidak ditemukan
tryBtn?.addEventListener("click", () => contactSection.scrollIntoView({ behavior: 'smooth' }));
daftarBtn?.addEventListener("click", () => contactSection.scrollIntoView({ behavior: 'smooth' }));

// Kode untuk form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("formMsg").textContent = "✅ Data berhasil dikirim! Kami akan menghubungi Anda.";
        this.reset();
    });
}

/* ================================== */
/* KODE BARU (UNTUK MENU MOBILE)      */
/* ================================== */
/*
* Akan mengontrol tombol menu 'hamburger'
* dan 'X' saat menu dibuka/tutup.
*/
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');

// Pastikan elemennya ada sebelum menambahkan listener
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        
        // Toggle class 'open' pada navigasi
        navLinks.classList.toggle('open');
        
        // Ganti ikon (bars <-> X)
        const icon = menuToggle.querySelector('i');
        
        if (navLinks.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ikon 'X'
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Ikon 'hamburger'
        }
    });
}