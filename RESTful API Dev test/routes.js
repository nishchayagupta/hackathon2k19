const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'Naughty880042',
  port: 5432
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM userdata ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM userdata WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { firstname, lastname } = request.body

  pool.query('INSERT INTO userdata (firstname, lastname, id) VALUES ($1, $2, (select count(*) from userdata)+1)', [firstname, lastname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { firstname, lastname } = request.body
  console.log(firstname)
  console.log(lastname)
  console.log(id)

  pool.query(
    'UPDATE userdata SET firstname = $1, lastname = $2 WHERE id = $3',
    [firstname, lastname, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE from userdata where id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    response.status(200).json({ status: 'deleted' })
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
