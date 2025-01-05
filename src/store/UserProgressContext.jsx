import { createContext, useState } from "react";

const UserProgessContext = createContext({
    progress: "",
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
})

export function UserProgessContextProvider({ children }) {

    const [userProgress, setUserProgress] = useState("");

    function showCart() {
        setUserProgress("cart");
    }
    function hideCart() {
        setUserProgress("");
    }

    function showCheckout() {
        setUserProgress("checkout");
    }
    function hideCheckout() {
        setUserProgress("");
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout

    }



    return (
        <UserProgessContext.Provider value={userProgressCtx}>{children}</UserProgessContext.Provider>
    );
}

export default UserProgessContext;