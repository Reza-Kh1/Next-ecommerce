"use client"
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, useDisclosure } from '@nextui-org/react'
import React, { useEffect } from 'react'
import ImageCustom from '../ImageCustom/ImageCustom';
import { HiMenuAlt3 } from 'react-icons/hi';
import Navlink from '../Navlink/Navlink';
import { Button } from '@heroui/button';
import { usePathname } from 'next/navigation';
const linkMenu = [
    {
        name: "Home",
        url: "/"
    }, {
        name: "Services",
        url: "/services"
    }, {
        name: "Projects",
        url: "/projects"
    }, {
        name: "Scripts Hub",
        url: "/scripts-hub"
    }, {
        name: "About Us",
        url: "/about-us"
    }, {
        name: "Contact Us",
        url: "/contact-us"
    }, {
        name: "Careers",
        url: "/careers"
    }, {
        name: "Blogs",
        url: "/blogs"
    },
]
export default function HeaderMobile() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const path = usePathname()
    useEffect(() => {
        if (isOpen) {
            onClose()
        }
    }, [path])
    return (
        <div className='md:hidden' dir='ltr'>
            <div className={`flex ${isOpen ? "!z-0" : "!z-[51]"} justify-between items-center pb-4 mb-4 border-b border-d-60 px-6 pt-4`}>
                <ImageCustom figureClass="w-auto" alt='logo' src={"/logo.png"} width={40} height={40} />
                <Button isIconOnly onPress={() => onOpen()} className='bg-d-80 border border-d-60 p-3 rounded-full text-white'>
                    <HiMenuAlt3 size={23} />
                </Button>
            </div>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent className='w-1/2'>
                    <DrawerHeader className="flex flex-col gap-1">
                    </DrawerHeader>
                    <DrawerBody>
                        <div className='flex items-center flex-col justify-end gap-2'>
                            {linkMenu.map((i, index) => (
                                <Navlink key={index} name={i.name} url={i.url} />
                            ))}
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div >
    )
}
