class SuggestionsController < ApplicationController
  CSTATUS_NOT_CHECK = 'checking'
  CSTATUS_CHECK_APPROVED = 'approved'
  CSTATUS_NOT_APPROVED = 'checked but not approved'
  def new
  end
  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.update(check_status: CSTATUS_NOT_CHECK)
    @suggestion.save
      redirect_to @suggestion
  end
  def show
    @suggestion = Suggestion.find(params[:id])
  end
  private
  def suggestion_params
    params.require(:suggestion).permit(:summary, :email, :describe)
  end
end
