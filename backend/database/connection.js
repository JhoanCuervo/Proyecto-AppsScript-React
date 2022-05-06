function queryData_(name){
    const table = "`" + env_().ID_DATABESE + "." + name + "`"
    var request = {
        query: `SELECT * FROM ${table}`,
        useLegacySql: false,
    };
    var queryResults = BigQuery.Jobs.query(request, env_().ID_DATABESE);
    var jobId = queryResults.jobReference.jobId;
    return queryResults.rows
}

function insertData_(nameDatabase, inputs, values){
    const table = "`" + env_().ID_DATABESE + "." + nameDatabase + "`"
    
    var request = {
      query: `INSERT INTO ${table} (${inputs}) VALUES(${values})`,
      useLegacySql: false,
      writeDisposition: 'WRITE_TRUNCATE'
    };
    var queryResults = BigQuery.Jobs.query(request, env_().ID_DATABESE);
    var jobId = queryResults.jobReference.jobId;
    return jobId;
  }