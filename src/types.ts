export interface Billboard {
    id: string
    label: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    billboard: Billboard
}

export interface Subcategory {
    id: string
    name: string
    storeId: string
    billboardId: string
    billboard: Billboard
    categoryId: string  // change this line
    createdAt: string
    updatedAt: string
}

export interface Product {
    id: string
    category: Category
    subcategory: Subcategory
    name: string
    price: string
    isFeatured: boolean
    images: Image[]
}

export interface Image {
    id: string
    url: string
}

