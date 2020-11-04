class Message < ApplicationRecord
  validates :author, presence: true
  validates :recipient, presence: true
  validates :private, inclusion: [true, false] 
  validates :content, presence: true
end
