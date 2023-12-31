import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Input,
    Badge,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import { GrFormSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaLaptop, FaMobile, FaCamera, FaHeadphones, FaGamepad, FaPlug, FaHome ,FaCar, FaTree, FaTools, FaPencilAlt, FaBriefcase,  FaTshirt, FaShoppingBag, FaGlasses, FaHatWizard } from 'react-icons/fa';
import { GiSofa } from "react-icons/gi";

import TrendBurada from "../../public/trendburada.svg";
import { Link } from "react-router-dom";

const elektronikKategoriler = [
    {
        title: "Laptop Bilgisayarlar",
        description: "Güçlü ve taşınabilir bilgisayar çözümlerini keşfedin.",
        icon: FaLaptop,
    },
    {
        title: "Akıllı Telefonlar",
        description: "Mobil teknolojinin en son yeniliklerini keşfedin.",
        icon: FaMobile ,
    },
    {
        title: "Kameralar",
        description: "Yüksek kaliteli görüntüleme cihazları ile anıları yakalayın.",
        icon: FaCamera ,
    },
    {
        title: "Ses Cihazları",
        description: "Üstün ses kalitesi ile kendinizi bırakın.",
        icon: FaHeadphones ,
    },
    {
        title: "Oyun Ekipmanları",
        description: "Keskin kenar ekipmanlar ile oyun deneyiminizi artırın.",
        icon: FaGamepad,
    },
    {
        title: "Aksesuarlar",
        description: "Cihazlarınızı tamamlayan mükemmel eklemeleri bulun.",
        icon: FaPlug ,
    },
    {
        title: "Akıllı Ev",
        description: "Evini otomatikleştir ve kontrol etmek için akıllı cihazları kullan.",
        icon: FaHome ,
    },
];
const evkrtsyeKatalog = [
    {
        title: "Ev",
        description: "Ev ihtiyaçlarınız için mükemmel çözümler.",
        icon: FaHome ,
    },
    {
        title: "Yaşam",
        description: "Hayatınızı kolaylaştıracak ürünler ve hizmetler.",
        icon: GiSofa ,
    },
    {
        title: "Kırtasiye",
        description: "Ofis ve okul malzemeleriyle üretkenliğinizi artırın.",
        icon: FaPencilAlt ,
    },
    {
        title: "Ofis",
        description: "Ofis ihtiyaçlarınız için şık ve etkili çözümler.",
        icon: FaBriefcase ,
    },
];

const modaKategorileri = [
    {
        title: "Giyim",
        description: "Son moda kıyafet ve aksesuarları keşfedin.",
        icon: FaTshirt ,
    },
    {
        title: "Aksesuarlar",
        description: "Tarzınızı tamamlayacak şık aksesuarlar.",
        icon: FaGlasses ,
    },
    {
        title: "Çanta",
        description: "Şıklığınızı taşıyın, pratik ve şık çanta modelleri.",
        icon: FaShoppingBag ,
    },
    {
        title: "Şapka",
        description: "Tarzınıza uygun şapka modelleri.",
        icon: FaHatWizard ,
    },
];

const otoBahceYapiMarketKategorileri = [
    {
        title: "Oto",
        description: "Araçlarınız için ihtiyacınız olan her şey.",
        icon: FaCar,
    },
    {
        title: "Bahçe",
        description: "Bahçenizi güzelleştirmek için araçlar ve ürünler.",
        icon: FaTree,
    },
    {
        title: "Yapı Market",
        description: "Ev projelerinizde kullanabileceğiniz malzemeler.",
        icon: FaTools,
    },
];

function NavListMenu({title , data}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = data.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            {title}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavListHesap() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <FaUser size={20}/>
                            Giriş Yap

                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block text-center">
                    <div>
                        <Button className="bg-[#FF6000]">Giriş Yap</Button>
                    </div>
                    <div className="mt-5">
                        <Button >Üye Ol</Button>
                    </div>
                </MenuList>
            </Menu>

        </React.Fragment>
    );
}

function NavList() {
    return (
        <>


            <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
                <NavListMenu title={"Elektronik"} data={elektronikKategoriler}/>
                <NavListMenu title={"Moda"} data={modaKategorileri} />
                <NavListMenu title={"Ev, Yaşam, Kırtasiye, Ofis"} data={evkrtsyeKatalog}  />
                <NavListMenu title={"Oto, Bahçe, Yapı Market"} data={otoBahceYapiMarketKategorileri} />
                <Link  className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 ">Çok Satanlar</Link>
            </List>

        </>
    );
}

function sepetCount() {

    if(localStorage.getItem("sepet") == null) {
        localStorage.setItem("sepet",[]);
        return 0;
    }else{
        return (localStorage.getItem("sepet").length);
    }
}

export function NavbarCompanent() {
    const [openNav, setOpenNav] = React.useState(false);


    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <Navbar className="mx-auto  max-w-screen-full py-2 ">
        <div className="flex flex-col items-end">
            <div className="space-x-2">
                <Link className="text-[#999] text-[13px]">Yardım & Destek</Link>
                <Link className="text-[#999] text-[13px]">Hakkımızda</Link>
            </div>
        </div>

            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    <img src={TrendBurada} width={"200"} height={"auto"} />
                </Typography>

                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        type="email"
                        label="TrendBurada'da ara"
                        value={email}
                        onChange={onChange}
                        className="pr-20"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        color={email ? "gray" : "blue-gray"}
                        disabled={!email}
                        className="!absolute right-1 top-1 rounded"
                    >
                        <GrFormSearch size={15} />

                    </Button>
                </div>

                <div className="hidden gap-2 lg:flex">


                    <NavListHesap />
                    <Link to={"/"} className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                    >
                        <Badge content={sepetCount()}><FaCartShopping size={20}/></Badge>
                        Sepetim
                    </Link>

                        
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <div className="hidden lg:block">
                <NavList />
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div>
                        <Button className="bg-[#FF6000]" >Giriş Yap</Button>
        
                        <Button className="ml-5">Üye Ol</Button>
                    </div>  
                    <Link to={"/"} className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                    ><FaCartShopping />
                        Sepetim</Link>
            </Collapse>
        </Navbar>
    );
}