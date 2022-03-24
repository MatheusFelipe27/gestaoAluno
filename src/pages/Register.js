import {React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AlunoContext } from "../App";
import './Register.css'

var novoAluno = 
    {
        matricula: "",
        nome: "",
        cpf: -1,
        avaliacao: -1
    };

var matriculaCount = 5;
var entrou=false;

function Register(){
    const {setId, id, alunos, setAlunos} = useContext(AlunoContext);
    const [ nome, setNome] = useState("");
    const [cpf, setCpf] = useState(-1);
    const [avaliacao, setAvaliacao] = useState(-1);
    

    const registrarAluno = () =>{
        if(!entrou) matriculaCount++; 
        entrou=false
        novoAluno.matricula = `${matriculaCount}`;
        novoAluno.nome = nome;
        novoAluno.cpf = cpf;
        novoAluno.avaliacao = avaliacao;
        var checar = false;
       if(novoAluno.nome.length<6 || novoAluno.nome.length>40){
           checar = true;
           entrou=true
           alert("O nome precisa conter entre 6 e 40 caracteres");
       }
       if(novoAluno.cpf.toString().length!==11 || alunos.find(aluno => aluno.cpf === novoAluno.cpf)){
           checar= true;
           entrou=true
           alert("Aluno já cadastrado ou CPF inválido")
       }
       if(novoAluno.avaliacao=== -1 || novoAluno.avaliacao<0 || novoAluno.avaliacao>10){
           checar = true;
           entrou=true
           alert("Digite uma nota válida")
       }

        if(!checar){
            setAlunos(alunos.concat(novoAluno));
            novoAluno ={
                matricula: "",
                nome: "",
                cpf: -1,
                avaliacao: -1
            };
            checar = false;
        }    
    }
    
    return(
        <div>
            <div className="registerDiv">
                <h2 className="registerH2">CADASTRAR ALUNO</h2>
                <div className="registerContainer">
                    <form className="registerForm">  
                        <label className="registerLabel">
                            Nome
                            <input className="registerInput" value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                type="text"/>
                        </label>
                        <label className="registerLabel">
                            CPF
                            <input className="registerInput"  
                                onChange={(e) => setCpf(e.target.value)}
                                type="number" />
                        </label>
                        <label className="registerLabel">
                            Avaliação
                            <input className="registerInput" 
                                onChange={(e) => setAvaliacao(e.target.value)}
                                type="number"/>
                        </label>
                        <Link to="/">
                            <input className="registerSubmit" type="submit"
                                onClick={registrarAluno} value="CADASTRAR" />
                        </Link>
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