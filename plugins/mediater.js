const API_BASE_URL = "https://fast-headland-23842.herokuapp.com/";

import axios from "axios";

export default ({ app }, inject) => {
  inject("fetchAPI", async function(reqparam, store, modulePath) {
    //APIに投げる様に"key=value"に形を整えて配列に入れる
    let formatRequestArray = [];
    for (let key in reqparam)
      formatRequestArray.push(key + "=" + reqparam[key]);
    //配列を"&"でつなげてrequest可能にする
    
    /*APIを叩く*/
    const  response = await axios.get(API_BASE_URL + modulePath + "?" + formatRequestArray.join("&"))
    
    return response;
  });
};
