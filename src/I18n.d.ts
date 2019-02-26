import Listener from '../lib/Listener';
interface I18nOptions {
    defaultLocale?: string,
}
interface I18nLoadJSONItem {
    locale: string,
    json: object
}
declare class I18n {
    constructor(options: I18nOptions)
    
    private _currentLocale: string
    private _listener: Listener
    private _t: object
    
    public locale(locale: string): void
    public locale(): string
    public loadJSON(items: I18nLoadJSONItem[]): void
    public addListener(event: 'change', handle: Function): void
    public t(key: string): string //如: 'tab.home'
    public init(): void

}

export = I18n