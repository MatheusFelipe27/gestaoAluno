import React from "react";
import { Link } from "react-router-dom";
import './Register.css'

function Register(){
    return(
        <div>
            <div className="registerDiv">
                <h2 className="registerH2">CADASTRAR ALUNO</h2>
                <div className="registerContainer">
                    <form className="registerForm">  
                        <label className="registerLabel">
                            Nome
                            <input className="registerInput" type="text" />
                        </label>
                        <label className="registerLabel">
                            CPF
                            <input className="registerInput" type="text" />
                        </label>
                        <label className="registerLabel">
                            Avaliação
                            <input className="registerInput" type="text"/>
                        </label>
                        <input className="registerSubmit" type="submit" value="CADASTRAR" />
                        <Link to ="/">
                            <button className="registerButton"> VOLTAR</button>
                        </Link>
                    </form>
                </div>
                   
            </div>
        </div>
    );
}

export default Register