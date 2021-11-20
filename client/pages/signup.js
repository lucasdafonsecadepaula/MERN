import react, { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/auth/register`, {
        name: nome,
        email: email,
        password: senha,
      })
      .then(function (response) {
        if (response.data.error === "Usuario já cadastrado")
          return console.log("Usuario já cadastrado");

        console.log(response);
      })
      .catch(function (error) {});
  };

  return (
    <>
      <div>
        <h1>CADASTRAR0</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <input
            type="submit"
            value="Cadastrar"
            onClick={(e) => handleSubmit(e)}
          ></input>
          <a href="/">Já tem uma conta?</a>
        </form>
      </div>
    </>
  );
}
