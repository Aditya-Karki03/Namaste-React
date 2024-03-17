import HeaderAndBg from "./HeaderAndBg"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useNewMovies } from "../CustomHooks/useNewMovies";
import TrailerContainer from "./TrailerContainer";


export default function Browse(){
    const navigate=useNavigate();
   useNewMovies();

    function handleSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        });
        navigate('/')
    }


    return(
        <div className="w-screen h-screen">
            <div className=" flex items-center pr-2 justify-between bg-gradient-to-b from-black to-slate-300">
                <HeaderAndBg/>
                <div className="flex gap-2">
                    <img className="h-[50px] " src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""></img>
                    <button className="text-[white]" onClick={handleSignOut}>(Sign Out)</button>
                </div>
            </div>
            <TrailerContainer/>
        </div>
    )
}