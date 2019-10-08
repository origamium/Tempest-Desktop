export interface IColumnItem {
    name: string
    id: string
    belongsTabKey: string
    ownerKey: string | string[]
    collapsed: boolean
    config: IColumConfig
}

export interface IColumConfig {

}

export interface IColumnState {
    orderById: string[]
    items: {[key: string]: IColumnItem}
}
