import Option from "./Option";
import StockHeader from "./StockHeader";
import { useState } from "react";
import sf from "../stockFunc/stockFunc.js"; // 주식 크롤링 및 분석 function

const StockPrediction = () => {
    
    const [state, setState] = useState({
        stock: "",
        method: "",
        startDate: "",
        endDate: "",
    });

    const handleStateChange = (fieldName, value) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    };

    return (
        <div className="container">
            <div>
                <Option state={state} onStateChange={handleStateChange} startAnalyze={sf.analyze} />
            </div>
            <div>
                <div>
                    <StockHeader props={state} />
                </div>
                <div>
                    Chart
                </div>
                <div>
                    분석결과
                </div>
                <div>
                    종목 현황
                </div>    
            </div>
        </div>
    );
}

export default StockPrediction;
