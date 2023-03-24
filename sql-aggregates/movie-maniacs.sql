select "firstName",
       "lastName",
    sum("payments"."amount") as "totalPayment"
  from "customers"
  join "payments" using ("customerId")
  group by "firstName","lastName"
  order by "totalPayment" desc;
