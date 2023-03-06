const Express = require('express');
const app = new Express();
const PORT: number = 3000;




app.listen(PORT, (console.log('listening on port ', PORT)));