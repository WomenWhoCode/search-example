var Companies = React.createClass({
   render(){
       var showCompanies = (company) => <Company name={company.name} company_url={company.company_url} key={company.id} />;
       return(<ul>{this.props.companies.map(showCompanies)}</ul>);
   }
});
