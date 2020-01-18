import React,{Component, Fragment} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return (
                <Fragment>
                    <h1 style={{color:'orange'}}>Oops, Something went wrong!</h1>
                </Fragment>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;