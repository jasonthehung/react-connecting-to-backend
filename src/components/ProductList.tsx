import { useEffect, useState } from "react"

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log(`Fetching ${category}...`)
        setProducts(["Clothing", "Household", "Electronics"])
    }, [category])

    return <div>ProductList</div>
}

export default ProductList
