import express from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.listen(PORT, () => {
    console.log("Product service is running on port: ", PORT);
})