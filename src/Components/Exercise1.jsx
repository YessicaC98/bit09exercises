import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Exercise1 = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (contador > 0) setColor('success');
    else if (contador < 0) setColor('danger');
    else setColor('primary');
  }, [contador]);

  return (
    <section>
      <h2>
        Contador: <Badge bg={color}>{contador}</Badge>
      </h2>
      <Button variant='outline-dark' onClick={() => setContador(contador - 1)}>
        <i className='bi bi-dash-circle'></i>
      </Button>
      <Button variant='outline-dark mx-2' onClick={() => setContador(0)}>
        <i className='bi bi-circle'></i>
      </Button>
      <Button variant='outline-dark' onClick={() => setContador(contador + 1)}>
        <i className='bi bi-plus-circle-fill'></i>
      </Button>
    </section>
  );
};