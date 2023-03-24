select "line1" as "address",
       "cities"."name" as "city",
       "district"
  from "cities"
  join "addresses" using ("cityId");
