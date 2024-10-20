import style from "./Citas.module.css"
const Citas = () => {
  return (
    <div className={style.containerCitas}>
        <form className={style.cita}>
            <label>Nombre: </label>
            <input type="text"></input>
            <label>Apellido: </label>
            <input type="text" name="apellido"  />
            <label>Teléfono:</label>
            <input type="tel" name="" id="" />
            <label>Ingrese su email:</label>
            <input type="email" name="" id="" />
            <label>Selecione la fecha y hora de la cita:</label>
            <input type="datetime-local" name="" id="" />
            <button type="submit">Enviar </button>
        </form>
    </div>
  )
}

export default Citas