json.array!(@companies) do |company|
  p company
  p company.name
  p company.url
  p company_url(company)
  json.extract!(company, :id, :name, :url)
  json.url(company_url(company, format: :json))
end
