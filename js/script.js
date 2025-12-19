const btn = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.classList.toggle("is-open", isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
});


const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const birthdayInput = document.getElementById("birthday");
const messageInput = document.getElementById("message");

const outTime = document.getElementById("out-time");
const outName = document.getElementById("out-name");
const outBirthday = document.getElementById("out-birthday");
const outGender = document.getElementById("out-gender");
const outMessage = document.getElementById("out-message");

function getGender() {
  const checked = document.querySelector('input[name="gender"]:checked');
  return checked ? checked.value : "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // penting: biar halaman tidak refresh

  const now = new Date();
  outTime.textContent = now.toLocaleString();

  outName.textContent = nameInput.value.trim() || "-";
  outBirthday.textContent = birthdayInput.value || "-";
  outGender.textContent = getGender() || "-";
  outMessage.textContent = messageInput.value.trim() || "-";
});


// MODAL MESSAGE POP UP

  const modal = document.getElementById("nameModal");
  const formModal = document.getElementById("nameForm");
  const input = document.getElementById("visitorName");
  const errorEl = document.getElementById("nameError");
  const greetingName = document.getElementById("greetingName");

  function openModal() {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    // fokus otomatis ke input
    setTimeout(() => input.focus(), 50);

    // lock scroll body
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function setName(name) {
    greetingName.textContent = "Halo" + " " + name + " " + "👋";
  }

  // 1) Saat pertama load, cek apakah sudah ada nama tersimpan
  window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("visitorName");
    if (savedName && savedName.trim().length >= 2) {
      setName(savedName);
    } else {
      openModal();
    }
  });

  // 2) Submit form -> validasi -> simpan -> tutup modal
formModal.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = input.value.trim();

  if (name.length < 3) {
    errorEl.textContent = "Nama minimal 3 karakter.";
    input.focus();
    return;
  }

  if (/^\d+$/.test(name)) {
    errorEl.textContent = "Nama tidak boleh hanya angka.";
    input.focus();
    return;
  }

  // ✅ Tambahan validasi di sini
  if (!/^[A-Za-z\s]+$/.test(name)) {
    errorEl.textContent = "Nama hanya boleh huruf dan spasi (tanpa angka/simbol).";
    input.focus();
    return;
  }

  errorEl.textContent = "";
  localStorage.setItem("visitorName", name);
  setName(name);
  closeModal();
});

  // 3) Biar modal “wajib isi nama”: klik backdrop dan ESC tidak menutup
  modal.addEventListener("click", (e) => {
    // Kalau user klik area gelap, kita tetap tahan modal
    // (Sengaja dikosongkan / tidak close)
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      // tahan ESC supaya tidak bisa skip
      e.preventDefault();
    }
  });