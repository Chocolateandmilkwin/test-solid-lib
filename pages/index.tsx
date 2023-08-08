import { createSignal } from 'solid-js';
import { For, render } from 'solid-js/web';
import { createStore, produce } from 'solid-js/store';

function HelloWorld2(test: number) {
  return (
    <div>{test}</div>
  );
}

let asdf = [HelloWorld2(2)]
for (let i = 0; i < 99999; i++) {
  asdf[i] = HelloWorld2(i);
}

let [yo1, yo2] = createStore(asdf)


function HelloWorld() {
  let count = 0;
  return (
    <>
      <div>Hello World!</div>
      <button onclick={() => yo2(produce((state) => { state.push(HelloWorld2(count++)) }))}>Hello World!</button>
      <For each={yo1}>
        {(cat, i) => {
          console.log('yo');
          return <div>{cat} + {i()}
            <button onclick={() => yo2(produce((state) => { state.splice(i(), 1) }))}>asdf World!</button>
          </div>
        }}
      </For>
    </>
  );
}

render(() => <HelloWorld />, document.body)