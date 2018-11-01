import {LOAD_USER_DATA} from "./types"

 const loadUserData = () => ({
    type: LOAD_USER_DATA,
    //TODO Need to get the data from Back end
    payLoad: {name:"sathish",emailId:"gmail.com"}
});
export default loadUserData;