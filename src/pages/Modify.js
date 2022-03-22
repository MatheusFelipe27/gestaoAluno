import React from "react";
import { Link } from "react-router-dom";
import './Modify.css'

function Modify(){
    return(
        <div>
            <div className="modifyDiv">
                <h2 className="modifyH2">ALTERAÇÃO DE ALUNO</h2>
                <div className="modifyContainer">
                    <form className="modifyForm">  
                        <label className="modifyLabel">
                            Avaliação
                            <input className="modifyInput" type="text" disabled />
                        </label>
                        <label className="modifyLabel">
                            Nome
                            <input className="modifyInput" type="text" />
                        </label>
                        <label className="modifyLabel">
                            CPF
                            <input className="modifyInput" type="text" />
                        </label>
                        <label className="modifyLabel">
                            Avaliação
                            <input className="modifyInput" type="text"/>
                        </label>
                        <input className="modifySubmit" type="submit" value="ALTERAR" />
                        <Link to ="/">
                            <button className="modifyButton"> VOLTAR</button>
                        </Link>
                    </form>
                </div>
                   
            </div>
        </div>
    );
}

export default Modify