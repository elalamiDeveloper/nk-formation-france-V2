import app from './app.js';
import connect from './database/connectDB.js';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`App running in port ${port}`);
});
