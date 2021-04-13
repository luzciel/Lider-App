import React, { Fragment } from 'react';
import meat from '../img/carne-horno.jpg';
import './css/cardRecipes.css'




const CardRecipes = ({ favorites, setfavorites }) => {

  return (
    <Fragment>
      <h3>Carne al horno con cilantro</h3>
      <section className="container-recipe">
      <div>
      <img src={meat} alt="cart-recipe-img" className='cart-recipe-img' />
      </div>
      <div>
        <h4>Ingredientes</h4>
        <p>
          1 kilo de posta paleta el Buen Corte LIDER <br />
          2 tazas de cilantro <br />
          4 cucharadas de soya LIDER<br />
        </p>
        <p>
          <strong> Para Las Papas </strong><br />
          12 papas medianas<br />
          1 cucharadita de merkén<br />
          1 taza de crema Lider<br />
          100 grs de tocino<br />
          Sal y pimienta LIDER<br />
        </p>
      </div>
      <div>
        <h3>Pasos</h3>
        <p>
        <strong>Paso 1</strong><br />
          En el vaso de la procesadora, agregar el cilantro previamente lavado junto con media taza de agua, moler. <br />
          <br />
          <strong>Paso 2</strong><br />
          En una fuente para horno poner la carne agregar a soya y el cilantro, dejar macerar por 2 horas. <br />
          <br />
          <strong>Paso 3</strong><br />
          Precalentar el horno a 180ºC.<br />
          <br />
          <strong>Paso 4</strong> <br />
          Salpimentar la carne y llevarla al horno por 30 minutos por lado, el gusto de la cocción dependerá del consumidor.<br />
          <br />
         <strong>Para Las Papas</strong><br />
         <br />
         <strong>Paso 5</strong><br />
          Cortar el tocino en cuadrados pequeños y cocinar en un sartén por 5 minutos, luego pasar a un papel absorvente.<br />
          <br />
          <strong>Paso 6</strong><br />
          Hervir las papas por 5 minutos con cáscara, luego secar y cortar en 4, aceitar una fuente para horno y cocinar por 35 minutos. Agregar a las papas sal junto con la mezcla de crema, merkén y tocino<br />
        </p>
      </div>

      </section>


    </Fragment>


  )
}

export default CardRecipes;