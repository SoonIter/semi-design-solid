import { Link, Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Button from '../button/Button';

const App: Component = () => {
  let count = $signal(0);
  return (
    <div class="text-center">
      <Button>123</Button>
    </div>
  );
};

export default App;
