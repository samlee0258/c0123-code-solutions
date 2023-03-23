select "firstName",
       "lastName"
  from "rentals"
  join "customers" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "title" = 'Magic Mallrats';
