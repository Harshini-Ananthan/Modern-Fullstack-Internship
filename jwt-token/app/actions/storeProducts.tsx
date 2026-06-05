'use server'

import { prisma } from "../lib/prisma";

export default async function storeProducts(products: any){
        for(const product of products){
            await prisma.food_items.create(
                {
                    data: {
                        item_name: product.title,
                        price: product.price,
                        category: product.category
                    }
                }
            )
        }
    }

export async function getAllProducts(){
    const result = await prisma.food_items.findMany();
    return result;
}