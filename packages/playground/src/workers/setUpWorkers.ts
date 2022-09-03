import onigasm from 'onigasm/lib/onigasm.wasm?url';
// import CompilerWorker from './compiler?worker';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// import FormatterWorker from './formatter?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';

function setUpWorkers() {
  window.MonacoEnvironment = {
    getWorker(_moduleId: unknown, label: string) {
      switch (label) {
        case 'css':
          return new cssWorker();
        case 'typescript':
        case 'javascript':
          return new tsWorker();
        default:
          return new editorWorker();
      }
    },
    onigasm,
  };
}
export { setUpWorkers };
