import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data';


function Dashboard(){

    const [allstocks, getAllStocks] = useState(data);
    console.log(allstocks);
    
    return (
        
        <div>
            <h2 className= 'bg-info'>All Stocks</h2>
       
        {allstocks.map((ele) => (
           
        <div>
            <Link to={`/stock/${ele.symbol}`} key={ele.symbol}>
            <h4 className='mt-4'>{ele.name}({ele.symbol})</h4>
            </Link>
            </div>
        ))}
         </div>
    )
}

export default Dashboard;