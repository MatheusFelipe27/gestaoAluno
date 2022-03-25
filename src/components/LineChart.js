import { Chart, registerables } from "chart.js";
import React, { useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import { AlunoContext } from "../App";

function LineChart() {
  Chart.register(...registerables);
  const { alunos, setAlunos } = useContext(AlunoContext);
  const [chart, setChart] = useState({
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
      <Line
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              suggestedMax: 10,
            },
          },
        }}
        data={chart}
        height={200}
      />
    </div>
  );
}

export default LineChart;
