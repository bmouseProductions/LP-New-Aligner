import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-new-aligner.onrender.com"
})

interface propsFormData {
    nome: string;
    telefone: string;
    email: string;
}

export const enviarEmail = async (formData: propsFormData) => {
    const {nome, telefone, email} = formData;

    const dataToSend = {
        nome,
        telefone,
        email
    }
    try{
        const response = await api.post("/send", dataToSend);
        if (response.status === 200) {
            window.alert("Email enviado com sucesso!");
          } else {
            window.alert("Falha ao enviar o email. Por favor, tente novamente.");
        }
        return response.data
    } catch (error: any) {
        throw new Error("Erro" + error.message)
    }

}