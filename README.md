# hepsiburada-components

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Component usage

# 1-Button
Buttons have 4 different qualifications;

1) buttonText
You can customize the name of the button as you wish. All you need to do for this is buttonText="your text"

2) buttonType
We have 3 different styles of buttons. These are primary, variant and secondary styles respectively. All you need to do for this is buttonType="primary/variant/secondary/"

3) :disabled
By default it is disabled. You can turn it on by saying :disabled=true or turn it off by saying :disabled=false. When :disabled=true, cursor is not working and opacity is low.

4) icon



5) @click="functionName"
By typing @click="functionName" you can specify your function name and call the function you want.