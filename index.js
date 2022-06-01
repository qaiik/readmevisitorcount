const app = require("express")();
const fs = require("fs");
app.get("/", (req,res)=>{
    let n = fs.readFileSync("./vis.txt").toString()
    fs.writeFileSync("./vis.txt", Number(n)+1)
    let visitor = fs.readFileSync("./vis.txt").toString()
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(`<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small { font: italic 13px sans-serif; fill: white; }
  </style>
  <text x="20" y="35" class="small">Hello! You are visitor ${visitor}</text>
</svg>`)
})

app.listen(3000)
