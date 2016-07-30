var CompaniesSearch = React.createClass({
    render(){
        return(
            <div>
                <form ref="form" action={this.props.searchPath} acceptCharset="UTF-8" method="get" >
                    <p><input ref="query" placeholder="Search here." onChange={this.props.submitPath}></input></p>
                </form>
                <a href="#" onClick={this.props.cancelPath}>Cancel</a>
            </div>
        );
    }
});
