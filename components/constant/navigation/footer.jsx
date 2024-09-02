import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/logo-grey-1.png'
import BottomFooter from './bottomfooter';

export default function FooterSection () {
    return(
        <>
            <div className='w-full bg-zinc-700 text-white'>
                <div className='xl:w-9/12 lg:w-9/12 w-10/12 mx-auto xl:px-0'>
                    <div className='xl:flex xl:justify-between py-12 xl:flex-row flex-col space-y-8 xl:space-y-0'>
                        <div className='flex flex-col space-y-4 '>
                            <div>
                                <Image src={Logo} alt='Logo' width={300} height={50}/>
                            </div>
                            <div>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                                <h1> Cumque atque vitae velit libero delectus eius, labore tempora.</h1>
                            </div>
                            <div className='xl:grid xl:grid-cols-2 xl:gap-4 pt-8'>
                            <div className='capitalize'> <p> <span className='text-yellow-400'>1.</span> choose your favourite cause </p> </div>
                            <div className='capitalize'> <p> <span className='text-red-500'>2.</span> register to our website ! </p> </div>
                            <div className='capitalize'> <p> <span className='text-blue-500'>3.</span> donate the amount you like </p> </div>
                            <div className='capitalize'> <p> <span className='text-teal-400'>4.</span> stay tuned about cause </p> </div>
                            </div>

                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='uppercase text-left text-xl font-semibold'> <h1> our partners </h1> </div>
                            <div className=' grid grid-cols-2 xl:flex xl:space-y-0 xl:space-x-4 space-y-2 pb-8'>
                                <div>
                                    <Link href='#'>
                                        <a>
                                    <span> 
                                        <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.4688 17.2695C16.4688 20.0898 15.6641 22.25 14.0547 23.75C12.4531 25.25 10.1367 26 7.10547 26H2.25391V8.86719H7.63281C10.4297 8.86719 12.6016 9.60547 14.1484 11.082C15.6953 12.5586 16.4688 14.6211 16.4688 17.2695ZM12.6953 17.3633C12.6953 13.6836 11.0703 11.8438 7.82031 11.8438H5.88672V23H7.44531C10.9453 23 12.6953 21.1211 12.6953 17.3633Z" fill="black"/>
                                            <path d="M33.9648 8.86719V19.9531C33.9648 21.2188 33.6797 22.3281 33.1094 23.2812C32.5469 24.2344 31.7305 24.9648 30.6602 25.4727C29.5898 25.9805 28.3242 26.2344 26.8633 26.2344C24.6602 26.2344 22.9492 25.6719 21.7305 24.5469C20.5117 23.4141 19.9023 21.8672 19.9023 19.9062V8.86719H23.5234V19.3555C23.5234 20.6758 23.7891 21.6445 24.3203 22.2617C24.8516 22.8789 25.7305 23.1875 26.957 23.1875C28.1445 23.1875 29.0039 22.8789 29.5352 22.2617C30.0742 21.6367 30.3438 20.6602 30.3438 19.332V8.86719H33.9648Z" fill="#B71919"/>
                                            <path d="M44.7695 26H41.1367V11.8906H36.4844V8.86719H49.4219V11.8906H44.7695V26Z" fill="#027C56"/>
                                        </svg>    
                                    </span> 
                                    </a>
                                    </Link>
                                </div>

                                <div> 
                                    <Link href='#'>
                                        <a>
                                    <span>
                                    <svg width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.4688 17.2695C24.4688 20.0898 23.6641 22.25 22.0547 23.75C20.4531 25.25 18.1367 26 15.1055 26H10.2539V8.86719H15.6328C18.4297 8.86719 20.6016 9.60547 22.1484 11.082C23.6953 12.5586 24.4688 14.6211 24.4688 17.2695ZM20.6953 17.3633C20.6953 13.6836 19.0703 11.8438 15.8203 11.8438H13.8867V23H15.4453C18.9453 23 20.6953 21.1211 20.6953 17.3633ZM16.6641 34.8223C15.9805 34.8223 15.4512 35.0801 15.0762 35.5957C14.7012 36.1074 14.5137 36.8223 14.5137 37.7402C14.5137 39.6504 15.2305 40.6055 16.6641 40.6055C17.2656 40.6055 17.9941 40.4551 18.8496 40.1543V41.6777C18.1465 41.9707 17.3613 42.1172 16.4941 42.1172C15.248 42.1172 14.2949 41.7402 13.6348 40.9863C12.9746 40.2285 12.6445 39.1426 12.6445 37.7285C12.6445 36.8379 12.8066 36.0586 13.1309 35.3906C13.4551 34.7188 13.9199 34.2051 14.5254 33.8496C15.1348 33.4902 15.8477 33.3105 16.6641 33.3105C17.4961 33.3105 18.332 33.5117 19.1719 33.9141L18.5859 35.3906C18.2656 35.2383 17.9434 35.1055 17.6191 34.9922C17.2949 34.8789 16.9766 34.8223 16.6641 34.8223ZM22.4941 37.2363H23.0801C23.6543 37.2363 24.0781 37.1406 24.3516 36.9492C24.625 36.7578 24.7617 36.457 24.7617 36.0469C24.7617 35.6406 24.6211 35.3516 24.3398 35.1797C24.0625 35.0078 23.6309 34.9219 23.0449 34.9219H22.4941V37.2363ZM22.4941 38.7129V42H20.6777V33.4336H23.1738C24.3379 33.4336 25.1992 33.6465 25.7578 34.0723C26.3164 34.4941 26.5957 35.1367 26.5957 36C26.5957 36.5039 26.457 36.9531 26.1797 37.3477C25.9023 37.7383 25.5098 38.0449 25.002 38.2676C26.291 40.1934 27.1309 41.4375 27.5215 42H25.5059L23.4609 38.7129H22.4941ZM33.5332 42H28.5996V33.4336H33.5332V34.9219H30.416V36.8027H33.3164V38.291H30.416V40.5H33.5332V42ZM42.4336 37.6348C42.4336 39.0449 42.0312 40.125 41.2266 40.875C40.4258 41.625 39.2676 42 37.752 42H35.3262V33.4336H38.0156C39.4141 33.4336 40.5 33.8027 41.2734 34.541C42.0469 35.2793 42.4336 36.3105 42.4336 37.6348ZM40.5469 37.6816C40.5469 35.8418 39.7344 34.9219 38.1094 34.9219H37.1426V40.5H37.9219C39.6719 40.5 40.5469 39.5605 40.5469 37.6816ZM44.209 42V33.4336H46.0254V42H44.209ZM51.4863 42H49.6699V34.9453H47.3438V33.4336H53.8125V34.9453H51.4863V42Z" fill="black"/>
                                        <path d="M41.9648 8.86719V19.9531C41.9648 21.2188 41.6797 22.3281 41.1094 23.2812C40.5469 24.2344 39.7305 24.9648 38.6602 25.4727C37.5898 25.9805 36.3242 26.2344 34.8633 26.2344C32.6602 26.2344 30.9492 25.6719 29.7305 24.5469C28.5117 23.4141 27.9023 21.8672 27.9023 19.9062V8.86719H31.5234V19.3555C31.5234 20.6758 31.7891 21.6445 32.3203 22.2617C32.8516 22.8789 33.7305 23.1875 34.957 23.1875C36.1445 23.1875 37.0039 22.8789 37.5352 22.2617C38.0742 21.6367 38.3438 20.6602 38.3438 19.332V8.86719H41.9648Z" fill="#B71919"/>
                                        <path d="M52.7695 26H49.1367V11.8906H44.4844V8.86719H57.4219V11.8906H52.7695V26Z" fill="#027C56"/>
                                    </svg>
                                    </span>
                                    </a>
                                    </Link>    
                                </div>

                                <div>
                                    <Link href='#'>
                                        <a>
                                    <span>
                                    <svg className="h-12 w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 27H31V35H33V27Z" fill="#0BE3A0"/>
                                        <path d="M20.5357 10.1215L19.1215 11.5357L24.7783 17.1925L26.1925 15.7783L20.5357 10.1215Z" fill="#0BE3A0"/>
                                        <path d="M42.9493 10.1215L37.2925 15.7783L38.7067 17.1925L44.3635 11.5357L42.9493 10.1215Z" fill="#0BE3A0"/>
                                        <path d="M20 49H18V55H20V49Z" fill="#0BE3A0"/>
                                        <path d="M20 36H18V42H20V36Z" fill="#0BE3A0"/>
                                        <path d="M15 44H8V46H15V44Z" fill="#0BE3A0"/>
                                        <path d="M46 36H44V42H46V36Z" fill="#0BE3A0"/>
                                        <path d="M46 49H44V55H46V49Z" fill="#0BE3A0"/>
                                        <path d="M56 45H49V47H56V45Z" fill="#0BE3A0"/>
                                        <path d="M32 28C30.4178 28 28.871 27.5308 27.5554 26.6518C26.2398 25.7727 25.2145 24.5233 24.609 23.0615C24.0035 21.5997 23.845 19.9911 24.1537 18.4393C24.4624 16.8874 25.2243 15.462 26.3431 14.3431C27.462 13.2243 28.8874 12.4624 30.4393 12.1537C31.9911 11.845 33.5997 12.0035 35.0615 12.609C36.5233 13.2145 37.7727 14.2398 38.6518 15.5554C39.5308 16.871 40 18.4177 40 20C39.9976 22.121 39.154 24.1544 37.6542 25.6542C36.1544 27.154 34.121 27.9976 32 28ZM19 50C18.0111 50 17.0444 49.7068 16.2222 49.1573C15.3999 48.6079 14.759 47.827 14.3806 46.9134C14.0022 45.9998 13.9031 44.9945 14.0961 44.0245C14.289 43.0546 14.7652 42.1637 15.4645 41.4645C16.1637 40.7652 17.0546 40.289 18.0245 40.0961C18.9945 39.9031 19.9998 40.0022 20.9134 40.3806C21.8271 40.759 22.6079 41.3999 23.1574 42.2221C23.7068 43.0444 24 44.0111 24 45C23.9984 46.3256 23.4711 47.5964 22.5338 48.5338C21.5964 49.4711 20.3256 49.9984 19 50V50ZM19 62C18.2089 62 17.4355 61.7654 16.7777 61.3259C16.1199 60.8864 15.6072 60.2616 15.3045 59.5307C15.0017 58.7998 14.9225 57.9956 15.0769 57.2196C15.2312 56.4437 15.6122 55.731 16.1716 55.1716C16.731 54.6122 17.4437 54.2312 18.2196 54.0769C18.9956 53.9225 19.7998 54.0017 20.5307 54.3045C21.2616 54.6072 21.8864 55.1199 22.3259 55.7777C22.7654 56.4355 23 57.2089 23 58C23 59.0609 22.5786 60.0783 21.8284 60.8284C21.0783 61.5786 20.0609 62 19 62ZM32 45C30.8133 45 29.6533 44.6481 28.6666 43.9888C27.6799 43.3295 26.9108 42.3925 26.4567 41.2961C26.0026 40.1997 25.8838 38.9933 26.1153 37.8295C26.3468 36.6656 26.9182 35.5965 27.7574 34.7574C28.5965 33.9182 29.6656 33.3468 30.8295 33.1153C31.9933 32.8838 33.1997 33.0026 34.2961 33.4567C35.3925 33.9108 36.3295 34.6799 36.9888 35.6666C37.6481 36.6533 38 37.8133 38 39C37.9984 40.5908 37.3658 42.116 36.2409 43.2409C35.116 44.3658 33.5908 44.9984 32 45ZM17 14C15.6119 13.9998 14.2668 13.5184 13.1938 12.6376C12.1209 11.7569 11.3865 10.5314 11.1159 9.16989C10.8452 7.80841 11.055 6.3952 11.7095 5.17105C12.364 3.94691 13.4227 2.98757 14.7052 2.45649C15.9877 1.92541 17.4147 1.85545 18.743 2.25853C20.0713 2.66161 21.2188 3.51279 21.9898 4.66704C22.7609 5.8213 23.108 7.20721 22.9718 8.58863C22.8356 9.97006 22.2246 11.2615 21.243 12.243C20.687 12.8018 20.0257 13.2448 19.2974 13.5463C18.5691 13.8479 17.7883 14.0021 17 14V14ZM46.485 14C45.0969 13.9998 43.7518 13.5184 42.6788 12.6376C41.6059 11.7569 40.8715 10.5314 40.6009 9.16989C40.3302 7.80841 40.54 6.3952 41.1945 5.17105C41.849 3.94691 42.9077 2.98757 44.1902 2.45649C45.4727 1.92541 46.8997 1.85545 48.228 2.25853C49.5563 2.66161 50.7038 3.51279 51.4748 4.66704C52.2459 5.8213 52.593 7.20721 52.4568 8.58863C52.3206 9.97006 51.7096 11.2615 50.728 12.243C50.1721 12.8019 49.5108 13.2449 48.7825 13.5465C48.0542 13.8481 47.2733 14.0022 46.485 14V14ZM19 37C18.2089 37 17.4355 36.7654 16.7777 36.3259C16.1199 35.8864 15.6072 35.2616 15.3045 34.5307C15.0017 33.7998 14.9225 32.9956 15.0769 32.2196C15.2312 31.4437 15.6122 30.731 16.1716 30.1716C16.731 29.6122 17.4437 29.2312 18.2196 29.0769C18.9956 28.9225 19.7998 29.0017 20.5307 29.3045C21.2616 29.6072 21.8864 30.1199 22.3259 30.7777C22.7654 31.4355 23 32.2089 23 33C23 34.0609 22.5786 35.0783 21.8284 35.8284C21.0783 36.5786 20.0609 37 19 37ZM6 49C5.20888 49 4.43552 48.7654 3.77772 48.3259C3.11992 47.8864 2.60723 47.2616 2.30448 46.5307C2.00173 45.7998 1.92252 44.9956 2.07686 44.2196C2.2312 43.4437 2.61216 42.731 3.17157 42.1716C3.73098 41.6122 4.44372 41.2312 5.21964 41.0769C5.99556 40.9225 6.79983 41.0017 7.53074 41.3045C8.26164 41.6072 8.88635 42.1199 9.32588 42.7777C9.76541 43.4355 10 44.2089 10 45C10 46.0609 9.57857 47.0783 8.82843 47.8284C8.07828 48.5786 7.06087 49 6 49V49ZM45 51C44.0111 51 43.0444 50.7068 42.2221 50.1573C41.3999 49.6079 40.759 48.827 40.3806 47.9134C40.0022 46.9998 39.9031 45.9945 40.0961 45.0245C40.289 44.0546 40.7652 43.1637 41.4645 42.4645C42.1637 41.7652 43.0546 41.289 44.0245 41.0961C44.9945 40.9031 45.9998 41.0022 46.9134 41.3806C47.827 41.759 48.6079 42.3999 49.1573 43.2221C49.7068 44.0444 50 45.0111 50 46C49.9984 47.3256 49.4711 48.5964 48.5338 49.5338C47.5964 50.4711 46.3256 50.9984 45 51V51ZM45 37C44.2089 37 43.4355 36.7654 42.7777 36.3259C42.1199 35.8864 41.6072 35.2616 41.3045 34.5307C41.0017 33.7998 40.9225 32.9956 41.0769 32.2196C41.2312 31.4437 41.6122 30.731 42.1716 30.1716C42.731 29.6122 43.4437 29.2312 44.2196 29.0769C44.9956 28.9225 45.7998 29.0017 46.5307 29.3045C47.2616 29.6072 47.8864 30.1199 48.3259 30.7777C48.7654 31.4355 49 32.2089 49 33C49 34.0609 48.5786 35.0783 47.8284 35.8284C47.0783 36.5786 46.0609 37 45 37ZM45 62C44.2089 62 43.4355 61.7654 42.7777 61.3259C42.1199 60.8864 41.6072 60.2616 41.3045 59.5307C41.0017 58.7998 40.9225 57.9956 41.0769 57.2196C41.2312 56.4437 41.6122 55.731 42.1716 55.1716C42.731 54.6122 43.4437 54.2312 44.2196 54.0769C44.9956 53.9225 45.7998 54.0017 46.5307 54.3045C47.2616 54.6072 47.8864 55.1199 48.3259 55.7777C48.7654 56.4355 49 57.2089 49 58C49 59.0609 48.5786 60.0783 47.8284 60.8284C47.0783 61.5786 46.0609 62 45 62ZM58 50C57.2089 50 56.4355 49.7654 55.7777 49.3259C55.1199 48.8864 54.6072 48.2616 54.3045 47.5307C54.0017 46.7998 53.9225 45.9956 54.0769 45.2196C54.2312 44.4437 54.6122 43.731 55.1716 43.1716C55.731 42.6122 56.4437 42.2312 57.2196 42.0769C57.9956 41.9225 58.7998 42.0017 59.5307 42.3045C60.2616 42.6072 60.8864 43.1199 61.3259 43.7777C61.7654 44.4355 62 45.2089 62 46C62 47.0609 61.5786 48.0783 60.8284 48.8284C60.0783 49.5786 59.0609 50 58 50Z" fill="#027C56"/>
                                    </svg>
                                    </span>
                                    </a>
                                    </Link>
                                </div>
                                
                                <div className='text-2xl font-bold text-teal-400 hover:cursor-pointer'> LOGO </div> 
                                <div className='text-2xl font-bold text-red-500 hover:cursor-pointer'> LOGO </div>
                            </div>
                            <div className='uppercase text-xl font-semibold'> <h1> newsletter </h1> </div>
                            <div>
                            <form className='xl:flex xl:flex-row flex flex-col xl:space-y-0 space-y-4' action="/#">
                                <input type="email" id="email" name="email" placeholder="Email Here..." className="bg-transparent border-solid border-2 white text-center py-2 px-8 rounded-md focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 transition ease-in-out duration-200"/>
                                <span className=" ml-4  text-white text-center text-md bg-teal-400 capitalize px-10 py-3 rounded-full hover:cursor-pointer"> <input type="submit" value='SUBSCRIBE'/>  </span>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <BottomFooter/>
        </>
    )
}