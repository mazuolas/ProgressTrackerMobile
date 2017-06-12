if @strikes.count == 0
  json.set! 1 do
    json.note 'No strikes!'
    json.day ' '
  end
else
  @strikes.each do |strike|
    json.set! strike.id do
      json.partial! 'api/strikes/strike', strike: strike
    end
  end
end
json.total @strikes.count
