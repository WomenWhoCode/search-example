var Company = React.createClass({
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.url}</p>
            </div>
        )
    }
});
