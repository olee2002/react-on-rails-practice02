class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.string :name
      t.integer :age
      t.references :employee, foreign_key: true

      t.timestamps
    end
  end
end
