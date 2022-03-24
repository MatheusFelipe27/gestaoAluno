import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AlunoContext } from "../App";
import './Home.css';

function Home(){
    const {alunos, setId, id} = useContext(AlunoContext)
    console.log(alunos);
    //console.log(id)
    return(
        <div>
            <div>
                <Link to="/registrar">
                    <button className="initialButton"> Novo</button>
                </Link>    
                <button className="initialButton"> Gráfico</button>
            </div>

            <div>
                <h2 className="cad">
                    Alunos Cadastrados
                </h2>
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
                        {alunos.map((aluno, matricula) =>(
                            <tr key={matricula}>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.avaliacao}</td>
                                <td>
                                    <Link to="alterar">
                                        <button className="changeButton"
                                         onClick={()=> setId(aluno.matricula)}> ALTERAR</button>
                                    </Link>
                                    <Link to ="deletar">
                                        <button className="deletedButton"
                                         onClick={()=> setId(aluno.matricula)}>REMOVER</button>
                                    </Link>    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>    
        </div>
    );
}

export default Home