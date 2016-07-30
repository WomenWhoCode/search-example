var Companies = React.createClass({
   render(){
       var showCompanies = (company) => <Company name={company.name} url={company.url} key={company.id} />;
       return(<ul>{this.props.companies.map(showCompanies)}</ul>);
   }
});
