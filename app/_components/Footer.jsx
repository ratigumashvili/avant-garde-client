import Image from "next/image"
import Link from "next/link"
import { getCurrentYear } from "../_lib/helpers"

function Footer() {
    return (
        <div className='bg-black text-white p-4 mt-auto flex items-center flex-col gap-4 md:justify-between md:flex-row text-center'>
            <div className="flex items-center gap-3">
                <Link href={"https://iliauni.edu.ge/ge"} target="blank">
                    <Image src="/iliauni-logo_eng.png" width={50} height={50} alt="ISU logo" className="brightness-0 invert-[1] opacity-70 hover:opacity-100 transition-all" />
                </Link>
                <Link href={'mailto:dh@iliauni.edu.ge'}>
                    <Image src={"/dh-isu.svg"} width={70} height={70} alt="DH logo" className="brightness-0 invert-[1] opacity-70 hover:opacity-100 transition-all" />
                </Link>
            </div>
            <p className="font-light text-xs">
                &copy; {getCurrentYear()} ილიას სახელმწიფო უნივერსიტეტი. <Link href={"https://research.iliauni.edu.ge/ka/institution/3-shedarebiti-literaturis-instituti"} target="blank">შედარებითი ლიტერატურის ინსტიტუტი</Link>
            </p>
        </div>
    )
}

export default Footer