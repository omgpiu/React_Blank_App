import { slice } from './model';
import * as Selectors from './selectors';
import Container from './container';

const Actions = {
  ...slice.actions,
};
const Reducer = slice.reducer;

export const App = {
  Actions,
  Container,
  Selectors,
  Reducer,
};
