// Node modules
import express from 'express';
import cors from 'cors';

// Custom services
import router from "./api/api.endpoint.js";

const app = express();
const PORT = 3000;

/** node modules **/
app.use(cors());

/** custom modules **/
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});