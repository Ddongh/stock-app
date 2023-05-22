const StockHeader = ({props}) => {
    const { stock, method, startDate, endDate } = props;

    if(stock !== "" && method !=="" && startDate !=="" && endDate !== "") {
        return (
            <h3>{stock}(을)를 {method} 방법으로 {startDate} ~ {endDate} 기간동안 분석하시겠습니까?</h3>
        );
    } else {
        return <h3>옵션을 모두 선택해주십시오</h3>
    }
    
}

export default StockHeader;