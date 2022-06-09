import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

const Formulario = () => {
  const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
    email: 'fernando@herrera.com',
    nombre: 'fernando',
    edad: 35,
  });

  // const { email, nombre, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={ev => handleChange(ev)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={ev => handleChange(ev)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={ev => handleChange(ev)}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Formulario;
