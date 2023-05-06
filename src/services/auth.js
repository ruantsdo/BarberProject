export function signIn(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                token:'aiusdhioshyud28903uehjp2o90i3hr',
                user:{
                    name:'Ruan',
                    email:'email@email.com',
                },
            })
        }, 2000)
    })
}