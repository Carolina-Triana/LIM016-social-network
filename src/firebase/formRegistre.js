import {createUserWithEmailAndPassword } from "firebase/auth.js";


const auth = getAuth();
const userCreate = (email, password) =>{
   const userCreate = createUserWithEmailAndPassword(auth, email, password);
    const user = {
      Email : email,
      password : password,
    }
    
  }
  export default userCreate