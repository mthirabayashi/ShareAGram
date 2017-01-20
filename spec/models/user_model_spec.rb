require "rails_helper"

RSpec.describe User, :type => :model do
  # it "orders by last name" do
  #   lindeman = User.create!(first_name: "Andy", last_name: "Lindeman")
  #   chelimsky = User.create!(first_name: "David", last_name: "Chelimsky")
  #
  #   expect(User.ordered_by_last_name).to eq([chelimsky, lindeman])
  # end
  subject(:mike) { User.create!(username: "mike", email: "mike@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/c_crop,h_400,w_400,x_18/v1478396419/Hirabayashi_nj9fgp.jpg") }
  subject(:guest) { User.create!(username: "guest", email: "guest@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/v1478651158/ShareAGram/pzcgnvdxurnsefvhkr2l.png") }

  it "should require a username" do
    user = User.create(:username => "")
    user.valid?
    # user.errors.should have_key(:username)
    expect(user.errors).to have_key(:username)
  end
  it "should create username" do
    expect(mike.username).to eq('mike')
  end
  it "should require a password with min length of 6" do
    user = User.create(:password => "test")
    user.valid?
    # user.errors.should have_key(:username)
    expect(user.errors).to have_key(:password)
  end
  it "should create valid password_digest" do
    expect(mike.password_digest).to be_truthy
  end
  it "should not allow duplicate usernames" do
    user1 = User.create(:username => "test", :password => "abc123", :email => "test1@gmail.com")
    user2 = User.create(:username => "test", :password => "abc123", :email => "test2@gmail.com")
    user2.valid?
    # user.errors.should have_key(:username)
    expect(user2.errors).to have_key(:username)
  end
  it "should not allow duplicate emails" do
    user1 = User.create(:username => "test", :password => "abc123", :email => "test2@gmail.com")
    user2 = User.create(:username => "test2", :password => "abc123", :email => "test2@gmail.com")
    user2.valid?
    # user.errors.should have_key(:username)
    expect(user2.errors).to have_key(:email)
  end

end
