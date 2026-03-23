// =======================
// CATEGORY META
// =======================
const categoryMeta = {
  "fish": { label: "Fish"},
  "crops": { label: "Crops"},
  "foraging": { label: "Foraging"},
  "animals": { label: "Animals"},
  "villagers": { label: "Villagers"},
  "bundles": { label: "Bundles"},
  "minerals": { label: "Minerals"},
  "artisangoods": { label: "Artisan"},
  "cookbook": { label: "Cookbook"}
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
