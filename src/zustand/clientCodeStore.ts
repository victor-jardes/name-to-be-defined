import { create } from "zustand";
import IClientCodeInfos from "../types/IClientCodeInfos";

type State = {
  clientCode: string;
  listWithClientCodes: IClientCodeInfos[];
};

type Action = {
  setClientCode: (clientCode: IClientCodeInfos["clientCode"]) => void;
  setListWithClientCodes: (clientCode: IClientCodeInfos["clientCode"]) => void;
};

export const useClientCodeStore = create<State & Action>()((set) => ({
  clientCode: "",
  listWithClientCodes: [],
  setClientCode: (clientCode) => set(() => ({ clientCode })),
  setListWithClientCodes: (clientCode) =>
    set((state) => ({
      listWithClientCodes: [...state.listWithClientCodes, { clientCode }],
    })),
}));
