const arr = ['1', '2', '3', '4'];
let res1 = arr.find(item => item === '3');
console.log(res1);


const peopleList = [{
        name: 'Max',
        age: 25,
        id: 1,
    },
    {
        name: 'Nik',
        age: 30,
        id: 3,
    },
    {
        name: 'Jack',
        age: 32,
        id: 4
    },
    {
        name: 'Harry',
        age: 10,
        id: 5
    }
];

let res2 = peopleList.filter(item => item.id > 2);
console.log(res2);


const getData = async() => {
    try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const res = await data.json();
        console.log(res);
        const entity = res.results.filter((item) => item.id > 5 && item.id < 20);
        console.log('entity', entity);
    } catch (error) {
        console.log(error);
    }
}

getData();


const obj = {
    name: 'Jacob',
    age: 20,
    id: 1
};
for (const key in obj) {
    alert(`${key}: ${obj[key]}`);
}