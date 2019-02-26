# i18n-simple
i18n use es6
## useage
创建实例， 并且使用`i18n.loadJSON` 方法导入预设好的json数据
`````````````
import I18n from 'i18n-simple';
import en from './en/language.json';
import zh from './zh/language.json';


const i18n = new I18n()
i18n.loadJSON([
    {
        locale: 'zh',
        json: zh
    },
    {
        locale: 'en',
        json: en
    }
])
i18n.init()
`````````````

./zh/language.json：
```````````````
{
    "hello": "你好",
    "tabs": {
        "home": "首页"
    }
}
```````````````

./en/language/json:
```````````````
{
    "hello": "Hello world",
    "tabs": {
        "home": "home page"
    }
}
```````````````

调用：
```````````````````````````
i18.t('hello')   //你好
i18n.t('tabs.home')  //首页
i18n.locale = 'en'
i18.t('hello')   //Hello world
i18n.t('tabs.home')  //home page
```````````````````````````
