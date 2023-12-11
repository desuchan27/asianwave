import getBillboard from "@/actions/getBillboards"
import getProducts from "@/actions/getProducts"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"

export const revalidate = 0

const Page = async () => {

    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("8bb4a7c8-c450-4e48-9ac4-406c0e941e51")

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