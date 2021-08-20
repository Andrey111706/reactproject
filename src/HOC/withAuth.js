import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {isAuth:state.AuthReducer.isAuth,
    }

}
export  let withAuthComponent = (Component) => {
    let WrappedContainer = (props) => {
        if(!props.isAuth){return <Redirect to={'/login'}/>}
        return <Component {...props}/>
    }
    let ConnectedWrappedContainer = connect (mapStateToProps)(WrappedContainer)
    return ConnectedWrappedContainer;


}