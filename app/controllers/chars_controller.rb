class CharsController < ApplicationController

  def new


  end

def create
 
    @post = Post.find(params[:post_id])
    @post.chars.create(char_params)



    redirect_to post_path(@post)
 
end

  def char_params
    params.require(:char).permit(:user, :charname, :power, :uniname)
  end
end
