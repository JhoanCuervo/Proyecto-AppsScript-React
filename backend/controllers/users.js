function insertUsers(dataUsers){
    console.log(dataUsers);
    try{
        const inputs = "Id, NombreCompleto, Correo, Contrasena";
        const values = `"1", "${dataUsers['nombreCompleto']}", "${dataUsers['correo']}", "${dataUsers['contrasena']}"`;
        return insertData(env_().ID_TABLEUSERS, inputs, values);
    }catch(e){
        return e;
    }
    
}