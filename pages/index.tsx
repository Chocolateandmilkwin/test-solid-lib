import styles from "./style.module.css";
import { JSX, createSignal, mergeProps } from 'solid-js';
import { For, render } from 'solid-js/web';
import { createStore, produce } from 'solid-js/store';
import { pointOnCircle } from "@chocolatelib/math"


export interface CirclePolygon extends Omit<JSX.PolygonSVGAttributes<SVGPolygonElement>, 'points'> {
  cx: number
  cy: number
  r: number
  points: number
  angle?: number
}

function CirclePolygon(props: CirclePolygon) {
  let points = () => {
    let { x, y } = pointOnCircle(props.cx, props.cy, props.r, props.angle ?? 0)
    let points = x + ' ' + y;
    let div = 6.283185307179586 / props.points;
    for (let i = 1; i < props.points; i++) {
      let { x, y } = pointOnCircle(props.cx, props.cy, props.r, i * div + (props.angle ?? 0))
      points += ',' + x + ' ' + y;
    }
    return points
  }
  return (
    <polygon {...props} points={points()}></polygon>
  );
}

export interface Hexagon extends Omit<JSX.PolygonSVGAttributes<SVGPolygonElement>, 'points'> {
  cx: number
  cy: number
  r: number
  angle?: number
}
function Hexagon(props: Hexagon) { return (<CirclePolygon {...props} points={6}></CirclePolygon>); }

function HexagonCalculator() {
  let [outerDia, outerDiaSet] = createSignal(10);
  let outerRad = () => outerDia() / 2;
  let side = () => outerDia() / 2;
  let innerDia = () => outerDia() * 0.8660254037844386;
  let innerRad = () => innerDia() / 2;
  return (
    <div class={`${styles["flex-horz"]}`}>
      <div class={`${styles["flex-vert"]}`}>
        <label>Outer Diameter/Radius</label>
        <div class={`${styles["flex-horz"]}`}>
          <input aria-label="Outer Diameter" type="number" value={outerDia()} oninput={e => outerDiaSet(e.target.valueAsNumber)}></input>
          <input aria-label="Outer Radius" type="number" value={outerRad()} oninput={e => outerDiaSet(e.target.valueAsNumber * 2)}></input>
        </div>
        <label>Inner Diameter/Radius</label>
        <div class={`${styles["flex-horz"]}`}>
          <input aria-label="Inner Diameter" type="number" value={innerDia()} oninput={e => outerDiaSet(e.target.valueAsNumber / 0.8660254037844386)}></input>
          <input aria-label="Inner Radius" type="number" value={innerRad()} oninput={e => outerDiaSet(e.target.valueAsNumber / 0.4330127018922193)}></input>
        </div>
        <label>Side Lenght</label>
        <input aria-label="Side Lenght" type="number" value={side()} oninput={e => outerDiaSet(e.target.valueAsNumber * 2)}></input>
      </div>
      <svg viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={50} stroke-width={0.5} stroke="black" fill="none"></circle>
        <circle cx={50} cy={50} r={43} stroke-width={0.5} stroke="black" fill="none"></circle>
        <Hexagon cx={50} cy={50} r={50} stroke-width={0.5} stroke="black" fill="none"></Hexagon>
      </svg>
    </div>
  );
}


function HelloWorld() {
  return (
    <>
      <HexagonCalculator></HexagonCalculator>
    </>
  );
}


render(() => <HelloWorld />, document.body)