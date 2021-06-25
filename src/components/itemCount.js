import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import "./itemCount.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonContador from './ButtonContador';
import ButtonAddCart from './ButtonAddCart';
import ItemTitle from './TitleItem';

const ItemCount = ({maxStock, productName}) => {
   
   const [number, setNumber] = useState(0);

   const handleIncrement = () =>{
      console.log(maxStock)
      if(number < maxStock){
         setNumber(number + 1)
      }
      else
         window.alert("No hay mas stock del producto");         
   }

   const handleDecrement = () =>{
      console.log(number)
      if( number > 0 ) {
         setNumber(number - 1)
      }
      else 
         window.alert("No puedes pedir menos que 0");
   }

   return (
      <div className="container">
         <div className="item-contador-container">
            <div className="item-contador-title-container">
               <ItemTitle titleText={productName}/>
               <div className="item-contador">
                  <ButtonContador handler={handleIncrement} icon={<AddIcon/>}/>
                  <p>{number}</p>
                  <ButtonContador handler={handleDecrement} icon={<RemoveIcon/>}/>
               </div>   
            </div>   
               <ButtonAddCart/>         
         </div>
      </div>

   )
}

export default ItemCount;