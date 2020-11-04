import React,{useState, useEffect} from 'react';
import boostrap from '../node_modules/boostra/dist/css/'
function Body (props){

const[items,setitems]= useState([])
useEffect(()=>{

fetch('https://api.unsplash.com/photos/?client_id=0MskcJcljpqIfygmWxu2XUeO5AG4PJ-OIYIgqfR8nJ8')
.then(response => response.json())
.then(data => {

  // console.log(data);
setitems([...items,data[0].user.bio])})




},[])
console.log(items.length);
const list = items.map(item => {
  console.log(items);

return <div>

       <p> {item} </p>
</div>
console.log(item);
});






  return (
     <div>


    <h1> the number are {items.length} </h1>
  <button className="btn btn-primary"> bootstap button </button>
       {list}
     </div>
  );
}

export default Body
