import { Link, Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { add } from '@semi-design-solid/shared';
import Editor from './editor';
import MonacoTabs from './editor/monacoTabs';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="text-center" h-10 w-10>
      <MonacoTabs
        folder=""
        tabs={[
          {
            name: 'hello',
            source: `import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}

render(() => <Counter />, document.getElementById("app")!);`,
          },
        ]}
      />
      <Editor url="" />
    </div>
  );
};

export default App;
