import Link from "next/link";
import Container from "@/components/ui/Container";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";
import Image from "next/image";

export const revalidate = 0

const Navbar = async () => {

    const categories = await getCategories()

    return (
        <div className="border-b border-custom-light-purple">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href='/' className="ml-4 flex items-center lg:ml-0 gap-x-2">
                        <div className="w-12 h-12 relative">
                            <Image
                                src='/images/icons/asianwave_logo.png'
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="font-bold text-xl lg:text-3xl text-custom-purple hidden sm:block">ASIANWAVE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar;