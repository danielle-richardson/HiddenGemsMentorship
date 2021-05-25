class Api::V1::MentorsController < ApplicationController
  before_action :set_mentor, only: [:show, :update, :destroy]

  # GET /mentors
  def index
    @mentors = Mentor.all
    render json: MentorSerializer.new(@mentors)
  end

  # GET /mentors/1
  def show
    render json: @mentor
  end

  # POST /mentors
  def create
    @mentor = Mentor.new(mentor_params)

    if @mentor.save
      render json: MentorSerializer.new(@mentor), status: :accepted
    else
      render json: @mentor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mentors/1
  def update
    if @mentor.update(mentor_params)
      render json: @mentor
    else
      render json: @mentor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mentors/1
  def destroy
    mentor = Mentor.find(params[:id])
    @mentor.destroy
    render json: @mentor

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mentor
      @mentor = Mentor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mentor_params
      params.require(:mentor).permit(:name, :title, :about, :image_url, :department_id)
    end
end
