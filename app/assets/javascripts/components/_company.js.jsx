var Company = React.createClass({
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.company_url}</p>
            </div>
        )
    }
});
