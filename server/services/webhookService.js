
const axios = require("axios");

async function triggerWebhook(email, category) {
    try {
        await axios.post("https://webhook.site/YOUR_UNIQUE_URL", { email, category });
        console.log("Webhook triggered successfully!");
    } catch (err) {
        console.error("Error triggering webhook:", err);
    }
}

module.exports = { triggerWebhook };