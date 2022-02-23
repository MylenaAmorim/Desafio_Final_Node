const app = require('./app.js');
require('dotenv-safe').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});