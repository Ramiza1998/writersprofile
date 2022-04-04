import { createContext } from "react";

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about = {
        name:"Ramiza Yakubu",
        hobbies:["dancing","Music","Eating"],
        bio: "i am a passinate young lady who desires community growth."
    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}
export default AboutContextProvider