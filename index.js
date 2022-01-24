const fs = require('fs')

const data = 'country, year, population'

// If files exist, delete them 
try {
    if(fs.existsSync('canada.txt')){
        fs.unlink('canada.txt', (err) => {
            if(err){
                console.log(err)
                return
            }
            console.log("File Deleted...")
        })
    }
} catch(err) {
    console.error(err)
}

try{
    if(fs.existsSync('usa.txt')){
        fs.unlink('usa.txt', (err) => {
            if(err){
                console.log(err)
                return
            }
            console.log("File Deleted...")
        })
    }
} catch(err){
    console.log(err)
}

// 
fs.writeFileSync('canada.txt', data)
fs.writeFileSync('usa.txt', data)


/* fs.readFile('input_countries.csv', (err, data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data.toString())
}) */