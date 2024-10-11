const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors())

app.get('/calc', (req, res) => {
    const p = parseFloat(req.query.p);
    const r= parseFloat(req.query.r);
    const t = parseFloat(req.query.t);

    const onlyIntrest = (p * r * t)/100;
    const total = p + onlyIntrest;
    console.log(onlyIntrest)
    console.log(total)
  res.json({
    intrest:onlyIntrest,
    total:total
  });
//   res.send(total.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})