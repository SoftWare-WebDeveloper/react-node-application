const fs = require('fs');

module.exports = function (exclude = []) {
    exclude.push('index.js');

    return fs.readdirSync(__dirname).reduce((config, file) => {
        return exclude.includes(file)
        ?
            config
        :
            {
                ...config,
                [file.replace('.js', '').toUpperCase()] : require(__dirname+'/'+file)
            }
    }, {});
};