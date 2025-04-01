import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dana White",
    email: "thiskidisimpressive@ufc.com",
  },
});

export default userContext;
