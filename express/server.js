import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, resp) => {
    resp.sendFile(path.join(_dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});