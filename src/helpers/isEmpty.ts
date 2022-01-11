export default function isEmpty(obj:any) { 
    for (var x in obj) { return false; }
    return true;
 }