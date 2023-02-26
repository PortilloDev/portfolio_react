import axios from "axios";

export async function sendMessage (dataFromForm) {
    try {

        const response = await axios ({
            url: 'https://notasweb.me/api/v1/contact_form/',
            method: 'POST',
            data: dataFromForm,

        })

        return response.status
    } catch(e) {
        console.log(e.status)
    }
}


export async function registerVisited () {
    let previousPageUrl = document.referrer;
    let message = "";

    if ( previousPageUrl === "" ) {
        previousPageUrl = document.URL
    }

    axios.post('https://notasweb.me/api/v1/visits', {
        referrer: previousPageUrl
    })
        .then(function (response) {
            message = "Welcome Blue Rhino!!"
        })
        .catch(function (error) {
            console.log(error);
            message = error
        });
    return message;
}

