declare class Listener {
    constructor()
    on(event: string, handle: Function): void
    off(event: string, handle?: Function): void
    emit(event: string, ...args: any): void

}

export = Listener