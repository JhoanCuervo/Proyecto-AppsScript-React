function insertUsers(id, dataUsers){
    try{
        const inputs = "Id, NombreCompleto, Correo, Contrasena";
        const values = `"${id}", "${dataUsers['nombreCompleto']}", "${dataUsers['correo']}", "${dataUsers['contrasena']}"`;
        var idInsert = insertData_(env_().ID_TABLEUSERS, inputs, values);
        return {
            "id"            : idInsert,
            "title"         : "Registro Exitoso",
            "description"   : "Ya se encuentra registrado el usuario en la base de datos."
        };
    }catch(e){
        return {
            "id"            : "",
            "title"         : "Ops ha ocurrido un error!" + e,
            "description"   : "Por favor contacte a soporte."
        };
    }
    
}

function queryUsers(){
    try{
        var idInsert = queryData_(env_().ID_TABLEUSERS);
        return idInsert
    }catch(e){
        return {
            "id"            : "",
            "title"         : "Ops ha ocurrido un error!" + e,
            "description"   : "Por favor contacte a soporte."
        };
    }
}