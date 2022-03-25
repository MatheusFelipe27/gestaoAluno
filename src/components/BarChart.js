import { Chart, registerables } from "chart.js";
import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import { AlunoContext } from "../App";

function BarChart() {
  Chart.register(...registerables);
  const { alunos, setAlunos } = useContext(AlunoContext);
  const [nomeChart, setNomeChart] = useState({
    labels: alunos.map((aluno) => aluno.nome),
    datasets: [
      {
        label: "Avaliação",
        data: alunos.map((aluno) => aluno.avaliacao),
        backgroundColor: ["blue"],
      },
    ],
  });

  return (
    <div style={{ width: "400px" }}>
      <Bar
        options={{
          maintainAspectRatio: false,
        }}
        data={nomeChart}
        height={200}
      />
    </div>
  );
}

export default BarChart;
