const app = require("express")();
const fs = require("fs");
app.get("/", (req,res)=>{
    console.log("hi")
    let n = fs.readFileSync("./vis.txt").toString()
    fs.writeFileSync("./vis.txt", Number(n)+1)
    let visitor = fs.readFileSync("./vis.txt").toString()
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control","no-cache, no-store")
  res.setHeader("Expires", "Mon, 01 Jan 1990 00:00:00 GMT")
  res.setHeader("Last-Modified", "Mon, 01 Jan 2999 00:00:00 GMT")
  res.setHeader("id", String(Math.random()))
    res.send(`<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small { font: italic 13px sans-serif; fill: white; }
  </style>
  <text x="20" y="35" class="small">Hello! You are visitor ${visitor}</text>
</svg>`)
})

app.listen(3000)
