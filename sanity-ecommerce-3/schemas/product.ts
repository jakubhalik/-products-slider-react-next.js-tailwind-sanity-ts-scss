export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'price150g',
            title: '150g Price',
            type: 'number',
        },
        {
            name: 'price300g',
            title: '300g Price',
            type: 'number',
        },
        {
            name: 'price1kg',
            title: '1kg Price',
            type: 'number',
        },
        {
            name: 'price2kg',
            title: '2kg Price',
            type: 'number',
        },
        {
            name: 'price3kg',
            title: '3kg Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}