import Listener from '../lib/Listener';
import * as I18nUtil from './I18nUtil';
class I18n {
    constructor(options = {}){
        this._currentLocale = options.defaultLocale || 'zh'
        this._listener = new Listener()
        this._t = {}
        this.loadJSON = this.loadJSON.bind(this)
        this.addListener = this.addListener.bind(this)
        this.t = this.t.bind(this)
        this.init = this.init.bind(this)
    }

    set locale(locale){
        this._currentLocale = locale
        this._listener.emit('change')
    }

    get locale(){
        return this._currentLocale
    }

    loadJSON(items) {
        items.forEach(({locale, json}) => {
            this._t[locale] = json
        })
    }

    addListener(event, handle){
        this._listener.on(event, handle)
    }

    t(key){
        const keys = key.split('.')
        const obj = this._t[this.locale]
        return I18nUtil.recurseText(obj, keys)
    }

    init(){
        this.locale = this._currentLocale
    }

}

export default I18n