SELECT 
  relname,
  pg_class.oid 
FROM 
  pg_class 
WHERE 
  pg_class.oid IN ( 
    SELECT indexrelid 
    FROM pg_index, pg_class 
    WHERE pg_class.relname='tab2'
    AND pg_class.relnamespace IN (
      SELECT pg_namespace.oid FROM pg_namespace WHERE nspname = 'public'
    )
    AND pg_class.oid=pg_index.indrelid
  )
  AND pg_class.relname = 'ix2' 

select * from pg_attribute where attrelid=16414

select * from pg_index where indexrelid=16414


SELECT "pg_class"."relname", "pg_class"."oid" FROM "pg_class" 
WHERE 
  (
    ("pg_class"."oid" IN (
      SELECT "pg_class"."oid" FROM "pg_class" 
      WHERE 
        (
          ("pg_class"."relname" = 'tab1') AND ("pg_class"."relnamespace" IN (
            SELECT "pg_namespace"."oid" FROM "pg_namespace" WHERE ("pg_namespace"."nspname" = 'public'))
          )
        )
      )
    ) AND ("pg_class"."relname" = 'xx1'))                                                                                                                                      
    
    
[ 'tab1', 'public', 'xx1' ]