import { useState } from 'react';

const Usuario = () => {
  interface User {
    uid: string;
    name: string;
  }

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Fernando Herrera',
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario</h3>

      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default Usuario;
