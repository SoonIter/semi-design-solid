import { Uri, editor as mEditor, KeyMod, KeyCode } from 'monaco-editor';
import defaultTemplate from './defaultFiles/index?raw';
import { liftOff } from './setupSolid';
import { debounce } from '../utils/debounce';
import Compiler from '../workers/compiler?worker';
import { Component, Ref } from 'solid-js';

const compiler = new Compiler();
let now = performance.now();

const applyCompilation = debounce((source: string, compileOpts?: Record<string, any>) => {
  now = performance.now();
  compiler.postMessage({
    event: 'ROLLUP',
    tabs: [{ name: 'main', type: 'tsx', source }],
    compileOpts,
  });
}, 250);

const Editor = (props: any) => {
  let divRef: HTMLDivElement;
  let editor: mEditor.IStandaloneCodeEditor;
  const [value, setValue] = createSignal('');

  createEffect(() => {
    props.ref?.(editor);
  });
  const model = () => mEditor.getModel(Uri.parse('file:///main.tsx'));

  const [compiledCode, setCompiled] = createSignal('');
  const [error, setError] = createSignal('');
  createEffect(() => {
    console.log(compiledCode());
  });
  createEffect(() => {
    console.log('error', error());
  });

  compiler.addEventListener('message', ({ data }) => {
    const { event, compiled, error } = data;
    console.log(' ', data);

    if (event === 'ERROR') return setError(error);
    else setError('');

    if (event === 'ROLLUP') {
      setCompiled(compiled);
    } else if (event === 'BABEL') {
      setCompiled(compiled);
    }
    console.log(`Compilation took: ${performance.now() - now}ms`);
  });

  const theme = createMemo(() => (props.isDark ? 'vs-dark-plus' : 'vs-light-plus'));
  createEffect(() => {
    mEditor.setTheme(theme());
  });

  createEffect(() => {
    if (!value()) return;
    const rawCode =
      `import { render } from "solid-js/web";` +
      value().replace(/export default (\w+);?/, 'render($1,document.getElementById("app"))');
    applyCompilation(rawCode);
  });
  // setup VScode
  onMount(() => {
    editor = mEditor.create(divRef, {
      model: null,
      automaticLayout: true,
      // readOnly: props.disabled,
      fontSize: 20,
      lineDecorationsWidth: 5,
      lineNumbersMinChars: 3,
      padding: { top: 15 },
      minimap: {
        enabled: false,
      },
    });
    const source = defaultTemplate;
    const key = 'main.tsx';
    const uri = Uri.parse(key);
    mEditor.getModel(uri) || mEditor.createModel(source, undefined, uri);
    editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () => {
      editor?.getAction('editor.action.formatDocument').run();
      editor?.focus();
    });
    editor.onDidChangeModelContent(() => {
      setValue(editor.getValue());
    });
  });

  createEffect(() => {
    editor.setModel(model());
    setValue(editor.getValue());
    liftOff();
  });
  onCleanup(() => editor?.dispose());

  return (
    <>
      <div class="p-0 h-200 w-full" ref={divRef!} />
      {/* <Preview code={compiledCode()} /> */}
      <Preview code={compiledCode()} />
    </>
  );
};
export default Editor;

const Preview: Component<{ code: string; ref?: Ref<HTMLIFrameElement> }> = (props) => {
  const code = () => props.code;
  createEffect(() => {
    console.log(props.code, '-------');
    console.log(eval(code()));
  });
  const iframeSrc = createMemo(() => {
    const script = `<div id="app"></div><script type="module">${code()}</script><script src="https://esm.sh/solid-js/web?dev"></script>`;
    const blob = new Blob([script], {
      type: 'text/html',
    });
    return URL.createObjectURL(blob);
  });

  return <iframe ref={props.ref} src={iframeSrc()}></iframe>;
};
// const Preview: Component<{ code: string; ref?: Ref<HTMLIFrameElement> }> = (props) => {
//   const code = () => props.code;

//   let divRef: HTMLDivElement;
//   const scriptDom = createMemo(() => {
//     if (!code()) return '';

//     const blob = new Blob([code().replace(/import .*;/g, '')], {
//       type: 'text/javascript',
//     });
//     return URL.createObjectURL(blob);
//   });
//   createEffect(async () => {
//     if (!divRef) return;
//     // divRef.innerHTML = scriptDom();
//     await import(scriptDom());
//   }); // @ts-ignore
//   return <div ref={divRef} id="app"></div>;
// };
