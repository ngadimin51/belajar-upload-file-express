'use strict'

const form = document.querySelector('#uploadForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData();
    const gambar = document.querySelector('input[name="gambar"]').files[0]
    formData.append('gambar', gambar)
    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then( response => response.json())
    .then( result => {
        const target = document.querySelector('#response')
        if (result.status === 'success')
            return target.innerHTML = `<hr /><img src="${result.message}" />`
        target.innerHTML = '<hr />'+result.message
        form.reset()
    })
    .catch( err => {
        console.log(err)
    })
})