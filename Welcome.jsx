'use client';
import { useRouter } from 'next/navigation';
import { Afacad , Poppins} from 'next/font/google'
import Image from 'next/image';
import lock_img from './assets/lock_img.png'
 
const afacad = Afacad({
  subsets: ['latin'],
})

const poppins = Poppins({
    weight: '600',
    subsets: ['latin']
})


function Welcome(props){
    const router = useRouter()


    return(
       <section id="welcome" className={`${props.height} bg-black flex items-center justify-center text-[2rem] font-[bold] relative bg-cover bg-center`}>
                <span className={`${afacad.className} text-white text-5xl  font-semibold px-1 absolute left-16 top-28 overflow-hidden`}>CYS</span>
                <span className={`${afacad.className} text-blue-600 text-5xl font-bold  absolute left-36 top-28 overflow-hidden`}>COM</span>
                <span className={`${poppins.className} ${props.hidden} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 absolute top-48 left-16 text-5xl`}>Think before you</span>
                <span className={`${poppins.className} ${props.hidden} cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 absolute top-64 left-16 text-5xl hover:text-red-500`} onClick={() => router.push('/login')}>click.</span>
                <Image src={lock_img} width={500} height={500} className='absolute left-1/2'></Image>
                {props.userInfo}
        </section>
    )
}

export default Welcome