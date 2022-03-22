import React from "react";
import { Link } from "react-router-dom";
import './Delete.css'

function Delete(){
    return(
        <div>
            <div className="deleteDiv">
                <h2 className="deleteH2">ALTERAÇÃO DE ALUNO</h2>
                <div className="deleteContainer">
                    <form className="deleteForm">  
                        <label className="deleteLabel">
                            Avaliação
                            <input className="deleteInput" type="text" disabled />
                        </label>
                        <label className="deleteLabel">
                            Nome
                            <input className="deleteInput" type="text" disabled />
                        </label>
                        <label className="deleteLabel">
                            CPF
                            <input className="deleteInput" type="text" disabled />
                        </label>
                        <label className="deleteLabel">
                            Avaliação
                            <input className="deleteInput" type="text" disabled />
                        </label>
                        <input className="deleteSubmit" type="submit" value="DELETAR" />
                        <Link to ="/">
                            <button className="deleteButton"> VOLTAR</button>
                        </Link>
                    </form>
                </div>
                   
            </div>
        </div>
    );
}

export default Delete