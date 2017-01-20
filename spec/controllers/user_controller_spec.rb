require "rails_helper"

RSpec.describe Api::UsersController, :type => :controller do
  describe "GET #show" do
    it "responds successfully with an HTTP 200 status code" do
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    # it "renders the show template" do
      # get :show
      # expect(response).to render_template("show")
    # end

    # it "loads all of the posts into @posts" do
    #   post1, post2 = Post.create!, Post.create!
    #   get :index
    #
    #   expect(assigns(:posts)).to match_array([post1, post2])
    # end
  end
end
