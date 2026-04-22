const fs = require('fs');

fs.readFile('data.json', 'utf8', function(err, data) {
    if (err) {
        console.log('Error reading file:', err.message);
        return;
    }

    try {
        var jsonData = JSON.parse(data);
        console.log('Product Names:');
        for (var i = 0; i < jsonData.products.length; i++) {
            console.log('- ' + jsonData.products[i].name);
        }
    } catch (parseErr) {
        console.log('Error parsing JSON:', parseErr.message);
    }
});
