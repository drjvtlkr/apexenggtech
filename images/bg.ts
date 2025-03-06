import milkLogo from "@/images/milkOfLimeTank.jpg"
import evapoLogo from "@/images/evapourators.jpg"
import ffeEvapoLogo from "@/images/ffeEvaporator.jpg"
import sugarLogo from "@/images/sugarPlantBanner9.jpg"
import uhvjLogo from "@/images/uhvj.jpg"
import boilerLogo from "@/images/boiler-banner1.jpg"
import boiler1Logo from "@/images/boiler-banner4.jpg"
import boiler2Logo from "@/images/boiler-banner5.jpg"
import boiler3Logo from "@/images/boiler-banner7.jpg"
import epcBanerLogo from "@/images/epc_baner.jpg"
import epcBannerLogo from "@/images/epc_banner.jpg"
import epcBanner2Logo from "@/images/epc_banner2.jpg"
import epcBanner3Logo from "@/images/epc_banner3.jpg"
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
    // {src: boilerLogo , alt:""},
    {src: boiler1Logo, alt:""},
    {src: boiler2Logo, alt:""},
    // {src: boiler3Logo, alt:""},
    // {src: epcBanerLogo, alt:""},
    {src: epcBannerLogo, alt:""},
    // {src: epcBanner2Logo, alt:""},
    // {src: epcBanner3Logo, alt:""},
    // {src: evapoLogo, alt:""},


]

export const millHouseImages: CustomImage[]=[
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},
    {src: caneImg, alt:"Cane Loader"},

]