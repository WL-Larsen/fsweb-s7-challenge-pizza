import React, { useState } from 'react';

const availableToppings = [
    'Mantar',
    'Biber',
    'Sucuk',
    'Zeytin',
    'Sosis',
    'Mısır',
    'Soğan',
    'Jalapeno',
    'Zamazingo',
    'Peynir',
    'Ançüez',
    'Ton Balığı',
    'Peynir Sos',
    'Barbekü Sos',
  ];


function PizzaOrder(props){
    const {selections, setSelections} = props;

    function handleTopping(topping){
      if(selections.includes(topping)){
        setSelections((prev)=> 
        prev.filter((item)=>item !== topping))
      } else if(selections.length < 10){
        setSelections((prevToppings) => 
        [...prevToppings, topping]);
      }

    };


    return(<div>
      <ul>
        {availableToppings.map((topping) => (
          <li key={topping}>
            <label>
              <input
              type="checkbox"
              checked={selections.includes(topping)}
              onChange={()=>{handleTopping(topping)}}
              />
              {topping}
            </label>
          </li>
        ))}
      </ul>
    </div>)
}

export default PizzaOrder