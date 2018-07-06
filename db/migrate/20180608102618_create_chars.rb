class CreateChars < ActiveRecord::Migration[5.2]
  def change
    create_table :chars do |t|
      t.string :user
      t.string :charname
      t.integer :power
      t.integer :dex
      t.integer :wiz
      t.integer :hp


      t.string :uniname
      t.string :charimg


      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
