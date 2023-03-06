import React, { useState } from "react";
import { Exercise1 } from "./Exercise1";
import { Exercise2 } from "./Exercise2";
import { Exercise3 } from "./Exercise3";

export const ExercisesPage = () => {
    const [exercise, setExercise] = useState (null);
  return (
    <section>
      <h1 className="text-center p-5 text-dark">Ejercicios</h1>
      <table>

        <tr className="d-flex justify-content-around list-unstyled" >
          <td className="border border-dark p-3 rounded text-dark" onClick={() => setExercise (<Exercise1/>)} >
            Contador
          </td>
          <td className="border border-dark p-3 rounded text-dark" onClick={() => setExercise (<Exercise2/>)} >
            Patos
          </td>
          <td className='border border-dark p-3 rounded text-dark' onClick={() => setExercise (<Exercise3/>)} >
            Directorio
          </td>
        </tr>
      </table>
      <div className="text-center border border-dark p-3 rounded" >{exercise}</div>
    </section>
  );
};