import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export enum GeneralColmunAction {
    CreateColumn = "CreateColumn",
    DeleteColumn = "DeleteColumn",
    RenameColumn = "RenameColumn",
    MoveColumn = "MoveColumn"
}

export interface ICreateColumnAction {
    name: string,
    id: string,
    belongsTabKey: string,
    ownerKey: string | string[]
}
export const CreateColumn = actionCreator<ICreateColumnAction>(GeneralColmunAction.CreateColumn)

export interface IDeleteColumnAction {
    id: string
}
export const DeleteColumn = actionCreator<IDeleteColumnAction>(GeneralColmunAction.DeleteColumn)

export interface IRenameColumnAction {
    id: string,
    name: string
}
export const RenameColumn = actionCreator<IRenameColumnAction>(GeneralColmunAction.RenameColumn)

