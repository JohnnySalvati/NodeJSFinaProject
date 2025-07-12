import express from 'express';
import { join, __dirname } from './src/utils/index.js';
import 'dotenv/config';
import cors from 'cors';
import userRoutes from './src/routes/user.routes.js';
import productRoutes from './src/routes/product.routes.js';
import authRoutes from './src/routes/authentication.routes.js'
import { authentication } from './src/middlewares/authentication.js';


const app = express();

const PORT = process.env.PORT
app.set("PORT", PORT);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use('/api/users', authentication, userRoutes);
app.use('/api/products',authentication, productRoutes);
app.use('/auth/login', authRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(app.get("PORT"), () => {
    console.log(`Server running on port http://localhost:${app.get("PORT")}`);
    
})
