async function checkURL() {

    const url = document.getElementById("urlInput").value;

    // Loading Animation
    document.getElementById("result").innerHTML = `
    
        <div class="loader"></div>
        <p>🔍 Scanning URL...</p>
    
    `;

    // Fake Delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch("http://127.0.0.1:8000/check", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            url: url
        })
    });

    const data = await response.json();

    let color = data.status === "Phishing"
        ? "#ff4d4d"
        : "#7CFC00";

    let icon = data.status === "Phishing"
        ? "🚨"
        : "✅";

    document.getElementById("result").innerHTML = `
    
        <h2 style="color:${color};">
            ${icon} Status: ${data.status}
        </h2>

        <h3>
            Risk Score: ${data.score}
        </h3>

        <div style="margin-top:20px;">

            ${data.reasons.map(reason => `
                <p>⚠️ ${reason}</p>
            `).join("")}

        </div>

    `;
}