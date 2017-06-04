@pairs.each do |pair|
  json.set! pair.id do
    json.partial! 'api/pairs/pair', pair: pair
  end
end
