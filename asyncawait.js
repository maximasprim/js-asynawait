

//  const fetchData = async() =>{
//     await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data);
//     }).catch((error) =>{
//         console.log(error);
//     })

//  }
//  fetchData();



const fetchData =async() =>{
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>response.json())
    .then((data) =>{
        console.log(data);
    }).catch((error) =>{
        console.log(error);
    })
}

fetchData();