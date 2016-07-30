class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :url
      t.string :size
      t.string :stage
      t.string :location
      t.string :logo_url

      t.timestamps null: false
    end
  end
end
