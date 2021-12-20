import axios from "axios";


export const Api = {
    requestApi(checked:boolean){
        return  axios.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:checked})

    }
}