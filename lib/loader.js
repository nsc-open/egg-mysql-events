const mysql = require('mysql')
const MySQLEvents = require('@rodrigogs/mysql-events')

module.exports = async app => {  
  const config = app.config.mysqlEvents

  config.forEach(async cfg => {
    const { connection, triggers } = cfg
    const conn = mysql.createConnection({
      host: connection.host,
      port: connection.port,
      user: connection.user || connection.username,
      password: connection.password
    })

    const instance = new MySQLEvents(conn, {
      startAtEnd: true,
      excludedSchemas: {
        mysql: true
      }
    })
   
    await instance.start()

    instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error)
    instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error)

    triggers.forEach(trigger => {
      instance.addTrigger({
        name: trigger.name,
        expression: trigger.expression,
        statement: MySQLEvents.STATEMENTS[trigger.statement || 'ALL'],
        onEvent: trigger.onEvent
      })
    })

    app.logger.info('[egg-mysql-events] waiting for database events %s:%s', connection.host, connection.port)
  })


}