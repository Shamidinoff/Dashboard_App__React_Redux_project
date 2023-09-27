import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

const store = createStore(
  rootReducer,
  window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
);

export { store };
