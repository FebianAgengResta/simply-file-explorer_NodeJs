const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    
    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    
    console.log(commandOutput);
    
    let filesize = commandOutput.replace(itemFullStaticPathCleaned, '');
    filesize = filesize.replace(/\s/g, '');
    console.log(filesize);
    
    filesize = filesize.split('/');
    
    filesize = filesize[0];
    console.log(filesize);
    
    const filesizeUnit = filesize.replace(/\d|\./g, '');
    console.log(filesizeUnit);
    
    const filesizeNumber = parseFloat(filesize.replace(/[a-z]/i, ''));
    console.log(filesizeNumber);
    
    const units = "BKMGT";
    
    const filesizeBytes = filesizeNumber * Math.pow(1000, units.indexOf(filesizeUnit));
    
    console.log(filesizeBytes);
    
    return [filesize, filesizeBytes];
};

module.exports = calculateSizeD;