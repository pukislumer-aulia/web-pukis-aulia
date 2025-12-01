document.addEventListener('DOMContentLoaded', function() {
    const formUltra = document.getElementById('formUltra');
    const ultraNama = document.getElementById('ultraNama');
    const ultraWA = document.getElementById('ultraWA');
    const ultraJumlah = document.getElementById('ultraJumlah');
    const testimonialForm = document.getElementById('testimonialForm');
    const nameInput = document.getElementById('nameInput');
    const testimonialInput = document.getElementById('testimonialInput');
    const notaContainer = document.getElementById('notaContainer');
    const notaContent = document.getElementById('notaContent');
    const notaClose = document.getElementById('notaClose');
    const notaPrint = document.getElementById('notaPrint');

    // Fungsi untuk menampilkan pesan error
    function showError(input, message) {
        const parent = input.parentElement;
        const errorElement = parent.querySelector('.error-message') || document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        parent.appendChild(errorElement);
        input.classList.add('error');
    }

    // Fungsi untuk menghilangkan pesan error
    function clearError(input) {
        const parent = input.parentElement;
        const errorElement = parent.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
        input.classList.remove('error');
    }

    // Validasi Form Pemesanan
    function validateFormUltra() {
        let isValid = true;

        clearError(ultraNama);
        clearError(ultraWA);
        clearError(ultraJumlah);

        if (ultraNama.value.trim() === '') {
            showError(ultraNama, 'Nama harus diisi');
            isValid = false;
        }

        if (ultraWA.value.trim() === '') {
            showError(ultraWA, 'Nomor WhatsApp harus diisi');
            isValid = false;
        } else if (!/^\d+$/.test(ultraWA.value.trim())) {
            showError(ultraWA, 'Nomor WhatsApp harus berupa angka');
            isValid = false;
        }

        if (ultraJumlah.value <= 0) {
            showError(ultraJumlah, 'Jumlah harus lebih dari 0');
            isValid = false;
        }

        return isValid;
    }

    // Validasi Form Testimoni
    function validateTestimonialForm() {
        let isValid = true;

        clearError(nameInput);
        clearError(testimonialInput);

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Nama harus diisi');
            isValid = false;
        }

        if (testimonialInput.value.trim() === '') {
            showError(testimonialInput, 'Testimoni harus diisi');
            isValid = false;
        }

        return isValid;
    }

    // Submit Form Pemesanan
    if (formUltra) {
        formUltra.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateFormUltra()) {
                // Di sini Anda dapat mengumpulkan data form dan mengirimkannya ke server
                // atau melakukan tindakan lain yang diperlukan
                const nama = ultraNama.value.trim();
                const wa = ultraWA.value.trim();
                const jumlah = ultraJumlah.value;

                // Membuat konten nota (contoh)
                const nota = `
                    <p>Nama: ${nama}</p>
                    <p>WhatsApp: ${wa}</p>
                    <p>Jumlah: ${jumlah}</p>
                    <p>Terima kasih atas pesanan Anda!</p>
                `;

                notaContent.innerHTML = nota;
                notaContainer.style.display = 'flex'; // Tampilkan nota
            }
        });
    }

    // Submit Form Testimoni
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateTestimonialForm()) {
                // Di sini Anda dapat mengumpulkan data form dan mengirimkannya ke server
                // atau melakukan tindakan lain yang diperlukan
                alert('Testimoni berhasil dikirim!');
                testimonialForm.reset();
            }
        });
    }

    // Menutup Nota
    if (notaClose) {
        notaClose.addEventListener('click', function() {
            notaContainer.style.display = 'none';
        });
    }

    // Mencetak Nota
    if (notaPrint) {
        notaPrint.addEventListener('click', function() {
            try {
                window.print(); // Cetak nota
            } catch (error) {
                console.error('Gagal mencetak nota:', error);
                alert('Gagal mencetak nota. Pastikan browser Anda mendukung pencetakan.');
            }
        });
    }
});
