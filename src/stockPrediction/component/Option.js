import "../stockPrediction.css";
import { createRef } from "react";

const Option = ({ state, onStateChange, startAnalyze }) => {
    const handleInputChange = (e) => { // 옵션 선택시 이벤트(setState)
        const { name, value } = e.target;
        onStateChange(name, value);
    }

    const stockRef = createRef();
    const methodRef = createRef();
    const startRef = createRef();
    const endRef = createRef();

    return (
        <div>
            <div>
                <h3>종목</h3>
                <select ref={stockRef} name="stock" value={state.stock} onChange={handleInputChange}>
                    <option hidden>===선택===</option>
                    <option>네이버</option>
                    <option>카카오</option>
                    <option>라인</option>
                    <option>쿠팡</option>
                    <option>배달의민족</option>
                    <option>당근</option>
                    <option>토스</option>
                </select>
            </div>
            <div>
                <h3>분석방법</h3>
                <select ref={methodRef} name="method" value={state.method} onChange={handleInputChange}>
                    <option hidden>===선택===</option>
                    <option>선형 회귀</option>
                    <option>로지스틱 회귀</option>
                    <option>ARIMA</option>
                    <option>다층 퍼셉트론</option>
                    <option>순환 신경망</option>
                    <option>장기 단기 기억망</option>
                    <option>결정 트리</option>
                </select>
            </div>
            <div>
                <h3>시작일</h3>
                <input ref={startRef} name="startDate" type="date" value={state.startDate} onChange={handleInputChange} />

                <h3>종료일</h3>
                <input ref={endRef} name="endDate" type="date" value={state.endDate} onChange={handleInputChange} />
            </div>
            <div>
                <button onClick={ () => startAnalyze({...state})}>분석하기</button>
            </div>
        </div>
    );
}

export default Option;
