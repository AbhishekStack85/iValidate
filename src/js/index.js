// DOM references — ensure these IDs exist in your HTML
const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");
const usernameInput = document.getElementById("username");

// NOTE: It's not safe to keep API keys in client-side code for production.
const apiKey = "ema_live_MDXof0ifZXygSzKxCLUT9qKGOEkjEhHMKtypB9l6";

// A small helper to show messages
function showMessage(html) {
    if (resultCont) resultCont.innerHTML = html;
}

async function validateAndShow() {
    if (!resultCont) {
        console.error("resultCont element not found in DOM");
        return;
    }

    const email = (usernameInput && usernameInput.value) ? usernameInput.value.trim() : "";
    if (!email) {
        showMessage("Please enter an email address.");
        return;
    }

    // disable button to prevent double submits
    if (submitBtn) submitBtn.disabled = true;
    showMessage(`<img width="123" src="img/loading.svg" alt="loading">`);

    const url = `https://api.emailvalidation.io/v1/info?apikey=${encodeURIComponent(apiKey)}&email=${encodeURIComponent(email)}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            const bodyText = await res.text().catch(() => "");
            throw new Error(`HTTP ${res.status} ${res.statusText} ${bodyText}`);
        }
        const data = await res.json();

        let str = "";
        for (const k of Object.keys(data)) {
            const v = data[k];
            if (v !== null && v !== undefined && String(v).trim() !== "") {
                str += `<div><strong>${k}</strong>: ${v}</div>`;
            }
        }

        showMessage(str || "No data returned.");
    } catch (err) {
        console.error(err);
        // Common issues: network errors or CORS. Give the user a hint.
        if (err instanceof TypeError) {
            showMessage(`Network error or CORS blocked the request. See console for details: ${err.message}`);
        } else {
            showMessage(`Error: ${err.message}`);
        }
    } finally {
        if (submitBtn) submitBtn.disabled = false;
    }
}

if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        validateAndShow();
    });
} else {
    console.error("submitBtn element not found in DOM");
}
