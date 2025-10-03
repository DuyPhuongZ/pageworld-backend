import express, { urlencoded } from 'express'
import 'dotenv/config'
import webRoutes from './routes/web';
import configurationApp from './config/configuration';
console.log("Sau khi load dotenv:", process.env.PORT);

const app = express();
const PORT = process.env.PORT || 8080;

configurationApp(app);

webRoutes(app);

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
});