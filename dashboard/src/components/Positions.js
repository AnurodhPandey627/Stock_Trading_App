import React,{useState,useEffect} from "react";
import axios from 'axios';

const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allPositions").then((res)=>{
      console.log(res.data);
      setAllPositions(res.data);
    })
  },[]);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock,indx)=>{
                      const currVal = stock.price * stock.qty;
                      const isProfit = currVal - stock.avg*stock.qty >= 0.0;
                      const profClass = isProfit? "profit" : "loss";
          
                      return (
                        <tr key={indx}>
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td className={profClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
                        <td className={profClass}>{stock.net}</td>
                      </tr>
                      )
                    })
          }
        </table>
      </div>
    </>
  );
};

export default Positions;