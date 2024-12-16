import { obs } from "reactfree-jsx";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";
import classes from "./Calculator.module.scss";

export default function Calculator() {
  const resultObs = obs("");
  const append = (text: string) => () => resultObs.value += text;
  const compute = () => {
    const prev = resultObs.value;
    try {
      resultObs.value = eval(prev) ?? "";
    } catch {
      resultObs.value = prev;
    }
  };
  const clear = () => resultObs.value = "";
  const del = () => resultObs.value = resultObs.value.slice(0, -1);

  return (
    <SmallComponentWrapper>
      <div className={classes.calculator}>
        <section>
          <output>{resultObs}</output>
        </section>
        <section className={classes.bottom}>
          <div className={classes.row}>
            <button onclick={clear}>C</button>
            <button onclick={append("%")}>%</button>
            <button onclick={del}>&#10232;</button>
            <button onclick={append("/")}>/</button>
          </div>
          <div className={classes.row}>
            <button onclick={append("7")}>7</button>
            <button onclick={append("8")}>8</button>
            <button onclick={append("9")}>9</button>
            <button onclick={append("*")}>*</button>
          </div>
          <div className={classes.row}>
            <button onclick={append("4")}>4</button>
            <button onclick={append("5")}>5</button>
            <button onclick={append("6")}>6</button>
            <button onclick={append("-")}>-</button>
          </div>
          <div className={classes.row}>
            <button onclick={append("1")}>1</button>
            <button onclick={append("2")}>2</button>
            <button onclick={append("3")}>3</button>
            <button onclick={append("+")}>+</button>
          </div>
          <div className={classes.row}>
            <button onclick={append(".")}>.</button>
            <button onclick={append("0")}>0</button>
            <button onclick={compute} className="span-2">=</button>
          </div>
        </section>
      </div>
    </SmallComponentWrapper>
  );
}
