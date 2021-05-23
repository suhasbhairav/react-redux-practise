import {createStore} from "store";
import reducers from "./reducers";

const store = createStore(
    reducers,
    {}    
);

