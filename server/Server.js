const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('fuck youuu spiderman!');
})

app.listen(PORT, ()=>{
    console.log(`server has started at ${PORT}`);
});