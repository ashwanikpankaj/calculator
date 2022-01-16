
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadAns, loadBackspace, loadButton, loadClear } from "../redux/action";
import "./style.css";


export const Calculator = () => {

  const dispatch = useDispatch();
  const {ans,number} = useSelector(store=>store)


  return (
    <div className="container text-center">

        <div className="row ans ps-2 pe-2 pb-1">
          <div className="col text-white pt-2" className="basic">Basic Calculator</div>
          <input type="text" placeholder="0" value={ans.length===0?number:ans} />
        </div>
       <div className="ps-2">
        <div className="row numeric-btn">
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <button className="btn btn-primary" onClick={()=>dispatch(loadClear())}>AC</button>
              </div>
              <div className="col-4">
                <button className="btn btn-primary" onClick={()=>dispatch(loadBackspace())}>C</button>
              </div>
              <div className="col-4">
                <button className="btn btn-primary" onClick={()=>dispatch(loadButton("/"))}>/</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>{
                  dispatch(loadButton(9))

                }}>9</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(8))}>8</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(7))}>7</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(6))}>6</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(5))}>5</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(4))}>4</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(3))}>3</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(2))}>2</button>
              </div>
              <div className="col-4">
                <button className="btn btn-danger" onClick={()=>dispatch(loadButton(0))}>1</button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row plus-btn">
              <button className="btn btn-primary" onClick={()=>dispatch(loadButton("+"))}>+</button>
            </div>
            <div className="row">
              <button className="btn btn-primary" onClick={()=>dispatch(loadButton("-"))}>-</button>
            </div>
            <div className="row">
              <button className="btn btn-primary" onClick={()=>dispatch(loadButton("*"))}>*</button>
            </div>
          </div>
        </div>

        <div className="row last-row">
          <div className="col-3">
            <button className="btn btn-danger" onClick={()=>dispatch(loadButton("."))}>.</button>
          </div>
          <div className="col-3">
            <button className="btn btn-danger" onClick={()=>dispatch(loadButton(0))}>0</button>
          </div>
          <div className="col-6 equal-btn">
            <button className="btn btn-success" onClick={()=>{
              dispatch(loadAns())
            }}>=</button>
          </div>
        </div>
        </div>
    </div>
  );
};
