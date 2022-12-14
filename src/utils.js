function secondsToTime(seconds) {
    return new Date(1000 * seconds)
        .toISOString()
        .substring(14,19)
}

function convertTrToEng(text)
 {
    var trMap = {
        'çÇ':'c',
        'ğĞ':'g',
        'şŞ':'s',
        'üÜ':'u',
        'ıİ':'i',
        'öÖ':'o'
    };
    for(var key in trMap) {
        text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
    }
    return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') 
                .replace(/\s/gi, "-") 
                .replace(/[-]+/gi, "-") 
                .toLowerCase();

}

export{
    secondsToTime,
    convertTrToEng
}