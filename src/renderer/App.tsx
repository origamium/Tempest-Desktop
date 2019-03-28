import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {IGlobalState} from "../redux/reducers";

interface IAppMapStateToProps {

}

interface IMapDispatchToProps {

}

interface AppProps extends IAppMapStateToProps, IMapDispatchToProps{ }

const mapStateToProps = (state: IGlobalState): IAppMapStateToProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({

});


const _App: React.FC<AppProps> = (props: AppProps) => {
    return (
        <>{"はい"}</>
    )
};

export const App = connect<IAppMapStateToProps, IMapDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(_App)
