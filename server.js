const express = require('express');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); 

const sessions = {};

app.post('/execute', (req, res) => {
    const { id, code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "Invalid JSON payload" });
    }

    let sessionId;
    if (id && sessions[id]) {
        sessionId = id;
        sessions[sessionId].code += `\n${code}`;
    } else {
        sessionId = uuidv4();
        sessions[sessionId] = { code };
    }

    const process = spawn('python3', ['-c', sessions[sessionId].code]);
    let stdout = '';
    let stderr = '';

    process.stdout.on('data', (data) => {
        stdout += data.toString();
    });

    process.stderr.on('data', (data) => {
        stderr += data.toString();
    });

    const timeout = setTimeout(() => {
        process.kill();
        return res.status(200).json({ id: sessionId, error: "execution timeout" });
    }, 2000);

    process.on('close', (code) => {
        clearTimeout(timeout);
        if (code !== 0) {
            return res.status(200).json({ id: sessionId, stderr });
        }
        return res.status(200).json({ id: sessionId, stdout });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
