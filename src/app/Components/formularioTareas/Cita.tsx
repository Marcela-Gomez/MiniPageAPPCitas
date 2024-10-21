'use client';

import style from "./Citas.module.css";
import { useForm } from "react-hook-form";
import { ICitas } from "@/shared/cita.Interfaces";

const Citas = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ICitas>();

  const onSubmit = (data: ICitas) => {
    console.log(data);
  };

  return (
    <div className={style.containerCitas}>
      <form className={style.cita} onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>
        <input type="text" {...register('nombre', { required: true, minLength: 3, maxLength: 100 })} />
        {errors.nombre?.type === "required" && <span>Debe llenar el campo nombre.</span> ||
        errors.nombre?.type === "minLength" && <span>El campo debe tener al menos tres caracteres.</span>||
        errors.nombre?.type === "maxLength" && <span>El campo debe tener como maximo 100 caracteres.</span>
        }
  
        <label>Apellido: </label>
        <input type="text" {...register('apellido', { required: true, minLength:3, maxLength:100 })} />
        {errors.nombre?.type === "required" && <span>Debe llenar el campo nombre.</span> ||
        errors.nombre?.type === "minLength" && <span>El campo debe tener al menos tres caracteres.</span>||
        errors.nombre?.type === "maxLength" && <span>El campo debe tener como maximo 100 caracteres.</span>}

        <label>Teléfono:</label>
        <input type="tel" {...register('telefono',{required: true,pattern:/^[0-9]{8}$/})} />
        {errors.telefono?.type === "required" && <span>Debe llenar el campo teléfono.</span>||
        errors.telefono?.type === "pattern" && <span>Debe ingresar solo numeros y deben ser 8</span>}
  
        <label>Ingrese su email:</label>
        <input type="email" {...register('email', { required: true,pattern: /^\S+@\S+$/i })} />
        {errors.email?.type === "required" && <span>Debe llenar el campo email.</span>||
        errors.email?.type === "pattern" && <span>El formato no es adecuado.</span>}

        <label>Seleccione la fecha y hora de la cita:</label>
        <input type="datetime-local" {...register('fechaHora', { required: true })} />
        {errors.fechaHora && <span>Debe seleccionar la fecha y hora.</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Citas;