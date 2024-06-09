import React from "react"; 
import listSvg from "../assets/img/list.svg"
const List = () => {
    return <ul className="todo__list">
    <li>
       <i>
         <img src={listSvg} width={20} height={20} alt="Это иконка списка"/>

       </i>
       <span>Все задачи</span>
     </li> 
   </ul> 
}

export default List
