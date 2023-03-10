import React from 'react'
import Figure from 'react-bootstrap/Figure';

export const Home = () => {
  return (
    <section className='d-flex flex-column'>
        <h1 className="text-center text-dark">¡Bienvenidos a mi página de ejercicios de ReactJS!</h1>
        <Figure className='text-center'>
          <Figure.Image
            roundedCircle
            width={171}
            height={180} 
            alt="171x180"
            src="https://yessicac98.github.io/bit07me/docs/img/me.jpeg" 
          />
         <Figure.Caption>Yessica Camargo</Figure.Caption>
        </Figure>
    </section>
  );
}