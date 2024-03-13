import { Navbar } from "../components/Navbar/Navbar.js";
import { Footer } from "../components/Footer/Footer.js";
import { Slider_header } from "../components/Slider-header/Slider-header.js";
window.customElements.define("site-navbar", Navbar);
window.customElements.define("slider-header", Slider_header);
window.customElements.define("site-footer", Footer);

let DB_slider_1 = [
  {
    id: 1,
    key: "aaa",
    name: "tst-1",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-1.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 2,
    key: "asc",
    name: "tst-2",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-2.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 3,
    name: "tst-3",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-3.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 4,
    name: "tst-4",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-10.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 5,
    name: "tst-5",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-5.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 6,
    name: "tst-6",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-6.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 7,
    name: "tst-7",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-7.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 8,
    name: "tst-8",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-8.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 9,
    name: "tst-9",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-9.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
  {
    id: 10,
    name: "tst-10",
    img: "../front-end/src/assets/imgs/slider-header/bg-div-9.jpg",
    agelimit: "15",
    totalltime: "140",
    popularity: "6.5",
    Score: "70",
    desc: "توضیحات",
    years: "2023",
    stars: "بازیگزان",
    Director: "کارگردان تست",
    Grouping: "دسته بندی",
  },
];

// create slide
let cerateSlider = (ShowDataElem, wrapper1) => {
  DB_slider_1.map((item) => {
    let swiper_slide = document.createElement("div");
    swiper_slide.classList.add("swiper-slide");
    swiper_slide.addEventListener("click", (e) => {
      let lineSlides = document.querySelectorAll(".borders");
      let swiper_slides = document.querySelectorAll(".swiper-slide");
      swiper_slide.id = item.id;
      Show_close_lineSlide(lineSlides, swiper_slides);
      // e.target.parentElement.parentElement.parentElement.parentElement.
      swiper_slide.style.transform = " translateY(20px) ";
      slide_div.style.display = slide_div ? "block" : "none";
      ShowDataSlider(item.id, ShowDataElem);
    });
    let slide_img = document.createElement("img");
    let slide_name = document.createElement("p");
    slide_name.classList.add("name");
    let slide_div = document.createElement("div");
    slide_div.classList.add("borders");
    slide_div.style.display = " none";
    slide_img.src = item.img;
    slide_name.innerText = item.name;
    swiper_slide.append(slide_img, slide_name, slide_div);
    wrapper1.append(swiper_slide);
  }).join("");
};

// show data
let ShowDataSlider = (IdSlide, ShowDataElem) => {
  let item = DB_slider_1.find((item) => {
    return item.id == IdSlide;
  });
  ShowDataElem.style.display = "block";
  ShowDataElem.innerHTML = "";
  ShowDataElem.insertAdjacentHTML(
    "beforeend",
    `
    <img src=${item.img} alt="">
        <div class="div_data_movie">
          <div class="data">
            <h2>${item.name}</h2>
            <p class="p-item">
              <span>+${item.agelimit}</span>
              <span>${item.years}</span>
              <span> دقیقه ${item.totalltime}</span>
              <span>${item.popularity} <span>icon</span></span>
              <span>${item.Score}% <span>icon</span></span>
              <span>دانلود نماوا<span>icon</span></span>
              <span>زیرنویس<span>icon</span></span>
            </p>
            <p class="p-text">${item.desc}</p>
            <p class="p">
              هم اکنون با دوبله اختصاصی نماوا
            </p>
            <div class="d-btn">
              <a class="btna1" href="#">
                توضیحات بیشتر
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                  class="Component-icon-0-1-642">
                  <g transform="matrix(-1 0 0 -1 1649.226 -336.319)" class="svg-c1">
                    <path class="svg-c1"
                      d="M1634.13-339.32a12.02 12.02 0 0 1-12.102-12.101 12.02 12.02 0 0 1 12.102-12.101 12.02 12.02 0 0 1 8.557 3.544 12.12 12.12 0 0 1 0 17.114 12.02 12.02 0 0 1-8.557 3.544zm0-23.08a10.91 10.91 0 0 0-10.98 10.98 10.91 10.91 0 0 0 10.98 10.98 10.91 10.91 0 0 0 7.764-3.216c4.28-4.29 4.28-11.238 0-15.53a10.91 10.91 0 0 0-7.764-3.215z">
                    </path>
                    <rect width="3.14" height="10.632" rx="1.57" x="1632.561" y="-359.153"></rect>
                    <rect width="3.14" height="3.14" rx="1.57" x="1632.561" y="-346.124"></rect>
                  </g>
                </svg>
              </a>
  
              <button class="btnb">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"
                  width="40" height="40" preserveAspectRatio="xMidYMid meet"
                  style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                  <defs>
                    <clipPath id="__lottie_element_135">
                      <rect width="40" height="40" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#__lottie_element_135)">
                    <g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(0,0,0,0,20.089000701904297,21)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M9.864999771118164,-2.624000072479248 C9.864999771118164,-3.5399999618530273 9.741000175476074,-4.427000045776367 9.508999824523926,-5.269999980926514 C9.277000427246094,-6.11299991607666 8.937999725341797,-6.910999774932861 8.505999565124512,-7.6479997634887695 C8.074000358581543,-8.385000228881836 7.548999786376953,-9.062000274658203 6.948999881744385,-9.661999702453613 C6.348999977111816,-10.26200008392334 5.671999931335449,-10.786999702453613 4.934999942779541,-11.218999862670898 C4.197999954223633,-11.651000022888184 3.4000000953674316,-11.989999771118164 2.556999921798706,-12.222000122070312 C1.7139999866485596,-12.454000473022461 0.8270000219345093,-12.57800006866455 -0.08900000154972076,-12.57800006866455 C-1.4630000591278076,-12.57800006866455 -2.7720000743865967,-12.300000190734863 -3.9630000591278076,-11.795999526977539 C-5.1539998054504395,-11.291999816894531 -6.22599983215332,-10.562999725341797 -7.126999855041504,-9.661999702453613 C-8.027999877929688,-8.76099967956543 -8.756999969482422,-7.689000129699707 -9.26099967956543,-6.498000144958496 C-9.765000343322754,-5.307000160217285 -10.043000221252441,-3.997999906539917 -10.043000221252441,-2.624000072479248 C-10.043000221252441,-1.25 -9.765000343322754,0.05900000035762787 -9.26099967956543,1.25 C-8.756999969482422,2.440999984741211 -8.027999877929688,3.513000011444092 -7.126999855041504,4.414000034332275 C-6.22599983215332,5.315000057220459 -5.1539998054504395,6.043000221252441 -3.9630000591278076,6.546999931335449 C-2.7720000743865967,7.051000118255615 -1.4630000591278076,7.328999996185303 -0.08900000154972076,7.328999996185303 C1.284999966621399,7.328999996185303 2.5940001010894775,7.051000118255615 3.7850000858306885,6.546999931335449 C4.97599983215332,6.043000221252441 6.047999858856201,5.315000057220459 6.948999881744385,4.414000034332275 C7.849999904632568,3.513000011444092 8.579000473022461,2.440999984741211 9.083000183105469,1.25 C9.586999893188477,0.05900000035762787 9.864999771118164,-1.25 9.864999771118164,-2.624000072479248z">
                        </path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,20.0939998626709,21)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M9.713000297546387,-9.64799976348877 C9.034000396728516,-11.965999603271484 6.9120001792907715,-13.562000274658203 4.495999813079834,-13.569999694824219 C4.495999813079834,-13.569999694824219 -1.065000057220459,-13.569999694824219 -1.065000057220459,-13.569999694824219 C-2.3329999446868896,-13.569000244140625 -3.562000036239624,-13.12600040435791 -4.5370001792907715,-12.3149995803833 C-4.5370001792907715,-12.3149995803833 -5.752999782562256,-11.305000305175781 -5.752999782562256,-11.305000305175781 C-6.671999931335449,-10.541000366210938 -7.829999923706055,-10.121999740600586 -9.026000022888184,-10.121000289916992 C-9.026000022888184,-10.121000289916992 -9.982000350952148,-10.121000289916992 -9.982000350952148,-10.121000289916992 C-11.394000053405762,-10.119000434875488 -12.538000106811523,-8.975000381469727 -12.539999961853027,-7.564000129699707 C-12.539999961853027,-7.564000129699707 -12.539999961853027,1.312000036239624 -12.539999961853027,1.312000036239624 C-12.538000106811523,2.7239999771118164 -11.394000053405762,3.868000030517578 -9.982000350952148,3.869999885559082 C-7.446000099182129,3.869999885559082 -0.6600000262260437,4.968999862670898 0.26600000262260437,9.98799991607666 C0.8799999952316284,13.310999870300293 2.9649999141693115,13.569999694824219 3.5869998931884766,13.569999694824219 C3.750999927520752,13.569999694824219 3.9149999618530273,13.555000305175781 4.077000141143799,13.527000427246094 C5.8429999351501465,13.17300033569336 7,11.468999862670898 6.676000118255615,9.697999954223633 C6.676000118255615,9.697999954223633 5.644999980926514,3.869999885559082 5.644999980926514,3.869999885559082 C5.644999980926514,3.869999885559082 8.473999977111816,3.869999885559082 8.473999977111816,3.869999885559082 C9.694000244140625,3.875 10.843999862670898,3.302000045776367 11.574000358581543,2.3239998817443848 C12.309000015258789,1.3530000448226929 12.539999961853027,0.09099999815225601 12.199000358581543,-1.0770000219345093 C12.199000358581543,-1.0770000219345093 9.713000297546387,-9.64799976348877 9.713000297546387,-9.64799976348877z M10.267999649047852,1.3519999980926514 C9.845000267028809,1.9210000038146973 9.175999641418457,2.255000114440918 8.467000007629395,2.252000093460083 C8.467000007629395,2.252000093460083 3.700000047683716,2.252000093460083 3.700000047683716,2.252000093460083 C3.700000047683716,2.252000093460083 5.068999767303467,9.982000350952148 5.068999767303467,9.982000350952148 C5.248000144958496,10.871999740600586 4.679999828338623,11.741000175476074 3.7929999828338623,11.932999610900879 C2.881999969482422,12.092000007629395 2.1480000019073486,11.232999801635742 1.8630000352859497,9.701000213623047 C1.3630000352859497,7 -0.5099999904632568,4.881999969482422 -3.559999942779541,3.5789999961853027 C-5.599999904632568,2.740999937057495 -7.7779998779296875,2.2899999618530273 -9.982999801635742,2.250999927520752 C-10.498000144958496,2.25 -10.913999557495117,1.8329999446868896 -10.914999961853027,1.3200000524520874 C-10.914999961853027,1.3200000524520874 -10.914999961853027,-7.557000160217285 -10.914999961853027,-7.557000160217285 C-10.913999557495117,-8.071000099182129 -10.496999740600586,-8.487000465393066 -9.982999801635742,-8.48799991607666 C-9.982999801635742,-8.48799991607666 -9.027000427246094,-8.48799991607666 -9.027000427246094,-8.48799991607666 C-7.452000141143799,-8.48900032043457 -5.926000118255615,-9.041000366210938 -4.714000225067139,-10.04800033569336 C-4.714000225067139,-10.04800033569336 -3.5,-11.059000015258789 -3.5,-11.059000015258789 C-2.815000057220459,-11.626999855041504 -1.9550000429153442,-11.937999725341797 -1.065000057220459,-11.939000129699707 C-1.065000057220459,-11.939000129699707 4.491000175476074,-11.939000129699707 4.491000175476074,-11.939000129699707 C6.183000087738037,-11.932999610900879 7.670000076293945,-10.8149995803833 8.147000312805176,-9.1899995803833 C8.147000312805176,-9.1899995803833 10.625,-0.6209999918937683 10.625,-0.6209999918937683 C10.824999809265137,0.054999999701976776 10.692000389099121,0.7850000262260437 10.269000053405762,1.347000002861023 C10.269000053405762,1.347000002861023 10.267999649047852,1.3519999980926514 10.267999649047852,1.3519999980926514z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
  
              <button class="btnb">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"
                  width="40" height="40" preserveAspectRatio="xMidYMid meet"
                  style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                  <defs>
                    <clipPath id="__lottie_element_130">
                      <rect width="40" height="40" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#__lottie_element_130)">
                    <g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;">
                      <g opacity="1" transform="matrix(0,0,0,0,19.910999298095703,19.000999450683594)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M-10.095999717712402,2.884000062942505 C-10.095999717712402,3.799999952316284 -9.972000122070312,4.686999797821045 -9.739999771118164,5.53000020980835 C-9.508000373840332,6.373000144958496 -9.168999671936035,7.171000003814697 -8.737000465393066,7.9079999923706055 C-8.305000305175781,8.645000457763672 -7.781000137329102,9.321999549865723 -7.181000232696533,9.92199993133545 C-6.580999851226807,10.522000312805176 -5.9039998054504395,11.04699993133545 -5.166999816894531,11.479000091552734 C-4.429999828338623,11.91100025177002 -3.631999969482422,12.25 -2.7890000343322754,12.482000350952148 C-1.9459999799728394,12.71399974822998 -1.059000015258789,12.838000297546387 -0.14300000667572021,12.838000297546387 C1.2309999465942383,12.838000297546387 2.5399999618530273,12.5600004196167 3.7309999465942383,12.055999755859375 C4.921999931335449,11.552000045776367 5.99399995803833,10.822999954223633 6.894999980926514,9.92199993133545 C7.796000003814697,9.020999908447266 8.524999618530273,7.948999881744385 9.029000282287598,6.757999897003174 C9.532999992370605,5.566999912261963 9.810999870300293,4.257999897003174 9.810999870300293,2.884000062942505 C9.810999870300293,1.5099999904632568 9.532999992370605,0.20100000500679016 9.029000282287598,-0.9900000095367432 C8.524999618530273,-2.180999994277954 7.796000003814697,-3.253000020980835 6.894999980926514,-4.1539998054504395 C5.99399995803833,-5.054999828338623 4.921999931335449,-5.783999919891357 3.7309999465942383,-6.288000106811523 C2.5399999618530273,-6.791999816894531 1.2309999465942383,-7.070000171661377 -0.14300000667572021,-7.070000171661377 C-1.5169999599456787,-7.070000171661377 -2.8259999752044678,-6.791999816894531 -4.017000198364258,-6.288000106811523 C-5.208000183105469,-5.783999919891357 -6.28000020980835,-5.054999828338623 -7.181000232696533,-4.1539998054504395 C-8.081999778747559,-3.253000020980835 -8.8100004196167,-2.180999994277954 -9.314000129699707,-0.9900000095367432 C-9.817999839782715,0.20100000500679016 -10.095999717712402,1.5099999904632568 -10.095999717712402,2.884000062942505z">
                        </path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,19.905000686645508,19.000999450683594)">
                        <path fill="rgb(255,255,255)" fill-opacity="1"
                          d=" M-9.713000297546387,9.64799976348877 C-9.034000396728516,11.965999603271484 -6.910999774932861,13.562000274658203 -4.494999885559082,13.569999694824219 C-4.494999885559082,13.569999694824219 1.065000057220459,13.569999694824219 1.065000057220459,13.569999694824219 C2.3329999446868896,13.569000244140625 3.562999963760376,13.125 4.538000106811523,12.314000129699707 C4.538000106811523,12.314000129699707 5.752999782562256,11.305000305175781 5.752999782562256,11.305000305175781 C6.672999858856201,10.541000366210938 7.830999851226807,10.121000289916992 9.026000022888184,10.119999885559082 C9.026000022888184,10.119999885559082 9.982999801635742,10.119999885559082 9.982999801635742,10.119999885559082 C11.395000457763672,10.118000030517578 12.538000106811523,8.97599983215332 12.539999961853027,7.564000129699707 C12.539999961853027,7.564000129699707 12.539999961853027,-1.312000036239624 12.539999961853027,-1.312000036239624 C12.538000106811523,-2.7239999771118164 11.395000457763672,-3.86899995803833 9.982999801635742,-3.869999885559082 C7.447000026702881,-3.869999885559082 0.6610000133514404,-4.96999979019165 -0.26499998569488525,-9.98799991607666 C-0.8790000081062317,-13.312000274658203 -2.9649999141693115,-13.569999694824219 -3.5869998931884766,-13.569999694824219 C-3.750999927520752,-13.569999694824219 -3.9140000343322754,-13.555999755859375 -4.076000213623047,-13.527000427246094 C-5.8429999351501465,-13.173999786376953 -7,-11.468999862670898 -6.676000118255615,-9.696999549865723 C-6.676000118255615,-9.696999549865723 -5.644000053405762,-3.869999885559082 -5.644000053405762,-3.869999885559082 C-5.644000053405762,-3.869999885559082 -8.472999572753906,-3.869999885559082 -8.472999572753906,-3.869999885559082 C-9.692999839782715,-3.875999927520752 -10.843999862670898,-3.302999973297119 -11.572999954223633,-2.3239998817443848 C-12.309000015258789,-1.3539999723434448 -12.539999961853027,-0.09099999815225601 -12.197999954223633,1.0770000219345093 C-12.197999954223633,1.0770000219345093 -9.713000297546387,9.64799976348877 -9.713000297546387,9.64799976348877z M-10.267000198364258,-1.3530000448226929 C-9.843999862670898,-1.9220000505447388 -9.175999641418457,-2.25600004196167 -8.467000007629395,-2.253000020980835 C-8.467000007629395,-2.253000020980835 -3.6989998817443848,-2.253000020980835 -3.6989998817443848,-2.253000020980835 C-3.6989998817443848,-2.253000020980835 -5.067999839782715,-9.982000350952148 -5.067999839782715,-9.982000350952148 C-5.248000144958496,-10.871999740600586 -4.679999828338623,-11.741999626159668 -3.7929999828338623,-11.934000015258789 C-2.881999969482422,-12.093000411987305 -2.1470000743865967,-11.234000205993652 -1.8619999885559082,-9.701000213623047 C-1.3619999885559082,-7.000999927520752 0.5109999775886536,-4.882999897003174 3.559999942779541,-3.5789999961853027 C5.60099983215332,-2.742000102996826 7.7779998779296875,-2.2899999618530273 9.982999801635742,-2.250999927520752 C10.498000144958496,-2.25 10.913999557495117,-1.8339999914169312 10.914999961853027,-1.3200000524520874 C10.914999961853027,-1.3200000524520874 10.914999961853027,7.557000160217285 10.914999961853027,7.557000160217285 C10.913999557495117,8.071000099182129 10.498000144958496,8.487000465393066 9.982999801635742,8.48799991607666 C9.982999801635742,8.48799991607666 9.027000427246094,8.48799991607666 9.027000427246094,8.48799991607666 C7.452000141143799,8.48900032043457 5.927000045776367,9.041000366210938 4.715000152587891,10.04800033569336 C4.715000152587891,10.04800033569336 3.5,11.059000015258789 3.5,11.059000015258789 C2.815999984741211,11.626999855041504 1.9550000429153442,11.939000129699707 1.065999984741211,11.939000129699707 C1.065999984741211,11.939000129699707 -4.489999771118164,11.939000129699707 -4.489999771118164,11.939000129699707 C-6.183000087738037,11.932999610900879 -7.670000076293945,10.814000129699707 -8.145999908447266,9.189000129699707 C-8.145999908447266,9.189000129699707 -10.625,0.6200000047683716 -10.625,0.6200000047683716 C-10.824000358581543,-0.0560000017285347 -10.690999984741211,-0.7850000262260437 -10.267999649047852,-1.3480000495910645 C-10.267999649047852,-1.3480000495910645 -10.267000198364258,-1.3530000448226929 -10.267000198364258,-1.3530000448226929z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
  
              <button class="btnb">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40"
                  class="Component-icon-0-1-642">
                  <path class="svg-c1"
                    d="M31.56 18.64H21.4V8.48a1.4 1.4 0 0 0-2.39-.99 1.4 1.4 0 0 0-.41.99v10.16H8.44a1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4H18.6V31.6a1.4 1.4 0 0 0 1.4 1.4 1.4 1.4 0 0 0 1.4-1.4V21.44h10.16a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4z">
                  </path>
                </svg>
              </button>
  
              <a class="btna" href="#">
                خرید اشنراک
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                  class="Component-icon-0-1-642">
                  <path
                    d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z">
                  </path>
                </svg>
              </a>
            </div>
  
            <p class="p">
              ستارگان:${item.stars}
            </p>
            <p class="p">
              کارگردان:${item.Director}
            </p>
            <p class="p">
              دسته بندی : ${item.Grouping}
            </p>
  
          </div>
    `
  );
};

// line bottom slider
let Show_close_lineSlide = (lines, divs) => {
  lines.forEach((item) => {
    item.style.display = "none";
  });
  divs.forEach((item) => {
    item.style.transform = "translateY(0)";
  });
};

// swiper slider all
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      501: {
        slidesPerView: 2,
        slidesPerGroup: 5,
      },
      768: {
        slidesPerView: 6,
        slidesPerGroup: 600,
      },
      998: {
        slidesPerView: 5,
        slidesPerGroup: 1300,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 2600,
      },
      1488: {
        slidesPerView: 2,
        slidesPerGroup: 5,
      },
    },
  });
})


