initialiseEasybar = function (options) {

    options = setDefaults(options);

    var length = calculateLengthOfProgressBar(options.value, options.maxValue);

    initialiseProgressBarWrapper(options);
    initialiseProgessBarBackground(options);
    initialiseProgressBar(options, length);

    if (options.image !== '')
        initialiseImage(options);

    initialiseAnimationTrigger(options, length);
}

initialiseProgressBarWrapper = function (options) {
    var element = document.querySelector(options.selector);
    element.style.width = options.wrapperWidth;
    element.style.padding = options.wrapperPadding;
}

initialiseProgessBarBackground = function (options) {
    var element = document.querySelector(options.selector + ' .easybar-background');
    if (options.backgroundImage !== '') {
        element.style.background = '#ffffff';
        element.style.backgroundImage = 'url("' + options.backgroundImage + '")';
    } else {
        element.style.background = options.backgroundColour;
    }
    element.style.borderRadius = options.borderRadius;
}

initialiseProgressBar = function (options, length) {
    var element = document.querySelector(options.selector + ' .easybar');
    if (options.barImage !== '') {
        element.style.background = '#ffffff';
        element.style.backgroundImage = 'url("' + options.barImage + '")';
    } else {
        element.style.background = options.barColour;
    }
    element.style.transitionProperty = options.transitionProperty;
    element.style.transitionDuration = (options.transitionDuration * (length / 100)).toString() + 'ms';
    element.style.transitionTimingFunction = options.transitionTiming;
    element.style.transitionDelay = options.transitionDelay;
    element.style.height = options.height;
    element.style.borderRadius = options.borderRadius;
}

initialiseImage = function (options) {
    var bar = document.querySelector(options.selector + ' .easybar');
    var image = document.createElement('img');
    image.src = options.image;
    image.height = options.imageHeight;
    image.width = options.imageWidth;
    image.classList.add('easybar-image');
    var negativeMargin = (image.height / 2) * -1;
    var positiveMargin = bar.offsetHeight / 2;
    var marginRequired = negativeMargin + positiveMargin;
    image.style.marginTop = marginRequired.toString() + 'px';
    image.style.marginRight = (((options.imageWidth * options.imagePercentageOffsetX) / 100) * -1).toString() + 'px';
    bar.appendChild(image);
}

initialiseAnimationTrigger = function (options, length) {

    var element = document.querySelector(options.selector + ' .easybar');

    if (options.trigger === 'onPageLoad') {
        document.addEventListener('DOMContentLoaded', function () {
            element.style.width = length.toString() + '%';
        }, false);
    }

    if (options.trigger === 'onClick') {
        var trigger = document.querySelector(options.triggerSelector);
        trigger.addEventListener('click', function () {
            element.style.width = length.toString() + '%';
        }, false);
    }

    if (options.trigger === 'onHover') {
        var trigger = document.querySelector(options.triggerSelector);
        trigger.addEventListener('mouseenter', function () {
            element.style.width = length.toString() + '%';
        }, false);
    }
}

calculateLengthOfProgressBar = function (value, maxValue) {
    if (value > maxValue)
        return 100;
    return (value / maxValue) * 100;
}

setDefaults = function (options) {
    var defaults = {
        selector: '',
        value: 1,
        maxValue: 2,
        height: '20px',
        backgroundColour: '#f1f1f1',
        backgroundImage: '',
        barColour: '#3B5998',
        barImage: '',
        wrapperWidth: '50%',
        wrapperPadding: '20px',
        transitionDuration: 1500,
        transitionDelay: '400ms',
        transitionProperty: 'width',
        transitionTiming: 'linear',
        image: '',
        imageHeight: '50',
        imageWidth: '50',
        borderRadius: '0',
        imagePercentageOffsetX: 0,
        trigger: 'onPageLoad',
        triggerSelector: ''
    };

    for (var property in defaults) {
        if (!options.hasOwnProperty(property)) {
            options[property] = defaults[property];
        }
    }
    return options;
}