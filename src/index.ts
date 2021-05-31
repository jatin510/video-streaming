import express from 'express';
import apiRoutes from './routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
