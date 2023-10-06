fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                var t=  json.map((val)=>{
               val.isp="true"
                    return val
               })
               console.log(t)
            })


// let p=[
//     {name:"raj",class:4},
//     {name:"raj2",class:6},
//     {name:"raj3",class:7},
//     {name:"raj4",class:9}
// ]

// var k=p.map((val)=>{
//     val.isp="true"
//    return val
// })
// console.log(k)