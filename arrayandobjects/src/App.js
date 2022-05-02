import logo from './logo.svg';
import './App.css';
import React from 'react'

export const App = () => {
  return (<div >
    <List />
    </div>
    )
};



 

function List() {
    const nameList = [
        { firstname: "Rishabh", lastname: "Verma" },
        {  firstname: "Animesh", lastname: "Verma" },
        {  firstname: "Kartik", lastname: "Verma" },
        {  firstname: "Dhwani", lastname: "Verma" },
         {  firstname: "Manvi", lastname: "Verma" },
          {  firstname: "Sujata", lastname: "Verma" },
           {  firstname: "Anvika", lastname: "Verma" },
            {  firstname: "Varuni", lastname: "Verma" }
    ];
    const itemList = nameList.map((item) => 
    (<li> {item.firstname} {item.lastname} </li>
    ));




    return ( 
    <div>
      <h1>Render Array Of Object</h1>
    <table>
      <tr>
        <td>{itemList}</td>
    </tr>
      
    </table>
        
   </div>
);
}

