const usuarios = new Map();
usuarios.set('Luiz', 'ADMIN');
usuarios.set('Priscila', 'ADMIN');
usuarios.set('Kevin', 'user');
usuarios.set('Diego', 'user');


function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'ADMIN'){
            admins.push(key);
        }
        
    }
    return admins;
}

console.log(getAdmins(usuarios));


