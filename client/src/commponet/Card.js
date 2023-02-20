import { useState } from "react";

const Card =()=>{
const [cards] = useState([
    {
        title:"energiser-Name",
        text:"Lorem fjhdjbjd fhjfg dfjgfefg",
    },
    {
        title:"energiser-Name",
        text:"Lorem fjhdjbjd fhjfg dfjgfefg",
    },
    {
        title:"energiser-Name",
        text:"Lorem fjhdjbjd fhjfg dfjgfefg",
    },
    {
        title:"energiser-Name",
        text:"Lorem fjhdjbjd fhjfg dfjgfefg",
    },
]);
return(
    <div>
    <section>
     <div className="container">
        <h1> OUR FAVES</h1>
        <div className="cards">
             {cards.map((cards, i)=>(
                     <div key={i} className="card">
                     <h3>{cards.title}</h3>
                     <p>{cards.text}</p>
                     <button className="btn">More Detaile</button>
                       </div>
                ))}
           </div>
     </div>
</section>
   </div>
);
};

export default Card;
