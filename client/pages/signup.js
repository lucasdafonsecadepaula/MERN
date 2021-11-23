import react, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function SignUpPage() {
  const router = useRouter();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(nome == undefined)return;
    if(email == undefined)return;
    if(senha == undefined)return;

    axios
      .post(`http://localhost:8000/auth/register`, {
        name: nome,
        email: email,
        password: senha,
      })
      .then(function (response) {
        if (response.data.error === "Usuario já cadastrado")
          return console.log("Usuario já cadastrado");

        localStorage.setItem("data", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        router.push("/")
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
