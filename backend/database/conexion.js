function queryData_(name){
    const table = "`" + env_().ID_DATABESE + "." + name + "`"
    var request = {
        query: `SELECT * FROM ${table} order by Id`,
        useLegacySql: false,
    };
    var queryResults = BigQuery.Jobs.query(request, env_().ID_DATABESE);
    var jobId = queryResults.jobReference.jobId;
    Logger.log(queryResults.rows)
}

function insertData(nameDatabase, inputs, values){
    const table = "`" + env_().ID_DATABESE + "." + nameDatabase + "`"
    
    var request = {
      query: `INSERT INTO ${table} (${inputs}) VALUES(${values})`,
      useLegacySql: false,
      writeDisposition: 'WRITE_TRUNCATE'
    };

    Logger.log(request);
    var queryResults = BigQuery.Jobs.query(request, env_().ID_DATABESE);
    

    Logger.log(queryResults);

    var jobId = queryResults.jobReference.jobId;
    return queryResults
  }