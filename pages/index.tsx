import styles from "./style.module.css";
import { JSX, Show, ValidComponent, children, createRoot, createSignal, mergeProps, onMount } from 'solid-js';
import { For, render, Dynamic } from 'solid-js/web';
import { createStore, produce } from 'solid-js/store';
import { pointOnCircle } from "@chocolatelib/math"


// export interface CirclePolygon extends Omit<JSX.PolygonSVGAttributes<SVGPolygonElement>, 'points'> {
//   cx: number
//   cy: number
//   r: number
//   points: number
//   angle?: number
// }

// function CirclePolygon(props: CirclePolygon) {
//   let points = () => {
//     let { x, y } = pointOnCircle(props.cx, props.cy, props.r, props.angle ?? 0)
//     let points = x + ' ' + y;
//     let div = 6.283185307179586 / props.points;
//     for (let i = 1; i < props.points; i++) {
//       let { x, y } = pointOnCircle(props.cx, props.cy, props.r, i * div + (props.angle ?? 0))
//       points += ',' + x + ' ' + y;
//     }
//     return points
//   }
//   return (
//     <polygon {...props} points={points()}></polygon>
//   );
// }

// export interface Hexagon extends Omit<JSX.PolygonSVGAttributes<SVGPolygonElement>, 'points'> {
//   cx: number
//   cy: number
//   r: number
//   angle?: number
// }
// function Hexagon(props: Hexagon) { return (<CirclePolygon {...props} points={6}></CirclePolygon>); }

// function HexagonCalculator() {
//   let [outerDia, outerDiaSet] = createSignal(10);
//   let outerRad = () => outerDia() / 2;
//   let side = () => outerDia() / 2;
//   let innerDia = () => outerDia() * 0.8660254037844386;
//   let innerRad = () => innerDia() / 2;
//   return (
//     <div class={`${styles["flex-horz"]}`}>
//       <div class={`${styles["flex-vert"]}`}>
//         <label>Outer Diameter/Radius</label>
//         <div class={`${styles["flex-horz"]}`}>
//           <input aria-label="Outer Diameter" type="number" value={outerDia()} oninput={e => outerDiaSet(e.target.valueAsNumber)}></input>
//           <input aria-label="Outer Radius" type="number" value={outerRad()} oninput={e => outerDiaSet(e.target.valueAsNumber * 2)}></input>
//         </div>
//         <label>Inner Diameter/Radius</label>
//         <div class={`${styles["flex-horz"]}`}>
//           <input aria-label="Inner Diameter" type="number" value={innerDia()} oninput={e => outerDiaSet(e.target.valueAsNumber / 0.8660254037844386)}></input>
//           <input aria-label="Inner Radius" type="number" value={innerRad()} oninput={e => outerDiaSet(e.target.valueAsNumber / 0.4330127018922193)}></input>
//         </div>
//         <label>Side Lenght</label>
//         <input aria-label="Side Lenght" type="number" value={side()} oninput={e => outerDiaSet(e.target.valueAsNumber * 2)}></input>
//       </div>
//       <svg viewBox="0 0 100 100">
//         <circle cx={50} cy={50} r={50} stroke-width={0.5} stroke="black" fill="none"></circle>
//         <circle cx={50} cy={50} r={43} stroke-width={0.5} stroke="black" fill="none"></circle>
//         <Hexagon cx={50} cy={50} r={50} stroke-width={0.5} stroke="black" fill="none"></Hexagon>
//       </svg>
//     </div>
//   );
// }


// function HelloWorld() {
//   let conn = new WebSocket("ws://127.0.0.1:8080");
//   conn.onmessage = (txt) => {
//     console.log(txt.data);

//   }
//   conn.onopen = () => {
//     conn.send('Test')
//   }

//   return (
//     <>
//     </>
//   );
// }

function HelloWorld() {
  const [asdf, setasdf] = createSignal("Hello");

  let bigArray: { parama: {}, test: ValidComponent }[] = [];
  const [count, setCount] = createSignal(bigArray, { equals: false });
  let toggle = 0;
  function enlengthen() {
    setCount((arr) => [...arr, { parama: { answer: asdf }, test: (toggle++ % 2 ? Element : Element2) }])
  }
  function unshifting() {
    setCount((arr) => arr.slice(1))
  }
  function asdfasdf() {
    setasdf(asdf() + 'Test');
  }

  let testRef;
  let testRef2;

  function openWin() {
    setasdf(asdf() + 'Test');
  }

  onMount(() => {
    console.log("YOYO", testRef);

  })

  return (
    <>
      <button onclick={enlengthen}>Enlenghten {count().length}</button>
      <button onclick={unshifting}>Foreshortening {count().length}</button>
      <button onclick={asdfasdf}>ASDF {count().length}</button>
      <button onclick={openWin}>Openwins </button>
      <For each={count()}>
        {(item) => <Dynamic component={item.test} {...item.parama}></Dynamic>}
      </For >

      <div ref={testRef}>
        <div>FirstDiv</div>
      </div>

      <div ref={testRef2}>
        <div>FirstDiv</div>
      </div>
    </>
  );
}

function Element(props: { answer: string }) {
  return (
    <p>The answer is {props.answer}</p>
  );
}
function Element2(props: { answer: string }) {
  return (
    <p>The nanswer is {props.answer}</p>
  );
}

function TabManager() {
  return (
    <>

    </>
  );
}

function WindowManager() {
  return (
    <>

    </>
  );
}




function Content() {
  let [count, setCount] = createSignal(0);

  function inc() { setCount((num) => num += 1) }
  function dec() { setCount((num) => num -= 1) }
  return (
    <>
      <button onclick={inc}>Increment</button>
      <div >{count()}</div>
      <button onclick={dec}>Decrement</button>
    </>
  );
}

function UIWindow(props) {
  const c = children(() => props.children);
  const merged = mergeProps({ greeting: "Hi", name: "John" }, props);
  let [posX, setPosX] = createSignal(0);
  let [posY, setPosY] = createSignal(0);

  console.log(props);

  function dragStart(ev: PointerEvent) {
    let bounds = (ev.currentTarget as HTMLDivElement).getBoundingClientRect();
    let xOffset = ev.clientX - bounds.x;
    let yOffset = ev.clientY - bounds.y;
    (ev.currentTarget as HTMLDivElement).setPointerCapture(ev.pointerId);
    (ev.currentTarget as HTMLDivElement).onpointermove = (eve) => {
      setPosX(eve.clientX - xOffset);
      setPosY(eve.clientY - yOffset);
    }
    (ev.currentTarget as HTMLDivElement).onpointerup = (eve) => {
      (eve.currentTarget as HTMLDivElement).releasePointerCapture(eve.pointerId);
      (eve.currentTarget as HTMLDivElement).onpointermove = null;
      (eve.currentTarget as HTMLDivElement).onpointerup = null;
    }
  }
  return (
    <div class={`${styles["window"]}`} style={{
      top: `${posY()}px`,
      left: `${posX()}px`,
    }}>
      <Show when={true}>
        <div onpointerdown={dragStart} class={`${styles["windowbar"]}`}>
          <div>YOYOTest </div>
        </div>
      </Show>
      {c()}
    </div>
  );
}



render(() => <UIWindow><Content></Content></UIWindow>, document.body)