class Company < ActiveRecord::Base
  has_one :status, as: :statusable, autosave: true, dependent: :destroy
  before_create { build_status unless self.status }
end
