# easybar
A lightweight, vanilla JS progress bar. 

* No JQuery
* Very small (3 kb minified)
* Highly customisable
* MIT licence (you can use it in commercial projects without charge)

## Why
We needed a slightly fancy progress bar for a project. We went looking. We found some really nice stuff, but nothing that quite suited us. Here a list of the places we looked:

* [LoadingBar.js](https://loading.io/progress/)
* [Boostrap](https://getbootstrap.com/docs/4.1/components/progress/)
* [JQueryUI](https://jqueryui.com/progressbar/)
* [ProgressBar.js](https://kimmobrunfeldt.github.io/progressbar.js/)

There were some others. We needed something that was easy to hack, and no JQuery. So we made it.

Update: I found this a nice component, used it in one of our projects also. But now the original repo is removed so here is a clone of that
easybar js package.


## How to use

Very simple. Add the following HTML to your page:
```html
<div id="example" class="easybar-wrapper">
  <div class="easybar-background">
    <div class="easybar"></div>
   </div>
</div>
```
Include the following CSS:

```css
.easybar {
    width: 0%;
}

.easybar-image {
     float: right;
}
```

Then declare an options object and initialise the the easybar, like this:

```html
<script src="js/easybar.js"></script>

var options = {
  selector: '#example',
  value: 3,
  maxValue: 5,
}

initialiseEasybar(options);
```

[Check out the examples](http://htmlpreview.github.com/?https://github.com/mark-truran/easybar/blob/master/examples/index.html)

## Browser Compatibility

Easybar is animated using CSS transitions, so browser compatibility is very good. Take a look at this [article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) for further information. CSS gradients (one of the many options) are not supported by IE9. 

## Developers

Developed by Duncan Chambers and Mark Truran, used by [tombola](https://www.tombola.co.uk). Pull requests welcome.
Cloned/forked by Walter Schreppers.


