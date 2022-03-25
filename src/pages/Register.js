import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlunoContext } from "../App";
import "./Register.css";

function Register() {
  const { setId, id, alunos, setAlunos } = useContext(AlunoContext);
  const navigation = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  function getMatricula() {
    let answer = 0;
    for (let i = 0; i < alunos.length; i++) {
      if (parseInt(alunos[i].matricula) > answer)
        answer = parseInt(alunos[i].matricula);
    }
    return answer + 1;
  }

  const registrarAluno = (e) => {
    e.preventDefault();
    const novoAluno = {};
    novoAluno.nome = nome;
    novoAluno.cpf = cpf;
    novoAluno.avaliacao = +avaliacao;
    var checar = false;
    if (novoAluno.nome.length < 6 || novoAluno.nome.length > 40) {
      checar = true;
      alert("O nome precisa conter entre 6 e 40 caracteres");
    }
    if (
      novoAluno.cpf.length !== 11 ||
      alunos.find((aluno) => aluno.cpf === novoAluno.cpf)
    ) {
      checar = true;
      alert("Aluno já cadastrado ou CPF inválido");
    }
    if (
      novoAluno.avaliacao == "" ||
      +novoAluno.avaliacao < 0 ||
      +novoAluno.avaliacao > 10
    ) {
      checar = true;
      alert("Digite uma nota válida");
    }

    if (!checar) {
      novoAluno.matricula = `${getMatricula()}`;
      setAlunos(alunos.concat(novoAluno));
      checar = false;
      navigation("/");
    }
  };

  function checarLetras(e) {
    var erro = false;
    for (let i = 0; i < e.target.value.length; i++) {
      if (
        (e.target.value[i] < "A" || e.target.value[i] > "Z") &&
        (e.target.value[i] < "a" || e.target.value[i] > "z") &&
        e.target.value[i] != " "
      )
        erro = true;
    }
    if (!erro) setNome(e.target.value);
  }

  return (
    <div>
      <div className="registerDiv">
        <h2 className="registerH2">CADASTRAR ALUNO</h2>
        <div className="registerContainer">
          <form className="registerForm">
            <label className="registerLabel">
              Nome
              <input
                className="registerInput"
                value={nome}
                onChange={checarLetras}
                type="text"
              />
            </label>
            <label className="registerLabel">
              CPF
              <input
                className="registerInput"
                onChange={(e) => setCpf(e.target.value)}
                type="number"
              />
            </label>
            <label className="registerLabel">
              Avaliação
              <input
                className="registerInput"
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
                type="number"
              />
            </label>
            <input
              className="registerSubmit"
              type="submit"
              onClick={(e) => registrarAluno(e)}
              value="CADASTRAR"
            />
            <Link to="/">
              <button className="registerButton"> VOLTAR</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
