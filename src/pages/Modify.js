import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlunoContext } from "../App";
import "./Modify.css";

function Modify() {
  const { alunos, id, setId, setAlunos } = useContext(AlunoContext);
  const navigate = useNavigate();
  const { nome, cpf, avaliacao } = alunos.find(
    (aluno) => aluno.matricula === id
  );
  const [nomeAluno, setNomeAluno] = useState(nome);
  const [cpfAluno, setCpfAluno] = useState(cpf);
  const [avaliacaoAluno, setAvaliacaoAluno] = useState(avaliacao);

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
    if (!erro) setNomeAluno(e.target.value);
  }

  function checarTamanho() {
    let checarAqui = false;
    if (nomeAluno.length < 6 || nomeAluno.length > 40) {
      checarAqui = true;
      alert("O nome precisa conter entre 6 e 40 caracteres");
    } else if (
      cpfAluno !== cpf &&
      (cpfAluno.length !== 11 || alunos.find((aluno) => aluno.cpf === cpfAluno))
    ) {
      checarAqui = true;
      alert("CPF inválido ou já cadastrado");
    } else if (
      avaliacaoAluno == "" ||
      +avaliacaoAluno < 0 ||
      +avaliacaoAluno > 10
    ) {
      checarAqui = true;
      alert("Digite uma nota válida");
    }
    return checarAqui;
  }

  function modificarPosicao() {
    var arrayModificado = alunos.map((aluno) => aluno);
    var passou = false;
    for (var i = 0; i < arrayModificado.length; i++) {
      if (arrayModificado[i].matricula === id) {
        const modificarAluno = {};
        modificarAluno.matricula = `${id}`;
        modificarAluno.nome = nomeAluno;
        modificarAluno.cpf = cpfAluno;
        modificarAluno.avaliacao = +avaliacaoAluno;
        arrayModificado[i] = modificarAluno;
        passou = true;
      }
      if (passou) break;
    }
    return arrayModificado;
  }

  const modificar = (e) => {
    e.preventDefault();
    var condicao = checarTamanho();
    if (!condicao) {
      setAlunos(modificarPosicao());
      setId(null);
      setNomeAluno("");
      setCpfAluno("");
      setAvaliacaoAluno(-1);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="modifyDiv">
        <h2 className="modifyH2">ALTERAÇÃO DE ALUNO</h2>
        <div className="modifyContainer">
          <form className="modifyForm">
            <label className="modifyLabel">
              Matricula
              <input className="modifyInput" type="text" value={id} disabled />
            </label>
            <label className="modifyLabel">
              Nome
              <input
                className="modifyInput"
                type="text"
                value={nomeAluno}
                onChange={checarLetras}
              />
            </label>
            <label className="modifyLabel">
              CPF
              <input
                className="modifyInput"
                type="number"
                value={cpfAluno}
                onChange={(e) => setCpfAluno(e.target.value)}
              />
            </label>
            <label className="modifyLabel">
              Avaliação
              <input
                className="modifyInput"
                type="number"
                value={avaliacaoAluno}
                onChange={(e) => setAvaliacaoAluno(e.target.value)}
              />
            </label>
            <input
              className="modifySubmit"
              type="submit"
              value="ALTERAR"
              onClick={(e) => modificar(e)}
            />
            <Link to="/">
              <button className="modifyButton" onClick={() => setId(null)}>
                {" "}
                VOLTAR
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modify;
