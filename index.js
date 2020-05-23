const figlet = require('figlet');

module.exports.handler = () => {
    figlet('Testing Layer', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.error(err);
            return;
        }
        console.log(data)
    });
}