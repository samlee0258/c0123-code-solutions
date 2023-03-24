select c."name",
      count(*) as "numOfCities"
  from "countries" as "c"
  join "cities" using ("countryId")
  group by "countryId";
