let cats = [
    {
        id: 0,
        name: "Jiji",
        color: "black",
        human: "Kiki",
        image: "images/jiji.png"
    },
    {
        id: 1,
        name: "Lion",
        color: "pink",
        human: "Steven",
        image: "images/lion.png"
    },
    {
        id: 2,
        name: "Hobbes",
        color: "orange and black",
        human: "Calvin",
        image: "images/hobbes.png"
    },
];

const getCats = () => {
    return cats;
};

const getCatbyID = (id) =>{
    return cats.find(cat => cat.id === id);
};

const deleteCatbyID = () => {
    const currentNumberCats = cats.length;

    cats = cats.filter(cat => cat.id !== id);
    const newNumberCats = cats.length;
    if(newNumberCats === currentNumberCats){
        throw new Error(`cat ${id} not found`);
    }
    
    console.log("remaining cats:");
    for(let cat of cats){
        console.log(cat.id);
    }
};

export {getCats, getCatbyID, deleteCatbyID};