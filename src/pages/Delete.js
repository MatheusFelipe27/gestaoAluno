import {React, useContext}  from "react";
import { Link } from "react-router-dom";
import { AlunoContext } from "../App";
import './Delete.css'

function Delete(){
    const {alunos, id, setId, setAlunos}= useContext(AlunoContext);

    const {nome, cpf, avaliacao} = alunos.find(aluno => aluno.matricula===id)

    const deleteAluno = () =>{
        setAlunos(alunos.filter(aluno => aluno.matricula !== id))
        setId(null)
    }

    return(
        <div>
            <div className="deleteDiv">
                <h2 className="deleteH2">ALTERAÇÃO DE ALUNO</h2>
                <div className="deleteContainer">
                    <form className="deleteForm">  
                        <label className="deleteLabel">
                            Matricula
                            <input className="deleteInput" type="text" value={id} disabled />
                        </label>
                        <label className="deleteLabel">
                            Nome
                            <input className="deleteInput" type="text" value={nome} disabled  />
                        </label>
                        <label className="deleteLabel">
                            CPF
                            <input className="deleteInput" type="number" value={cpf} disabled />
                        </label>
                        <label className="deleteLabel">
                            Avaliação
                            <input className="deleteInput" type="number" value={avaliacao} disabled />
                        </label>
                        <Link to="/">
                            <input className="deleteSubmit" type="submit" value="DELETAR" 
                                onClick={deleteAluno}/>
                        </Link>
                        <Link to ="/">
                            <button className="deleteButton"
                                onClick={()=> setId(null)}> VOLTAR</button>
                        </Link>
                    </form>
                </div>
                   
            </div>
        </div>
    );
}

export default Delete