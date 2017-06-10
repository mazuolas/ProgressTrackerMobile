@strikes.each do |strike|
  json.set! strike.id do
    json.partial! 'api/strikes/strike', strike: strike
  end
  json.total @strikes.count
end
