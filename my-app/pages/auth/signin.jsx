import Header from '@/app/components/Header';
import './globals.css';
import { getProviders, signIn } from 'next-auth/react';
export default function signin({ providers }) {
    return (
        <div className="">
            {/* <Header /> */}
            <div className="flex items-center justify-center mt-20 space-x-7">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgPH9dF8y-wBc87ypQFbaRXBfSHuRK9RUng&usqp=CAU"
                    className="hidden object-cover rotate-6 md:inline-flex md:w-48 "
                />
                <div className="static">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name} className="flex flex-col items-center">
                            <img
                                fill
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                className="object-cover w-32"
                            ></img>
                            <p className="my-10 text-sm italic text-center">This app is created for learning purpose</p>
                            <button
                                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                                className="p-3 text-white bg-red-400 rounded-lg hover:bg-red-500"
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
