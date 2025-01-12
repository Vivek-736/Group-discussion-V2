import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const topics = [
    {
        text: 'React',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BAwJnB3maWaRiZsXTXTmcwHaEK%26pid%3DApi&f=1&ipt=418bd4819f3a4f94b7bc651c85535908fa2bd7e7890eed56be3a14cc73b6ea5a&ipo=images',
        desc: 'React is a JavaScript library for building user interfaces.',
        slug: 'React',
    },
    {
        text: 'JavaScript',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RKDSdMJ5v5Hb4uflD3AoZgHaD5%26pid%3DApi&f=1&ipt=c89554bd19ce0ef2d9f6d85c0793cf6655ec4e9fa296affee93bb5ce54db5a19&ipo=images',
        desc: 'JavaScript is a versatile programming language for the web.',
        slug: 'Javascript'
    },
    {
        text: 'Node.js',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3pPJQKaUEdqQUjkWge0M3gHaEK%26pid%3DApi&f=1&ipt=bd66c89714780f15345e2e99284ae9f16c8f67b920fbc77996cef33c8a6d0075&ipo=images',
        desc: 'Node.js is a runtime for executing JavaScript on the server.',
        slug: 'Node_js'
    },
    {
        text: 'TypeScript',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7cwsgCBxqiMI9hKRj7emwAHaEK%26pid%3DApi&f=1&ipt=74c565018ba639414cb5340fa873401be6ed06aabeeb5b487aac1910b1e85980&ipo=images',
        desc: 'TypeScript is a strongly typed superset of JavaScript.',
        slug: 'TypeScript'
    },
    {
        text: 'Next.js',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PJ87QhnDB4G5r6GynPSEVwHaEO%26pid%3DApi&f=1&ipt=8905e3e566af491d26760e2f07379d94fc8639ccd9be76182bb0cafc5265a428&ipo=images',
        desc: 'Next.js is a React framework for server-rendered applications.',
        slug: 'Next_js'
    },
    {
        text: 'Tailwind CSS',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._6ooq0R60ba3UT5c-QVemAHaDm%26pid%3DApi&f=1&ipt=1cf2df40057c81cab2d44ca91162ed8d7d8ec827ac4fb1bd13408b21e3df8c9f&ipo=images',
        desc: 'Tailwind CSS is a utility-first CSS framework.',
        slug: 'TailwindCSS'
    },
    {
        text: 'MongoDB',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VmFX-LCavgdd_XNRsSARBgHaEK%26pid%3DApi&f=1&ipt=94c03e4e8ed1b9b647fcd83dec6b6d84d48ff8c3e0f8fe1d2cdb151104c39a00&ipo=images',
        desc: 'MongoDB is a NoSQL database for modern applications.',
        slug: 'MongoDB'
    },
    {
        text: 'Figma',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jYcja5Jg64PLcKLvs6fBRwHaED%26pid%3DApi&f=1&ipt=83cd9065588f68a0373b8cbbd1c269ef023879a0700362a04289e179d25d9bdc&ipo=images',
        desc: 'Figma is a collaborative interface design tool.',
        slug: 'Figma'
    },
];

const ChatPage = () => {
    return (
        <div className='container bg-blue-100 mx-auto p-8'>
            <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Tech Discussion Rooms</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className='bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                    >
                        <div className='relative h-40 bg-gray-200 flex items-center justify-center'>
                            {topic.img ? (
                                <Image
                                    src={topic.img}
                                    alt={topic.text}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gradient-to-r from-blue-500 to-violet-500 border-gray-400 border-b-[1px]"
                                />
                            ) : (
                                <span className='text-gray-500'>Image Unavailable</span>
                            )}
                        </div>
                        <div className='p-4'>
                            <h2 className='text-xl font-semibold text-gray-700'>{topic.text}</h2>
                            <p className='text-gray-600 text-sm mt-2'>{topic.desc}</p>
                        </div>
                        <div className='flex justify-center m-4'>
                            <Link href={`/chat/${topic.slug}`}>
                                <Button>
                                    Discuss now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;
