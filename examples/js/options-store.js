var optionStore = new Map();

populateOptionsStore = function () {

    var example1 = {
        selector: '#example1',
        value: 3,
        maxValue: 5
    }

    var example2 = {
        selector: '#example2',
        value: 4,
        maxValue: 5,
        image: 'img/facebook.png'
    }

    var example3 = {
        selector: '#example3',
        value: 3,
        maxValue: 5,
        trigger: 'onClick',
        triggerSelector:'#example3btn'
    }

    var example4 = {
        selector: '#example4',
        value: 3,
        maxValue: 5,
        trigger: 'onHover',
        triggerSelector:'#example4btn'
    }

    var example5 = {
        selector: '#example5',
        value: 3,
        maxValue: 5,
        trigger: 'onClick',
        triggerSelector:'#example5btn',
        backgroundColour: '#F0F7D4',
        barColour: '#66B032'
    }

    var example6 = {
        selector: '#example6',
        value: 4,
        maxValue: 5,
        image: 'img/facebook.png',
        height: '4px',
        trigger: 'onClick',
        triggerSelector:'#example6btn'
    }      

    var example7 = {
        selector: '#example7',
        value: 3,
        maxValue: 5,
        trigger: 'onClick',
        triggerSelector:'#example7btn',
        barImage: 'img/stripes.jpg' 
    }

    var example8 = {
        selector: '#example8',
        value: 3,
        maxValue: 5,
        trigger: 'onClick',
        triggerSelector:'#example8btn',
        backgroundImage: 'img/stripes_bw.jpg',
        barImage: 'img/stripes.jpg' 
    }

    var example9 = {
        selector: '#example9',
        value: 3,
        maxValue: 5,
        trigger: 'onClick',
        triggerSelector:'#example9btn',
        barColour: 'linear-gradient(to left, green, white)'
    }

    optionStore.set('example1', example1);
    optionStore.set('example2', example2);
    optionStore.set('example3', example3);
    optionStore.set('example4', example4);
    optionStore.set('example5', example5);
    optionStore.set('example6', example6);
    optionStore.set('example7', example7);
    optionStore.set('example8', example8);
    optionStore.set('example9', example9);
}

getOptionsfromStore = function (exampleName) {
    if(optionStore.has(exampleName))
        return optionStore.get(exampleName);
    return null;
}

