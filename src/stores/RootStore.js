import CartStore from "./CartStore";
import { createContext, useContext } from "react";

class RootStore {
  constructor() {
    this.cartStore = new CartStore();
  }
}

const RootStoreContext = createContext();
const RootStoreProvider = ({ store, children }) => (
  <RootStoreContext.Provider value={store}>
    {children}
  </RootStoreContext.Provider>
)
const useRootStore = () => {
  return useContext(RootStoreContext)
}

export { RootStore, RootStoreProvider, useRootStore }