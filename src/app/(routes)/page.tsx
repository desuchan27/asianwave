import getBillboard from "@/actions/getBillboards"
import getProducts from "@/actions/getProducts"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"

export const revalidate = 0

const Page = async () => {

    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("d479b297-83c9-4507-8c31-0a65256240f7")

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList
                        title="Featured Products"
                        items={products}
                />
                </div>
            </div>
        </Container>
    )
}

export default Page