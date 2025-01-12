"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';

const Navbar = () => {
    // const user = useUser();
    // console.log(user.user?.id);
    return (
        <nav className="bg-gradient-to-t from-purple-400 to-blue-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold items-center flex">
                    <div>
                        <Image src={'/logo.png'} alt='image' width={50} height={50} />
                    </div>
                    <Link href={'/'}>
                        <div className='text-2xl cursor-pointer'>
                            Gobbledygook
                        </div>
                    </Link>
                </div>
                <div className="items-center text-xs md:text-xl flex gap-6">
                    <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    <div>
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
