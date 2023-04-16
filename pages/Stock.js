import { useParams } from "react-router-dom";
import data from '../data/data';

function Stock(){
    const params = useParams();
    console.log(params);
    console.log(data);
    var result = data.find(item => item.symbol === params.symbol);
    console.log(result);
    return (
        <div>
            <h1 className="mt-5">{result.name}</h1>
            <h2>Symbol : {result.symbol}</h2>
            <h3>Last Price : {result.lastPrice}</h3>
            <h3>Change : {result.change}</h3>
            <h3>High : {result.high}</h3>
            <h3>Low : {result.low}</h3>
            <h3>Open : {result.open}</h3>
        </div>
    )
}

export default Stock;