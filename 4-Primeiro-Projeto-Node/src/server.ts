import express from 'express';
import Routes from './routes/index';

const app = express();

app.use(express.json());

app.use(Routes);

app.get('/',(request, response) => {
   return response.json({ message: 'Hello World' }); 
})

app.listen(3333, () => {
    console.log("App executando na port 3333");
});