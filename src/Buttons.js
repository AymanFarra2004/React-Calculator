import "./Buttons.css"

function Buttons(props) {
    function countOccurrences(str, char) {
        let count = 0;
        if(str === 0) return 0;
        for (let c of str) {
            if (c === char) count++;
        }
        return count;
        
    }

    function buttonHandle(e) {
        if(props.isValid === "Invalid Expression!" && e.target.value !== "C") {
            e.preventDefault();
            return;
        }
        if(e.target.value !== "C" && e.target.value !== "back space"
            && e.target.value !== "=" && e.target.value !== "()")
        {
            props.display(e.target.value);
        } else if (e.target.value === "=") {
            props.equal();
        } else if (e.target.value === "C") {
            props.clearDisplay();
        } else if (e.target.value === "back space") {
            props.backSpace();
        } else if (e.target.value === "()") {
            if (countOccurrences(props.currentValue, "(") > 
            countOccurrences(props.currentValue, ")")){
                props.display(")");
            } else {
                props.display("(");
            }
        }
        
    }


    return (
        <div className="buttons">
            <button className="c-button button" value={"C"} onClick={buttonHandle}>C</button>
            <button className="pranthises-button button" value={"()"} onClick={buttonHandle}>()</button>
            <button className="mod-button button" value={"%"} onClick={buttonHandle}>%</button>
            <button className="divsion-button button" value={"/"} onClick={buttonHandle}>/</button>
            <button className="number button" value={7} onClick={buttonHandle}>7</button>
            <button className="number button" value={8} onClick={buttonHandle}>8</button>
            <button className="number button" value={9} onClick={buttonHandle}>9</button>
            <button className="multiply-button button" value={"*"} onClick={buttonHandle}>x</button>
            <button className="number button" value={4} onClick={buttonHandle}>4</button>
            <button className="number button" value={5} onClick={buttonHandle}>5</button>
            <button className="number button" value={6} onClick={buttonHandle}>6</button>
            <button className="subtraction-button button" value={"-"} onClick={buttonHandle}>-</button>
            <button className="number button" value={1} onClick={buttonHandle}>1</button>
            <button className="number button" value={2} onClick={buttonHandle}>2</button>
            <button className="number button" value={3} onClick={buttonHandle}>3</button>
            <button className="add-button button" value={"+"} onClick={buttonHandle}>+</button>
            <button className="dot-button button" value={"."} onClick={buttonHandle}>.</button>
            <button className="number button" value={0} onClick={buttonHandle}>0</button>
            <button className="back-button button" value={"back space"} onClick={buttonHandle}>back</button>
            <button className="equales-button button" value={"="} onClick={buttonHandle}>=</button>
        </div>
    );
}

export default Buttons;