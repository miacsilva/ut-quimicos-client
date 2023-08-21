import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleSubject = (e) => setSubject(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name === "" || email === "" || subject === "" || message === "") {
        alert("Por favor, preencha os campos obrigatórios do formulário.");
        return;
      }
      else {
        const Alert = () => {
          Swal.fire("Mensagem enviada!"," " ,'success')
        }
        Alert ()
      }
      const templateParams = {
        from_name: name,
        message: message,
        subject: subject,
        phoneNumber: phoneNumber,
        email: email,
      };
      emailjs
        .send(
          "service_uq6p8ck",
          "template_cspwjln",
          templateParams,
          "Q6I4dQ8TGOcg1bH8g"
        )
        .then((res) => {
          console.log("Email Enviado", res.status, res.text);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setSubject("");
          setMessage("");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerForm">
     
      <h1 className="titleForm">
        Necessita de alguma informação ou quer ser contactado?
        <br></br>
         Deixe-nos uma mensagem!
        Responderemos com a máxima brevidade.
      </h1>

    

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Digite o seu nome"
          onChange={handleName}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite o seu email"
          onChange={handleEmail}
          value={email}
        />
        <input
          className="input"
          type="number"
          placeholder="Digite o seu número (opcional)"
          onChange={handlePhoneNumber}
          value={phoneNumber}
        />
        <input
          className="input"
          type="text"
          placeholder="Digite o assunto"
          onChange={handleSubject}
          value={subject}
        />

        <textarea
          className="textarea"
          placeholder="Deixe aqui a sua mensagem..."
          onChange={handleMessage}
          value={message}
        />
        <input className="buttonForm" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default ContactForm;
