import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();

app.use(bodyParser.json());

// /api/users
app.use('/api', userRouter);

app.listen(3000, function () {
  console.log('Server is running in port 3000');
});
