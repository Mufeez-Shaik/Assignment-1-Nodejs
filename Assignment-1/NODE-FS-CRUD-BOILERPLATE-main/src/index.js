const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile( "file.txt", "Hello")
}
myFileWriter()
console.log('created file.txt with Hello content' )



const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile("file.txt")
}
myFileReader()
console.log("Has Read the file")




const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile("file.txt", " World")
}
myFileUpdater()
console.log("File Updated")



// const myFileDeleter = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// 	await fs.unlink("file.txt")
// }
// myFileDeleter()
// console.log('File.txt deleted')


module.exports = {myFileWriter, myFileReader,myFileUpdater,myFileDeleter}