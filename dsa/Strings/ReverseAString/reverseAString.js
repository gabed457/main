String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function reverse(str) {
    if(str.length === 0) return '';
    if(str.length === 1) return str;
    let start = 0, end = str.length-1;
    while(start < end) {
        console.log(str, start, end);
        let strCurrStart = str[start];
        str = str.replaceAt(start,str[end]);
        str = str.replaceAt(end, strCurrStart)
        start++;
        end--;
    }
    return str;
}
exports.reverse = reverse;
