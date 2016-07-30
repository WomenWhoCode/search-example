class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.boolean :expired
      t.boolean :draft
      t.boolean :archive
      t.references :statusable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
