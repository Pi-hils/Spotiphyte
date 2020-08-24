require_relative '../factorial'

describe 'Factorial' do
  it "computes the factorial of 0" do
    expect(factorial(0)).to eq 1
  end
end