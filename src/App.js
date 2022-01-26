import my from "./images/my.jpg"; 
import './App.css';

function App() {
  return (
    <div className="container">
   <h2 className="heading">45 comments</h2> 
<div className="flex-container">
  <div class="flex-left">
  <div> <img src={my} className="img1"  /></div>
  <div> <img src={my} className="img2"  /></div>

  </div>
  <div className="flex-right">
  <h3 className="name1"> Aman Das</h3>
    <p className="name2">This is a great Post </p>
    <h3 className="name11"> Aman Das</h3>
    <p className="name22">This is a great Post </p>
  </div>

</div>

</div>
    
  );
}

export default App;
