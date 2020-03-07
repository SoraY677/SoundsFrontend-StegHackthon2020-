export default function({ app, store, route }) {
  const request = route.query;
  const modulePath = request.rpath;
  delete request.rpath;
  //APIに投げる様に"key=value"に形を整えて配列に入れる
  let formatRequestArray = [];
  for (let key in request) formatRequestArray.push(key + "=" + request[key]);
  
  const result = app.$fetchAPI(request,modulePath);

  store.commit("setData",result)
}
