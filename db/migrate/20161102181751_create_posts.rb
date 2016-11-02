class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :img_url, null: false
      t.text :description, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :posts, :author_id
  end
end
