-- models/staging/stg_orders.sql
-- Staging layer: one-to-one with source, light cleaning only.
-- No business logic here — that belongs in intermediate or mart models.

with source as (
    select * from {{ source('raw', 'orders') }}
),

renamed as (
    select
        order_id,
        customer_id,
        status,
        created_at::timestamp as created_at
    from source
)

select * from renamed
