import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlunoContext } from "../App";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import "./Home.css";

function Home() {
  const { alunos, setId, id } = useContext(AlunoContext);
  const [grafico, setGrafico] = useState(false);

  return (
    <div>
      <div>
        <Link to="/registrar">
          <button className="initialButton"> Novo</button>
        </Link>
        <button
          className="initialButton"
          onClick={() => setGrafico((grafico) => !grafico)}
        >
          {" "}
          Gráfico
        </button>
      </div>

      <div>
        <h2 className="cad">Alunos Cadastrados</h2>
        {alunos.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Avaliação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.matricula}>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.cpf}</td>
                  <td>{aluno.avaliacao}</td>
                  <td>
                    <Link to="alterar">
                      <button
                        className="changeButton"
                        onClick={() => setId(aluno.matricula)}
                      >
                        {" "}
                        ALTERAR
                      </button>
                    </Link>
                    <Link to="deletar">
                      <button
                        className="deletedButton"
                        onClick={() => setId(aluno.matricula)}
                      >
                        REMOVER
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {grafico && (
        <>
          <div className="chartPosition">
            <div className="chart">
              <BarChart />
            </div>
            <div className="chart">
              <LineChart />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
