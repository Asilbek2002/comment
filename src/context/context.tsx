import { createContext } from "react";
import { Mode, Profile } from "../App";

export const SuperContext = createContext<{
  mode: Mode;
  profile: Profile;
  onChangeMode: (mode: Mode) => void;
}>(null as any);