// Slider-1
const ShowDataElem1 = document.querySelector(".Show_data_movie1");
const wrapper1 = document.querySelector(".wrapper1");
cerateSlider(ShowDataElem1, wrapper1);
// Slider-2
const ShowDataElem2 = document.querySelector(".Show_data_movie2");
const wrapper2 = document.querySelector(".wrapper2");
cerateSlider(ShowDataElem2, wrapper2);
// // Slider-3
const ShowDataElem3 = document.querySelector(".Show_data_movie3");
const wrapper3 = document.querySelector(".wrapper3");
cerateSlider(ShowDataElem3, wrapper3);
// // Slider-4
const ShowDataElem4 = document.querySelector(".Show_data_movie4");
const wrapper4 = document.querySelector(".wrapper4");
cerateSlider(ShowDataElem4, wrapper4);
// // Slider-5
const ShowDataEle5 = document.querySelector(".Show_data_movie5");
const wrapper5 = document.querySelector(".wrapper5");
cerateSlider(ShowDataEle5, wrapper5);
// // Slider-6
const ShowDataEle6 = document.querySelector(".Show_data_movie6");
const wrapper6 = document.querySelector(".wrapper6");
cerateSlider(ShowDataEle6, wrapper6);
// // Slider-7
const ShowDataEle7 = document.querySelector(".Show_data_movie7");
const wrapper7 = document.querySelector(".wrapper7");
cerateSlider(ShowDataEle7, wrapper7);
// // Slider-8
const ShowDataEle8 = document.querySelector(".Show_data_movie8");
const wrapper8 = document.querySelector(".wrapper8");
cerateSlider(ShowDataEle8, wrapper8);
// // Slider-9
const ShowDataEle9 = document.querySelector(".Show_data_movie9");
const wrapper9 = document.querySelector(".wrapper9");
cerateSlider(ShowDataEle9, wrapper9);
// // Slider-10
const ShowDataEle10 = document.querySelector(".Show_data_movie10");
const wrapper10 = document.querySelector(".wrapper10");
cerateSlider(ShowDataEle10, wrapper10);
