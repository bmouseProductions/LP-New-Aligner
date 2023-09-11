import { FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HCaptcha from "@hcaptcha/react-hcaptcha";



interface FormData {
  nome: string;
  telefone: string;
  email: string;
}

export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true)
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    } finally{
      setIsSending(false)
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="w-full sm:w-auto flex flex-col">
      <label className="font-bold" htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        value={formData.nome}
        required
        className="mb-5 h-[50px]  md:w-[600px] lg:w-[400px] xl:w-[600px] rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        required
        className="mb-5 h-[50px]  md:w-[600px] lg:w-[400px] xl:w-[600px] rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        onChange={handleChange}
        value={formData.telefone}
        required
        className="mb-5 h-[50px]  md:w-[600px] lg:w-[400px] xl:w-[600px] rounded text-black px-2"
      />

      <HCaptcha
        sitekey="your-sitekey"
        onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
      />

      <Button
        type="submit"
        variant="contained"
        id="styleButton"
        endIcon={<SendIcon />}
        className="max-w-[600px]"
        disabled={isSending}
      >
        Eu quero me credenciar
      </Button>
      
    </form>
  );
};
