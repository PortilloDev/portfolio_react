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