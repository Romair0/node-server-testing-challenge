const db=require('../data/knexconfig')
const bcrypt=require("bcryptjs")

function find(){
    return db("users").select("*")
}
function findBy(filter) {
	return db('users').select('id', 'username', 'password').where(filter);
}

async function insert(user){
    user.password=await bcrypt.hash(user.password,14)
    const [id]=await db('users').insert(user)
    return findBy({id})    
}

module.exports={
    find,
    findBy,
    insert
}