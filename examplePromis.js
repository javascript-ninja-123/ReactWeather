// function getTempCallback(location, callback){
// callback(undefined,78);
// callback("City not found");
// }
//
// getTempCallback('California',function(err,temp){
// if(err){
//   console.log('err',err);
//   else{
//     console.log('success',temp);
//   }
// }
// });

// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve(79);
//         reject('city not found');
//       },1000);
//   });
// }
//
// getTempPromise('ca').then(function(temp){
//   console.log("promise success", temp)
// },function(err){
//   console.log('promise err', temp);
// })

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === "number" && typeof b === 'number'){
      resolve(a + b);
    }
    else{
        reject('error, not a number ');
    }
  });
}

addPromise(2,5).then(function(sum){
  console.log('promise success', sum)
},function(err){
  console.log('promise err',err)
});


function multiplyPromise(a,b){
  return new Promise(function(resolve,reject){
if(typeof a === 'number' && typeof b === "number"){
  resolve(a * b);
}
else{
  reject('does not work man');
}
  });
}

multiplyPromise(4,6).then(function(sum){
  console.log('success', sum);
},function(err){
  console.log('err',err);
});
