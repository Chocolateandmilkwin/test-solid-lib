import styles from "styles.module.css";
import { createSignal } from 'solid-js';
import { For, render } from 'solid-js/web';
import { createStore, produce } from 'solid-js/store';

function Calculator() {
  let [result, resultSet] = createSignal(0);
  return (
    <>
      <div class={`${styles["flex-vert"]}`}>
        <div>{result()}</div>
        <button>{ }</button>
      </div>
    </>
  );
}



function ThemeContainer(test: number) {
  return (
    <div>{test}</div>
  );
}



function HelloWorld2(test: number) {
  return (
    <div>{test}</div>
  );
}

let asdf = [HelloWorld2(2)]
for (let i = 0; i < 9; i++) {
  asdf[i] = HelloWorld2(i);
}

let [yo1, yo2] = createStore(asdf)

function HelloWorld() {
  let [width, setwidth] = createSignal(10);
  let count = 0;
  return (
    <>
      <div>Hello World!</div>
      <Calculator></Calculator>

      <button onclick={() => yo2(produce((state) => { state.push(HelloWorld2(count++)) }))}>Hello World!</button>
      <For each={yo1}>
        {(cat, i) => {
          console.log('yo');
          return <div>{cat} + {i()}
            <button onclick={() => yo2(produce((state) => { state.splice(i(), 1) }))}>asdf World!</button>
          </div>
        }}
      </For>
      <button onclick={() => setwidth(width() + 10)}>Hello World!</button>
      <HelloWorld3 test={width()}></HelloWorld3>
    </>
  );
}

function HelloWorld3(params: { test: number }) {
  return (
    <svg>
      <rect fill='red' width={params.test} height={10}></rect>
    </svg>
  );
}

render(() => <HelloWorld />, document.body)