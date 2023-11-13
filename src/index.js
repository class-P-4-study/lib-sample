import Func from '@class-p/appendwords'

const hoge = () => {
    console.log(Func.addFunc("htmlから呼んだでー", 123))
}

window.hoge = hoge;