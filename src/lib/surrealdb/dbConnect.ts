// import Surreal from 'surrealdb.js'
// import surrealConfig from '$lib/surrealdb/surrealConfig'

// let sdb: Surreal

// export async function dbConnect() {
// 	// if db instance already exists, return it
// 	if (sdb) return sdb

// 	// create new database instance
// 	const config = await surrealConfig()
// 	const { protocol, host } = window.location
// 	// url defaults to "/rpc" (full URL string required)
// 	const {
// 		url = `${protocol}//${host}/rpc`,
// 		namespace,
// 		database,
// 		username,
// 		password
// 	} = config.surrealdb
// 	sdb = Surreal.Instance
// 	await sdb.connect(url)
// 	await sdb.use(namespace, database)
// 	// await sdb.signin({ user, pass });
// 	return sdb
// }
