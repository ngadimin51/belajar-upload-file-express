# belajar-upload-file-express
Contoh script upload file atau gambar di nodejs secara ajax, jadi kita bisa mengirim file tanpa harus berpindah halaman karena request dijalankan secara ajax.

- Server menggunakan nodejs
- Framework menggunakan express
- Middleware express-fileupload
- Static html
- Css
- Javascript untuk menghandle ajax

Konsep :
Client :
- Form event di prevent dengan java script
- Tangkap input file dan append ke dalam FormData.
- Kirim dengan fetch post ke server
- Result success atau gagal ditampilkan ke sisi client
Server :
- nodejs dengan framework express
- middleware express-fileupload
- get halaman utama ('/') mengirimkan file static html di folder public
- post halaman utama ('/') menerima file dengan nama gambar.
- check path untuk menampung gambar yaitu /images
- jika tidak ada maka buat folder (fs.mkdir) di folder public
- check ukuran file, jika sesuai dengan ketentuan simpan file upload di folder /public/images
- kirim hasil ke sisi client

Youtube : https://www.youtube.com/watch?v=YSU73jhBKb0

Article : https://ndalu.id/blog?title=upload%20file%20dengan%20nodejs%20/%20express-fileupload

Untuk penjelasan script perhatikan comment
comment script menggunakan tanda //ini adalah comment
