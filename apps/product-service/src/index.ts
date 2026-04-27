import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import productRouter from './routes/product.route';
import categoryRouter from './routes/category.route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(express.json())


app.use("/products", productRouter  );
app.use("/categories", categoryRouter);


app.listen(PORT, () => {
    console.log("Product service is running on port: ", PORT);
})