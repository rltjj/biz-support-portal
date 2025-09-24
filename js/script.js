async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/header.html");
  loadHTML("footer", "/footer.html");
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');
  const msg = document.getElementById('msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    localStorage.setItem('sme_lead', JSON.stringify({ ...data, ts: new Date().toISOString() }));
    msg.textContent = '접수 완료! 담당자가 곧 연락드립니다.';
    form.reset();
  });
});
