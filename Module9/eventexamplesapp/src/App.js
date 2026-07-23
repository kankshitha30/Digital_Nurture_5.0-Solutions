import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a Nice Day.");
    }

    function increase() {
        increment();
        sayHello();
    }

    function welcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    return (

        <div>

            <h1>Event Examples App</h1>

            <h2>Counter : {count}</h2>

            <button onClick={increase}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => welcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                OnPress
            </button>

            <hr />

            <CurrencyConverter />

        </div>

    );

}

export default App;