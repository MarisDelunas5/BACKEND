import express from 'express';
import 'dotenv/config.js';
import BookRoutes from './routes/BookRoute.js';
import StudentRoutes from './routes/StudentRoutes.js';
const app = express();

app.use(express.json());
try{
app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT || 3000}...`);

});

}catch(e){
    console.log(e);

}

app.use('/book',BookRoutes)
app.use('/student', StudentRoutes);