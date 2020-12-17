const createElementWithClass = (tag, classes) => {
    const el = document.createElement(tag);
    el.setAttribute('class', classes);
    return el;
};


const createItem = (color, name) => {
    const elmItem = createElementWithClass('div', 'palette__item');
    const elmColor = createElementWithClass('div', 'palette__color');
    const elmName = createElementWithClass('div', 'palette__name');
    const elmInput = createElementWithClass('input', 'palette__input');

    elmColor.style.backgroundColor = color;
    elmInput.value = name;
    elmName.textContent = color;

    elmColor.addEventListener('click', async (e) => {
        console.log()
        const color = elmName.textContent;
        await navigator.clipboard.writeText(color);
        alert(`${color} copied successfully ...`);
    }); 

    elmItem.appendChild(elmColor);
    elmItem.appendChild(elmInput);
    elmColor.appendChild(elmName);

    elmInput.onfocus = () => elmInput.select();
    
    return elmItem;
};



const generateRandomColors = () => {
    const hexCode = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }

    console.log(color);
    return color;
};


const colors = [
    {
        'value': '#CD5C5C',
        'color': 'IndianRed'
    },
    {
        'value': '#000',
        'color': 'black'
    },
    {
        'value': '#800000',
        'color': 'Maroon'
    },
    {
        'value': '#00FF00',
        'color': 'Lime'
    },
    {
        'value': '#000080',
        'color': 'Navy'
    },
    {
        'value': '#00FA9A',
        'color': 'MediumSpringGreen'
    },
    {
        'value': '#00CED1',
        'color': 'DarkTurquoise'
    },
    {
        'value': '#EE82EE',
        'color': 'Violet'
    },
    {
        'value': '#FF4500',
        'color': 'OrangeRed'
    },
    {
        'value': '#FFA07A',
        'color': 'lightsalmon'
    },
    {
        'value': '#E9967A',
        'color': 'darksalmon'
    },
    {
        'value': '#B22222',
        'color': 'firebrick'
    },
    {
        'value': '#FF6347',
        'color': 'Tomato'
    },
    {
        'value': '#00FF7F',
        'color': 'springgreen'
    },
    {
        'value': '#808000',
        'color': 'Olive'
    },
    {
        'value': '#008080',
        'color': 'Teal'
    },
    {
        'value': '#ff1493',
        'color': 'Deep pink'
    }
]


const container = document.querySelector('.palette');

for (const {value, color} of colors) {
    container.appendChild(createItem(value, color));
}

container.appendChild(createItem(generateRandomColors(), 'random')); 

