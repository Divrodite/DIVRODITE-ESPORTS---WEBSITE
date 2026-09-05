let defaultSchedules = [
  { role: "🏆 EVENT DIVRODITE ID", title: "DIVRODITE ID SCRIM LEAGUE COLABORATION SEASON 2", time: "COMING SOON • TBA" },
  { role: "⚔️ EVENT DIVRODITE ID", title: "BATTLE OF DIVRODITE SEASON 4", time: "COMING SOON • TBA" },
  { role: "⚔️ EVENT DIVRODITE ID", title: "CLASH OF DIVRODITE SEASON 2", time: "COMING SOON • TBA" },
  { role: "⚔️ EVENT DIVRODITE ID", title: "SCRIM INTERNAL", time: "SETIAP SABTU • 20.00 WIB" },
  { role: "⚔️ EVENT DIVRODITE ID", title: "SCRIM EKSTERNAL", time: "SETIAP AKHIR BULAN • 20.00 WIB" }
];

let schedules = JSON.parse(localStorage.getItem('divrodite_schedules')) || defaultSchedules;

function renderSchedules() {
  const container = document.getElementById('scheduleContainer');
  if(!container) return;
  container.innerHTML = '';
  
  schedules.forEach((item) => {
    container.innerHTML += `
      <div class="card">
        <div class="card-role">${item.role}</div>
        <div class="card-name" style="font-size: 1.1rem; font-weight: bold;">${item.title}</div>
        <div class="card-contact">${item.time}</div>
      </div>
    `;
  });
}

// Gunakan ini agar aman dan tidak merusak fungsi lain di script.js
document.addEventListener("DOMContentLoaded", function() {
  renderSchedules();
});