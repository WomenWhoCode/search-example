var Companies = React.createClass({
   render(){
       var showCompanies = function (company) {
           debugger
           return React.createElement(Company, { name: company, url: company.url, key: company.id });
       };
       console.log(this.props.companies)
       return(<ul>{this.props.companies.map(showCompanies())}</ul>);
   }
});
