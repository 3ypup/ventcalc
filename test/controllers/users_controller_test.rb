require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get profile]" do
    get users_profile]_url
    assert_response :success
  end

end
