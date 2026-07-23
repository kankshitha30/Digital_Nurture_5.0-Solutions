import { useState } from "react";

function CurrencyConverter() {

    const [rupees, setRupees] = useState("");

    function handleSubmit() {

        let result = rupees / 90;
        alert("Converting to Euro amount "+result.toFixed(2));
    }

    return (

        <div>

            <h2>Currency Convertor!!!</h2>

            <label>Amount : </label>

            <input
                type="number"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <br /><br />

            <label>Currency : </label>

            <input
                placeholder="EURO"
                readOnly
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Convert
            </button>

        </div>

    );

}

export default CurrencyConverter;