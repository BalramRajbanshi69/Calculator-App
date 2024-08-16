
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleButtonClick = (e) => {
    const currentValue = value;
    const buttonValue = e.target.value;

    if (buttonValue === "AC") {
      setValue("");
      setError(false);
    } else if (buttonValue === "DE") {
      setValue(currentValue.slice(0, -1));
    } else if (buttonValue === "=") {
      try {
        const result = eval(currentValue);
        setValue(result.toString());
        setError(false);
      } catch (error) {
        setError(true);
      }
    } else {
      if (error) {
        setValue("");
        setError(false);
      }
      setValue(currentValue + buttonValue);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={error ? "Error" : value}
              readOnly
              style={{ backgroundColor: error ? "red" : "white" }}
            />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleButtonClick} />
            <input type="button" value="DE" onClick={handleButtonClick} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="00" onClick={handleButtonClick} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleButtonClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}