const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const routes = require('./controllers');
const sequelize = require('./config/connection');

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
  });