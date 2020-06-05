
//another way to make unique ids

let lastId = 0;

export default function(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}
