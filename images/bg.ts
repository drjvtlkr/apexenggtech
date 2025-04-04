import milkLogo from "@/images/milkOfLimeTank.jpg"
import evapoLogo from "@/images/evapourators.jpg"
import ffeEvapoLogo from "@/images/ffeEvaporator.jpg"
import sugarLogo from "@/images/sugarPlantBanner9.jpg"
import uhvjLogo from "@/images/uhvj.jpg"
import boilerLogo from "@/images/boiler-banner1.jpg"
import boiler1Logo from "@/images/boiler-banner4.jpg"
import boiler2Logo from "@/images/boiler-banner5.jpg"
import boiler3Logo from "@/images/boiler-banner7.jpg"
import evapoImg from "@/images/evapourators.jpg"
import epcBannerLogo from "@/images/epc_banner.jpg"
import calImg from "@/images/calandriaEvap.jpg"
import bioAsh from "@/images/bioAshHandling.jpg"
import caneImg from  "@/images/Cane unloader .jpg"


export interface CustomImage{
    src: any,
    alt:string;
}

export const images: CustomImage[]=[
    {src: milkLogo, alt:"milk of lime tank"},
    {src: evapoLogo, alt:"Evaporator"},
    {src: ffeEvapoLogo, alt:"Evaporator"},
    {src: sugarLogo, alt:"Evaporator"},
    {src: uhvjLogo, alt:"Evaporator"},
]

export const aboutImages:CustomImage[]=[
    {src: boiler1Logo, alt:""},
    {src: boiler2Logo, alt:""},
    {src: epcBannerLogo, alt:""},
]

export const productsImages: CustomImage[]=[
    {src: caneImg, alt:"Cane Loader"},
    {src: bioAsh, alt:"Bio Ash handling"},
    {src: calImg, alt:"Calandria"},
    {src: evapoImg, alt:"Evaporators"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},
    // {src: caneImg, alt:"Cane Loader"},

]