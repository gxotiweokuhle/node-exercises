const fs = require('fs');
fs.writeFile('./docs/data.txt', 'having fun learning node' + '\n' + 'learning to add more content' + '\n' + 'exercise 1 completed', () => {
    console.log('file was written');
})
