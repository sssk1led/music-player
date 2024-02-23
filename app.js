const pt = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const static = file => pt.resolve(__dirname, 'static', file)
app.use(express.static(static('')))

app.get('/' ,(req, res) => {
  res.sendFile(static('music-list.html'))
})

app.get('/music_list', (req, res) => {
  fs.readdir('./static/music', (err, files) => {
    res.send(files)
  })
})

app.listen(1488, () => console.log('http://localhost:'+1488))