import {React, useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AlunoContext } from "../App";
import './Modify.css'

var modificarAluno = {
    matricula: "",
    nome: "",
    cpf: "",
    avaliacao: -1
};

function Modify(){
    const {alunos, id, setId, setAlunos} = useContext(AlunoContext);
    //console.log(alunos[id-1].nome)
    const{nome, cpf, avaliacao} = alunos.find(aluno => aluno.id=== id)
    const [nomeAluno, setNomeAluno] = useState(nome);
   // console.log(alunos[id-1].nome)
    const [cpfAluno, setCpfAluno] = useState(cpf);
    const [avaliacaoAluno, setAvaliacaoAluno] = useState(avaliacao);

    function checarTamanho(checarAqui){
        checarAqui = false
        console.log(checarAqui)
        if(nomeAluno.length<6 || nomeAluno.length>40){
            checarAqui = true
            console.log(checarAqui)
        }     
        else if( cpfAluno.length!==11){ 
            checarAqui = true
            console.log(checarAqui)
        }    
        else if(avaliacaoAluno<0 || avaliacaoAluno>10){
            checarAqui = true
            console.log(checarAqui)
        }    
        console.log(nomeAluno)
        console.log(cpfAluno)
        console.log(avaliacaoAluno)
        console.log(checarAqui)
        return checarAqui
    }
    
    function modificarPosicao (){
        var arrayModificado = alunos.map(aluno => aluno);
        console.log("entrei")
        console.log(arrayModificado)
        var passou = false;
        for(var i=0; i<arrayModificado.length; i++){
            if(arrayModificado[i].matricula === id){
                modificarAluno.matricula = `${id}`;
                modificarAluno.nome = nomeAluno;
                modificarAluno.cpf = cpfAluno;
                modificarAluno.avaliacao = +avaliacaoAluno;
                arrayModificado[i]= modificarAluno
                passou=true
            }
            if(passou) break
        }
        return arrayModificado
    }

    const modificar = () =>{
        var boolean = false
        var condicao = checarTamanho(boolean)
        console.log("estou em modificar")
        if(!condicao){
            setAlunos(modificarPosicao())
            setId(null);
            setNomeAluno("")
            setCpfAluno("")
            setAvaliacaoAluno(-1)
        }     
    }

    return(
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
                            <input className="modifyInput" type="text" value={nomeAluno} 
                                onChange={(e)=> setNomeAluno(e.target.value)}/>
                        </label>
                        <label className="modifyLabel">
                            CPF
                            <input className="modifyInput" type="number" value={cpfAluno}
                                onChange={(e) => setCpfAluno(e.target.value)} />
                        </label>
                        <label className="modifyLabel">
                            Avaliação
                            <input className="modifyInput" type="number" value={avaliacaoAluno}
                                onChange={(e) => setAvaliacaoAluno(e.target.value)} />
                        </label>
                        <Link to="/">
                        <input className="modifySubmit" type="submit" value="ALTERAR"
                            onClick={modificar} />
                        </Link>
                        <Link to ="/">
                            <button className="modifyButton"
                                onClick={() => setId(null)}> VOLTAR</button>
                        </Link>
                    </form>
                </div>
                   
            </div>
        </div>
    );
}

export default Modify