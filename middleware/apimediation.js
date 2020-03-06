const API_BASE_URL = "https://fast-headland-23842.herokuapp.com/";

import axios from "axios";


/**
 * APIに要求を投げつける処理
*/
export default function({ app ,store, route }) {
  const request = route.query;
  const modulePath = request.rpath;
  delete request.rpath;
  //APIに投げる様に"key=value"に形を整えて配列に入れる
  let formatRequestArray = [];
  for (let key in request) formatRequestArray.push(key + "=" + request[key]);
  app.fetchAPI(request,store,modulePath)
}
