'use strict' //jalan strict 

const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const fs = require('fs');
const server = http.createServer(app)

const fileUpload = require('express-fileupload')

app.use(fileUpload())

app.use(express.static('public'))

app.get('/', (req, res) => { //Jika halaman utama diakses
    res.sendFile(path.join(__dirname, 'public', 'index.html')) //kirim file didalam folder public dengan nama index.html
})

app.post('/', async (req, res) => {
    let sampleFile //buat variabel untuk file yg diupload
    let uploadPath //buat variabel untuk lokasi file upload
    let maxSize = 10000 //dalam satuan byte

    if (!req.files || Object.keys(req.files).length === 0) { //buat kondisi jika tidak ada file yang terupload
        return res.status(400).send({
            message: 'Tidak ada file yang diupload.'
        }); //kirim keterangan file tidak terupload
    }

    //Misalnya input file kita beri nama gambar
    sampleFile = req.files.gambar;
    uploadPath = __dirname + '/public/images/'; //tentukan lokasi penyimpanan file

    if (!fs.existsSync(uploadPath)){ //check, apakah ada folder tujuan
        fs.mkdirSync(uploadPath); //jika tidak ada maka buat folder
    }
    
     //kita kirim file ke lokasi penyimpanan, gunakan async await karena kita perlu melakukan check ketersediaan folder
    if (sampleFile.size > maxSize) { //check jika file yang dikirim melebihi ukuran ketentuan
        return res.status(200).send({
            status: 'failed',
            message: 'Max size allowed is '+maxSize / 1000+' kilobyte<br />Your file size is '+(sampleFile.size /1000).toFixed(2)+' kilobyte'
        }) //kirim error ke client
    } else {
        await sampleFile.mv(uploadPath  + sampleFile.name, (err) => {
            if (err) //jika error
                return res.status(500).send(err) //kirim error ke client

            res.send({
                status: 'success',
                message: '/images/'+sampleFile.name
            })
        });
    }
});

server.listen(7000, console.log('Server run on port 7000'))