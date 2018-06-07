class PostsController < ApplicationController

def index
 @posts=Post.all


end


  def new
    
  end


  def create
    @post = Post.new(post_params)
      
      if  @post.save
        redirect_to @post
      else
        render action: 'new'
      end
  end


def show


  @post = Post.find(params[:id])
  


end


def destroy
  @post = Post.find(params[:id])
  

  @post.destroy


  redirect_to posts_path

end


 private 

  def post_params
    params.require(:post).permit(:author, :content, :title, :image)
  end

end