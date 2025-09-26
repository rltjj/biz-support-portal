async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    document.getElementById(id).innerHTML = await res.text();

    if (id === "header") {
      initHamburger();
    }

  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/header.html");
  loadHTML("footer", "/footer.html");

  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("contactForm");

  if (modal) modal.style.display = "block";
  if (closeBtn) closeBtn.onclick = () => { modal.style.display = "none"; };

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const message = form.message.value;
      const phone = form.phone.value;

      console.log("보낼 데이터:", { message, phone });
      alert("메시지가 전송되었습니다!");
      form.reset();
      modal.style.display = "none";
    };
  }

  const openConsent = document.getElementById("openConsent");
  const consentText = document.getElementById("consentText");

  openConsent.addEventListener("click", function(e){
    e.preventDefault();
    if(consentText.style.display === "none"){
      consentText.style.display = "block";
    } else {
      consentText.style.display = "none";
    }
  });

});

function initHamburger() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (!hamburgerBtn || !navLinks) {
    console.warn("Hamburger elements not found in header");
    return;
  }

  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
