// =======================
// CATEGORY META
// =======================
const categoryMeta = {
  "fish": { label: "Fish", color: "#1E90FF" },
  "crops": { label: "Crops", color: "#32CD32" },
  "foraging": { label: "Foraging", color: "#FFA500" },
  "animals": { label: "Animals", color: "#8B4513" },
  "villagers": { label: "Villagers", color: "#FF69B4" },
  "bundles": { label: "Bundles", color: "#FFD700" },
  "minerals": { label: "Minerals", color: "#FFD700" },
  "artisangoods": { label: "Artisan", color: "#FFD700" },
  "cookbook": { label: "Cookbook", color: "#FFD700" }
};

let activeCategory = "";

const dashboard = document.getElementById("dashboard");
const resultsDiv = document.getElementById("results");

// =======================
// DASHBOARD
// =======================
function showDashboard() {
  dashboard.innerHTML = "";
  resultsDiv.innerHTML = "";
  activeCategory = "";

  for (let key in categoryMeta) {
    const meta = categoryMeta[key];

    const btn = document.createElement("div");
    btn.className = "card-button";
    btn.innerHTML = `<div>${meta.label}</div>`;

    btn.addEventListener("click", () => {
      // Clear search bar when changing category
      document.getElementById("searchInput").value = "";

      // Remove active from all buttons and set active on clicked button
      document.querySelectorAll(".card-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeCategory = key;
      searchAll();
    });

    dashboard.appendChild(btn);
  }
}

// =======================
// SEARCH / RENDER
// =======================
function searchAll() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  resultsDiv.innerHTML = "";

  for (let category in allData) {
    if (activeCategory && category !== activeCategory) continue;

    const items = allData[category];

    for (let name in items) {
      if (!query || name.toLowerCase().includes(query)) {
        const info = items[name];
        let html = `<div class="result-card" style="border-left:6px solid ${categoryMeta[category].color}"><h3>${name}</h3>`;

        // For bundles and all other categories, render info as fields
        if (category === "bundles") {
	  // Show Room
	  html += `<p class="field"><span class="label">Room:</span> ${info.room || "-"}</p>`;	  
          // Show reward
          html += `<p class="field"><span class="label">Reward:</span> ${info.reward}</p>`;
          // Show items clickable
          if (info.items && info.items.length > 0) {
            html += `<p class="field"><span class="label">Items:</span> `;
            html += info.items.map(i => `<span class="clickable-item chip" onclick="handleItemClick('${i}')">${i}</span>`).join(" ");
            html += `</p>`;
          }


        } else {
          // Normal rendering for other categories
          for (let key in info) {
            let val = info[key];
            if (Array.isArray(val)) {
              val = val.map(i => `<span class="clickable-item chip" onclick="handleItemClick('${i}')">${i}</span>`).join(" ");
            }
            html += `<p class="field"><span class="label">${key}:</span> ${val}</p>`;
          }
        }

        html += "</div>";
        resultsDiv.innerHTML += html;
      }
    }
  }
}

// =======================
// CLICK HANDLER
// =======================
function handleItemClick(item) {
  document.getElementById("searchInput").value = item;
  activeCategory = "";
  searchAll();
}

// =======================
// INIT
// =======================
showDashboard();