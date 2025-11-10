// --- Logika untuk Smooth Scroll (Tetap sama) ---
const tryBtn = document.getElementById("tryBtn");
const daftarBtn = document.getElementById("daftarBtn");
const contactSection = document.getElementById("contact");

// Menggunakan 'optional chaining' (?) untuk menghindari error jika elemen tidak ditemukan
tryBtn?.addEventListener("click", () => contactSection.scrollIntoView({ behavior: 'smooth' }));
daftarBtn?.addEventListener("click", () => contactSection.scrollIntoView({ behavior: 'smooth' }));

// --- Logika Formulir Kontak (BARU) ---
// Ini menggantikan logika lama untuk menangani pengiriman formulir
// ... (Kode formulir Anda tetap sama, tidak perlu diubah) ...
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Mencegah submit standar (halaman reload)
        
        const form = e.target;
        const data = new FormData(form);
        const action = form.action; // Mengambil URL Formspree dari HTML

        // Mengubah status pesan
        formMsg.textContent = "Mengirim data...";
        formMsg.style.color = "var(--muted)";

        // Mengirim data ke Formspree menggunakan fetch
        fetch(action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json' // Meminta Formspree merespon dengan JSON
            }
        })
        .then(response => {
            if (response.ok) {
                // Jika berhasil
                formMsg.textContent = "✅ Data berhasil dikirim! Kami akan menghubungi Anda.";
                formMsg.style.color = "var(--accent2)"; // Warna sukses (hijau/biru)
                form.reset(); // Mengosongkan formulir
            } else {
                // Jika ada error dari Formspree (misal: ID salah)
                response.json().then(data => {
                    // Menampilkan pesan error jika ada
                    const error = data.errors ? data.errors.map(err => err.message).join(", ") : "Terjadi kesalahan.";
                    formMsg.textContent = `❌ Gagal mengirim: ${error}`;
                    formMsg.style.color = "#ff6b6b"; // Warna error (merah)
                })
            }
        })
        .catch(error => {
            // Jika ada error jaringan (misal: tidak ada internet)
            console.error("Error submitting form:", error);
            formMsg.textContent = "❌ Gagal mengirim. Periksa koneksi internet Anda.";
            formMsg.style.color = "#ff6b6b"; // Warna error (merah)
        });
    });
}


// --- PERUBAHAN BARU: Logika Menu Hamburger ---

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        // Menambah/menghapus class 'show-menu' pada <nav>
        mainNav.classList.toggle("show-menu");
    });
}
