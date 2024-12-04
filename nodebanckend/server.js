const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/analyze", async (req, res) => {
    const { document } = req.body;

    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
            { inputs: document },
            {
                headers: {
                    Authorization: `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`,
                },
            }
        );
        alert("yes")
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
