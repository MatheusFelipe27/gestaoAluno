import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import './Home.css';

const initial = [
    {
        matricula: '1',
        nome: 'Matheus',
        cpf: '12345678901',
        avaliacao: '10' 
    },

    {
        matricula: '2',
        nome: 'Jose',
        cpf: '12345678902',
        avaliacao: '5'
    },
    {
        matricula: '3',
        nome: 'Macaule',
        cpf: '12345678903',
        avaliacao: '10'
    },
    {
        matricula: '4',
        nome: 'Carmen',
        cpf: '12345678904',
        avaliacao: '7'
    },
    {
        matricula: '5',
        nome: 'Pedro',
        cpf: '12345678905',
        avaliacao: '8'
    }
]

function Home(){
    
    const [alunos, setAlunos] = useState(initial);

    const deleteStudant = (matricula) => {
        const copy = {...alunos}
        let index = copy.indexOf(matricula)
        copy.splice(index, 1)
        setAlunos(copy);
    };

    return(
        <div>
            <div>
                <Link to="/register">
                    <button className="initialButton"> Novo</button>
                </Link>    
                <button className="initialButton"> Gráfico</button>
            </div>

            <div>
                <h2 className="cad">
                    Alunos Cadastrados
                </h2>
                <table className="table">
                    <tr>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Avaliação</th>
                        <th>Ações</th>
                    </tr>
                    {alunos.map((aluno, matricula) =>(
                        <tr key={matricula}>
                            <td>{aluno.matricula}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.cpf}</td>
                            <td>{aluno.avaliacao}</td>
                            <td>
                                <Link to="alterar">
                                    <button className="changeButton"> ALTERAR</button>
                                </Link>
                                
                                <Link to ="deletar">
                                <button className="deletedButton"
                                    onClick={() => deleteStudant(matricula)}>REMOVER</button>
                                </Link>    
                            </td>
                        </tr>

                    ))}
                </table>
            </div>    

        </div>

        
    );
}

export default Home