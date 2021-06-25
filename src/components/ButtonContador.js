import React from 'react';



function ButtonContador({handler, icon}) {

   return (
      <div>
         <button onClick={handler} className="button-on-contador">{icon}</button>
      </div>
   )
}

export default ButtonContador
