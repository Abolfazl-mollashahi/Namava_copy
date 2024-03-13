let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./src/components/Footer/Footer.css" />

<footer class="footer__container">
        <!-- part 1 -->
        <div class="footer__navbar__fixed">
          <div>اپلیکیشن ها</div>
          <div>فرست های شغلی</div>
          <div>تبلیغ در نماوا</div>
          <div>خرید اشتراک</div>
          <div>کارت هدیه</div>
          <div>
            سایر لینک ها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.393"
              height="7.627"
              viewBox="0 0 12.393 7.627"
            >
              <g
                id="chevron_up"
                transform="translate(502.703 750.774) rotate(180)"
              >
                <path
                  class="svg-c1"
                  d="M496.507,750.774a1.426,1.426,0,0,1-1.012-.419l-4.766-4.766a1.43,1.43,0,1,1,2.023-2.023l3.754,3.754,3.754-3.754a1.431,1.431,0,0,1,2.023,2.023l-4.766,4.766A1.426,1.426,0,0,1,496.507,750.774Z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <!-- part 2  -->
        <div class="footer__information">
          <div class="footer__information__logoAPP">
            <!--  -->
            <div class="footer__logo__right">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="30"
                  viewBox="0 0 47 30"
                >
                  <path
                    class="svg-c1"
                    d="M14.022 17.41l-1.5.17v-.044a2.35 2.35 0 0 1-.274.037 12.87 12.87 0 0 1-2.95.1c-.456-.048-.906-.135-1.347-.26a2.47 2.47 0 0 1-.882-.435 1.9 1.9 0 0 1-.164-.148 1.99 1.99 0 0 1-.51-.9 2.72 2.72 0 0 1-.071-.347.44.44 0 0 1 0-.089v-4.088c.001-.27.04-.54.113-.8.033-.11.074-.216.124-.318a2.08 2.08 0 0 1 .349-.507l.027-.026a1.81 1.81 0 0 1 .514-.334 6.3 6.3 0 0 1 1.626-.438c.588-.088 1.18-.14 1.774-.153h.487l1.216.05c.55.04 1.094.118 1.632.235a3.35 3.35 0 0 1 1.527.667.42.42 0 0 1 .036.033c.167.18.298.388.387.616.023.06.043.12.06.183a2.01 2.01 0 0 1 .074.542v8.435a2.19 2.19 0 0 1-.062.533 1.78 1.78 0 0 1-.763 1.064 3.6 3.6 0 0 1-1.329.5l-.127.024a12.41 12.41 0 0 1-1.417.15l-1.35.026-.3-.01c-.796-.014-1.6-.083-2.377-.206l-.212-.068a.41.41 0 0 1-.241-.477 2.26 2.26 0 0 1 .1-.376c.035-.1.086-.192.15-.275a.7.7 0 0 1 .687-.245l.38.04a31.14 31.14 0 0 0 2.479.081l.192-.005c.468-.01.934-.07 1.4-.175.17-.036.325-.122.446-.246a.49.49 0 0 0 .12-.333V17.41zm0-1.733v-4.39a.4.4 0 0 0-.026-.147c-.02-.053-.053-.1-.093-.14-.405-.228-.862-.35-1.327-.356l-.6-.047a12.45 12.45 0 0 0-1.506.015c-.486.026-.967.104-1.436.232-.1.028-.19.08-.264.15a.57.57 0 0 0-.119.163 1.51 1.51 0 0 0-.113.638v3.528c.01.085.036.168.073.245a.47.47 0 0 0 .113.147.59.59 0 0 0 .169.1.75.75 0 0 0 .084.027 1.34 1.34 0 0 0 .165.039 11.42 11.42 0 0 0 3.338-.029l.262-.033.236-.033c.035-.005.07-.005.106 0zM3.037 8.807h.8a1.21 1.21 0 0 1 .853.352l.026.027a1.2 1.2 0 0 1 .16.21 1.18 1.18 0 0 1 .17.609v11.46a.4.4 0 0 1-.406.4h-.8a1.14 1.14 0 0 1-.484-.109c-.14-.065-.266-.156-.372-.267a1.27 1.27 0 0 1-.355-.86V9.21c.008-.22.187-.396.408-.4zm15.07 0h.735c.457-.001.875.256 1.08.664.083.165.127.348.13.533v9.29c-.01.122.018.244.08.35l.005.006.008.01a.62.62 0 0 0 .252.158l.113.04.178.05.3.065.3.05.3.036.3.027.308.02.312.01h.64l.33-.01.34-.02.35-.03.36-.046.368-.066a2.64 2.64 0 0 0 .363-.1c.083-.028.16-.07.23-.122l.018-.02c.022-.02.042-.043.06-.068s.026-.04.035-.064c.02-.047.03-.097.03-.147v-4.19c.001-.08.006-.16.017-.24a1.98 1.98 0 0 1 .128-.482l.02-.042a1.88 1.88 0 0 1 .181-.314 1.94 1.94 0 0 1 .215-.256.41.41 0 0 1 .038-.033 1.62 1.62 0 0 1 .25-.183 4.55 4.55 0 0 1 1.3-.473 13.8 13.8 0 0 1 2.435-.3l.8-.017 1.5.06a11.23 11.23 0 0 1 2.13.36c.418.1.8.29 1.15.554a.38.38 0 0 1 .037.032l.105.115a1.9 1.9 0 0 1 .313.5c.05.123.088.25.112.38a1.88 1.88 0 0 1 .033.344v4.183c-.001.05.01.1.028.147.01.026.026.05.043.073s.03.036.045.053l.01.01a2.92 2.92 0 0 0 1.358.35c.4.04.85.06 1.306.06.83.034 1.663-.065 2.463-.294.07-.027.134-.064.192-.11l.02-.02a.4.4 0 0 0 .088-.127c.02-.045.03-.094.03-.143v-4.2c0-.177.04-.35.117-.5.2-.42.625-.69 1.09-.688h.8c.223-.001.405.177.408.4v5.126a1.86 1.86 0 0 1-.145.725c-.017.04-.037.08-.057.12-.093.185-.214.354-.36.5a.46.46 0 0 1-.037.033 2.9 2.9 0 0 1-1.123.538 12.46 12.46 0 0 1-2.934.39h-.018a15.54 15.54 0 0 1-3.695-.3 5.27 5.27 0 0 1-.843-.261c-.372.148-.756.26-1.15.337-.45.09-.906.158-1.364.2l-1.307.072h-.345c-.29 0-.578-.007-.864-.02l-1.1-.088-1.016-.157a7.1 7.1 0 0 1-.964-.258l-.222-.085c-.115.05-.242.094-.377.136l-.5.133q-.236.054-.494.1l-.484.072-.472.053-.46.037q-.194.013-.4.022h-.06q-.22.01-.44.013-.22.004-.432 0-.213 0-.426-.007-.213-.007-.42-.017-.21-.01-.42-.026l-.417-.036-.417-.05-.418-.062-.418-.08-.15-.033-.267-.07-.41-.135a2.87 2.87 0 0 1-.389-.184 2.09 2.09 0 0 1-.331-.232l-.02-.018c-.11-.097-.206-.208-.288-.33a1.71 1.71 0 0 1-.2-.409c-.052-.155-.085-.316-.1-.48l-.013-.27V9.21a.4.4 0 0 1 .067-.231.41.41 0 0 1 .334-.173zm11.682 11.29l1.226.05h.147a13.32 13.32 0 0 0 1.457-.087c.43-.017.852-.135 1.228-.346l.018-.02a.4.4 0 0 0 .088-.126c.018-.047.026-.098.024-.148v-4.05c0-.05-.01-.1-.03-.147a.4.4 0 0 0-.088-.126l-.01-.01a.7.7 0 0 0-.17-.106 7.89 7.89 0 0 0-2.671-.335c-.967-.08-1.94.07-2.837.438l-.014.015c-.02.018-.035.038-.05.06s-.027.043-.037.067c-.02.047-.03.097-.03.147v4.05a.38.38 0 0 0 .029.147.39.39 0 0 0 .071.11l.016.015.02.02c.046.037.096.068.15.093a4.74 4.74 0 0 0 1.455.291zm12.975-9.888h.885c.47-.001.85.378.854.847v.665c-.003.47-.385.848-.854.847h-.885c-.47.001-.85-.378-.854-.847v-.666c.004-.47.385-.847.854-.846z"
                  ></path>
                </svg>
              </div>
              <h3>دانلود اپلیکیشن</h3>
            </div>
            <!--  -->
            <div class="footer__logo__left">
              <!-- بازار -->
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3.5166"
                    y="3.5166"
                    width="32.967"
                    height="32.967"
                    fill="url(#pattern0)"
                  ></rect>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_21490_174832"
                        transform="scale(0.00666667)"
                      ></use>
                    </pattern>
                    <image
                      id="image0_21490_174832"
                      width="150"
                      height="150"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTEtMjNUMTY6MTI6MDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTExLTIzVDE2OjE1OjM1KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTExLTIzVDE2OjE1OjM1KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE2ODQwZjQzLTI2NGEt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"
                    ></image>
                  </defs>
                </svg>
              </div>

              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.9067 4C19.9598 4.13142 19.5039 10.1768 19.5039 10.1768C26.4867 10.7622 26.9067 4 26.9067 4ZM24.6026 17.9067C27.432 20.4423 28.1952 24.5557 26.4623 27.9305C30.9375 20.4874 29.2458 14.6332 29.2458 14.6332C19.5274 9.78257 14.0684 13.9163 14.0684 13.9163C17.9544 13.9039 21.7073 15.3256 24.6026 17.9067ZM13.6005 19.5079C16.1147 16.6708 20.2456 15.9023 23.6188 17.6441C16.1801 13.1639 10.3371 14.8484 10.3371 14.8484C5.53786 24.5855 9.61718 30.0454 9.61718 30.0454C9.60101 26.1651 11.0188 22.4144 13.6005 19.5079ZM13.4563 20.3438C11.7325 23.7182 12.5002 27.8249 15.328 30.3556C18.2172 32.9403 21.9663 34.3663 25.8502 34.3579C25.8502 34.3579 20.4031 38.4917 10.6848 33.6411C10.6848 33.6411 9.00504 27.775 13.4563 20.3438ZM30.362 18.1934C30.3771 22.0756 28.9547 25.8273 26.3667 28.7309C23.8565 31.566 19.7299 32.3346 16.3604 30.5947C23.7871 35.0749 29.6421 33.3784 29.6421 33.3784C34.4893 23.6533 30.362 18.1934 30.362 18.1934Z"
                    fill="url(#paint0_linear_21485_163073)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_21485_163073"
                      x1="-4.00016"
                      y1="20"
                      x2="26.72"
                      y2="43.0404"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#46AEFF"></stop>
                      <stop offset="1" stop-color="#3B4FE4"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <!-- اپ استور -->
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.67254 7.40789C9.34301 7.79751 9.17487 8.29835 9.20254 8.80789V30.9279C9.16852 31.4383 9.33744 31.9414 9.67254 32.3279L9.74254 32.4079L22.1325 20.0179V19.7179L9.74254 7.33789L9.67254 7.40789Z"
                    fill="url(#paint0_linear_21485_166848)"
                  ></path>
                  <path
                    d="M26.2328 24.1479L22.1328 20.0179V19.7179L26.2328 15.5879L26.3228 15.6479L31.2328 18.4279C32.6328 19.2179 32.6328 20.5179 31.2328 21.3179L26.3428 24.0979L26.2328 24.1479Z"
                    fill="url(#paint1_linear_21485_166848)"
                  ></path>
                  <path
                    d="M26.3529 24.0872L22.1329 19.8672L9.67285 32.3272C10.2559 32.8462 11.1261 32.8756 11.7429 32.3972L26.3529 24.0872Z"
                    fill="url(#paint2_linear_21485_166848)"
                  ></path>
                  <path
                    d="M26.3529 15.6476L11.7429 7.34765C11.1298 6.86237 10.2567 6.88768 9.67285 7.40765L22.1329 19.8676L26.3529 15.6476Z"
                    fill="url(#paint3_linear_21485_166848)"
                  ></path>
                  <path
                    opacity="0.2"
                    d="M26.2329 23.998L11.7429 32.248C11.151 32.6947 10.3347 32.6947 9.74285 32.248L9.67285 32.318L9.74285 32.398C10.3347 32.8447 11.151 32.8447 11.7429 32.398L26.3529 24.088L26.2329 23.998Z"
                    fill="black"
                  ></path>
                  <path
                    opacity="0.12"
                    d="M9.67287 32.1873C9.35166 31.7907 9.19425 31.2863 9.23287 30.7773V30.9273C9.19884 31.4377 9.36776 31.9409 9.70287 32.3273L9.77287 32.2573L9.67287 32.1873Z"
                    fill="black"
                  ></path>
                  <path
                    opacity="0.12"
                    d="M31.2324 21.1672L26.2324 23.9972L26.3224 24.0872L31.2324 21.3072C31.8228 21.0575 32.2295 20.5051 32.2924 19.8672C32.1656 20.4443 31.7722 20.9268 31.2324 21.1672Z"
                    fill="black"
                  ></path>
                  <path
                    opacity="0.25"
                    d="M11.7431 7.48717L31.2331 18.5672C31.7729 18.8075 32.1663 19.2901 32.2931 19.8672C32.2302 19.2293 31.8235 18.6768 31.2331 18.4272L11.7431 7.34717C10.3531 6.54717 9.20312 7.20717 9.20312 8.80717V8.95717C9.23312 7.35717 10.3531 6.69717 11.7431 7.48717Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_21485_166848"
                      x1="16.7039"
                      y1="-7.68409"
                      x2="-3.13684"
                      y2="-2.40285"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00A0FF"></stop>
                      <stop offset="0.01" stop-color="#00A1FF"></stop>
                      <stop offset="0.26" stop-color="#00BEFF"></stop>
                      <stop offset="0.51" stop-color="#00D2FF"></stop>
                      <stop offset="0.76" stop-color="#00DFFF"></stop>
                      <stop offset="1" stop-color="#00E3FF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_21485_166848"
                      x1="33.0628"
                      y1="9.66758"
                      x2="8.87281"
                      y2="9.66758"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE000"></stop>
                      <stop offset="0.41" stop-color="#FFBD00"></stop>
                      <stop offset="0.78" stop-color="#FFA500"></stop>
                      <stop offset="1" stop-color="#FF9C00"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_21485_166848"
                      x1="9.32036"
                      y1="13.3866"
                      x2="-6.64113"
                      y2="40.1858"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF3A44"></stop>
                      <stop offset="1" stop-color="#C31162"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_21485_166848"
                      x1="-0.0522221"
                      y1="3.96657"
                      x2="7.07008"
                      y2="15.9344"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#32A071"></stop>
                      <stop offset="0.07" stop-color="#2DA771"></stop>
                      <stop offset="0.48" stop-color="#15CF74"></stop>
                      <stop offset="0.8" stop-color="#06E775"></stop>
                      <stop offset="1" stop-color="#00F076"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3>بیشتر</h3>
            </div>
          </div>
          <!-- part 3  -->
          <div class="footer__information__sana">
            <div class="footer__sana__right">
              <h3>درباره ی نماوا</h3>
              <p>
                سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های
                محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده
                پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود
                درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده
                رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و
                سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و
                سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا
                در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های
                مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.
              </p>
            </div>
            <div class="footer__sana__left">
              <div>
                <img
                  src="./.././front-end/src/assets/imgs/img__sana__1.png"
                  alt="logo-samandehi"
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <img
                  src="./.././front-end/src/assets/imgs/img__sana__2.png"
                  alt="logo-samandehi"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <!-- part 4  -->
          <div class="footer__information__secority">
            <div class="footer__secority__right">
              <p>
                خدمات ارائه شده در نماوا، دارای مجوزهای لازم از مراجع مربوطه است
                و هر گونه بهره‌برداری و سوءاستفاده از محتوای نماوا، پیگرد قانونی
                دارد.
              </p>
            </div>
            <div class="footer__secority__left">
              <!-- twiter -->
              <div>
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialIcon-0-1-146"
                >
                  <path
                    d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z"
                    fill="#CACACA"
                  ></path>
                </svg>
              </div>
              <!-- instagrem -->
              <div>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialIcon-0-1-146"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.019 5.36425C19.019 6.1265 18.4015 6.74413 17.6394 6.74413C16.8773 6.74413 16.2598 6.1265 16.2598 5.36425C16.2598 4.60201 16.8773 3.98438 17.6394 3.98438C18.4005 3.98438 19.018 4.601 19.019 5.36325V5.36425ZM11.4997 15.3376C9.38206 15.3376 7.66504 13.6213 7.66504 11.5033C7.66504 9.38526 9.38206 7.66895 11.4997 7.66895C13.6164 7.66895 15.3334 9.38526 15.3334 11.5033C15.3334 13.6213 13.6164 15.3376 11.4997 15.3376V15.3376ZM11.5 5.59484C8.23867 5.59484 5.59487 8.24011 5.59487 11.502C5.59487 14.7639 8.23867 17.4082 11.5 17.4082C14.7613 17.4082 17.4051 14.7639 17.4051 11.502C17.4051 8.24011 14.7603 5.59685 11.5 5.59685V5.59484ZM11.5 0C8.37523 0 7.98564 0.0130556 6.75862 0.0692953C5.80472 0.0883766 4.85986 0.269147 3.96721 0.603572C3.19907 0.892804 2.50423 1.34573 1.92888 1.93123C1.34349 2.50568 0.89064 3.20164 0.601458 3.96891C0.267092 4.86272 0.087357 5.80574 0.0682791 6.76081C0.0120492 7.98804 0 8.3797 0 11.503C0 14.6263 0.0120492 15.018 0.0692832 16.2452C0.087357 17.1993 0.268096 18.1433 0.601458 19.0371C0.89064 19.8044 1.34349 20.4993 1.92788 21.0748C2.50423 21.6583 3.19907 22.1092 3.96721 22.3964C4.85986 22.7309 5.80472 22.9116 6.75862 22.9307C7.98564 22.9869 8.37623 23 11.5 23C14.6228 23 15.0144 22.9869 16.2404 22.9307C17.1953 22.9116 18.1391 22.7309 19.0328 22.3964C20.5781 21.7989 21.7991 20.5767 22.3955 19.0321C22.7309 18.1383 22.9116 17.1943 22.9307 16.2402C22.9859 15.013 23 14.6213 23 11.498C23 8.37468 22.9859 7.98301 22.9307 6.75579C22.9116 5.80172 22.7309 4.8577 22.3955 3.96289C22.1074 3.19662 21.6545 2.50065 21.0701 1.92621C20.4948 1.34272 19.7989 0.890796 19.0328 0.603572C18.1391 0.269147 17.1953 0.0883766 16.2404 0.0692953C15.0154 0.0140599 14.6238 0.00100428 11.5 0.00100428V0ZM11.4998 2.07425C14.5693 2.07425 14.9338 2.0863 16.1468 2.14153C16.8757 2.15057 17.5987 2.28414 18.2825 2.53722C18.7825 2.721 19.2334 3.01526 19.6049 3.39789C19.9865 3.76947 20.2807 4.2214 20.4634 4.72153C20.7164 5.40544 20.851 6.12852 20.86 6.85763C20.9152 8.0708 20.9263 8.43435 20.9263 11.5054C20.9263 14.5765 20.9152 14.9401 20.86 16.1532C20.851 16.8833 20.7164 17.6044 20.4634 18.2893C20.0778 19.2926 19.2846 20.085 18.2815 20.4726C17.5967 20.7257 16.8747 20.8603 16.1458 20.8683C14.9328 20.9236 14.5683 20.9356 11.4988 20.9356C8.42821 20.9356 8.06372 20.9236 6.85177 20.8683C6.12279 20.8583 5.40084 20.7237 4.71906 20.4696C4.21901 20.2848 3.76817 19.9906 3.39565 19.609C3.01509 19.2374 2.72089 18.7855 2.53613 18.2863C2.2821 17.6024 2.14855 16.8793 2.13951 16.1502C2.08529 14.9371 2.07324 14.5735 2.07324 11.5024C2.07324 8.43133 2.08529 8.06778 2.13951 6.85462C2.14855 6.12651 2.2821 5.40444 2.53513 4.72153C2.71988 4.2214 3.01409 3.76947 3.39464 3.39889C3.76717 3.01626 4.21901 2.72201 4.71906 2.53722C5.40185 2.28414 6.1238 2.14957 6.85278 2.14053C8.06573 2.08529 8.42922 2.07324 11.4998 2.07324V2.07425Z"
                    fill="#CACACA"
                  ></path>
                </svg>
              </div>
              <!-- telegram -->
              <div>
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialIcon-0-1-146"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.78586 13.757C16.9222 7.26962 20.4949 4.00586 20.5048 3.96569C20.5128 3.93757 20.5178 3.90644 20.5188 3.87632C20.5188 3.72769 20.4121 3.65137 20.1928 3.65137C20.143 3.65137 15.9732 6.32263 7.68652 11.6641L9.43298 17.4395L9.78586 13.757ZM19.1398 20.7665L13.3372 16.4845L10.0846 19.5584C9.92506 19.699 9.72071 19.7784 9.50838 19.7834C9.11264 19.8175 8.74481 19.5795 8.61123 19.2039L6.31153 12.1964L0.598665 10.4089C0.255754 10.3175 0.013523 10.0122 0.000564177 9.6557C-0.0133915 9.27309 0.232827 8.92964 0.598665 8.82219C16.2101 2.94039 24.0672 0 24.1698 0C24.3822 0.0110466 24.5815 0.101428 24.7321 0.253067C24.9205 0.415752 25.0181 0.659781 24.9972 0.907827L21.0198 20.0134C20.956 20.6079 20.4357 21.0437 19.8446 20.9965C19.5914 20.9975 19.3452 20.9172 19.1398 20.7665Z"
                    fill="#CACACA"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!---------------------------------------- footer < 720 ------------------------------------------------------>
      <div class="footer__fack__container">
        <div class="item__footer__fack">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="navItemIcon-0-1-191 navItemIcon-d9-0-1-207"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.97158 10.4736L10.1511 5.29406C11.3068 4.13831 13.1803 4.13831 14.3361 5.29406L19.5156 10.4736V18.9733C19.5148 19.7391 18.8938 20.3601 18.1281 20.3608H15.1281V15.7236C15.1281 14.1291 13.8351 12.8361 12.2406 12.8361C10.6453 12.8361 9.35308 14.1291 9.35308 15.7236V20.3616H6.35308C5.58658 20.3608 4.96633 19.7398 4.96558 18.9741L4.97158 10.4736ZM14.4027 20.3611H10.0812V15.7238C10.079 14.5306 11.045 13.5616 12.2382 13.5601C13.4322 13.5578 14.4005 14.5238 14.4027 15.7171V15.7238V20.3611ZM2.22176 13.2223L4.24676 11.1973V18.971C4.24826 20.138 5.19326 21.0838 6.36101 21.0853H18.127C19.294 21.0838 20.2398 20.138 20.2413 18.971V11.2003L22.2663 13.2253C22.408 13.367 22.6383 13.367 22.78 13.2253C22.9218 13.0835 22.9218 12.8533 22.78 12.7115L20.1378 10.0693L14.8525 4.78403C13.4133 3.34478 11.08 3.34478 9.64076 4.78403C9.64001 4.78403 9.64001 4.78403 9.64001 4.78403L4.35476 10.0693L1.71251 12.7115C1.57076 12.8533 1.57076 13.0835 1.71251 13.2253C1.85426 13.367 2.08376 13.367 2.22626 13.2253L2.22176 13.2223Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <span>خانه</span>
        </div>
        <div class="item__footer__fack">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="navItemIcon-0-1-191 navItemIcon-d9-0-1-207"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2674 16.436C14.553 19.1499 10.1365 19.1499 7.42259 16.436C4.70867 13.7221 4.70867 9.30536 7.42259 6.59118C8.7352 5.2783 10.4834 4.55547 12.3449 4.55547C14.2063 4.55547 15.9545 5.2783 17.2674 6.59118C19.9813 9.30536 19.9813 13.7221 17.2674 16.436ZM18.014 5.84458C16.5023 4.33266 14.4891 3.5 12.3449 3.5C10.2009 3.5 8.18767 4.33266 6.676 5.84458C3.68092 8.83966 3.53203 13.6262 6.31485 16.7972L3.15424 19.9575C2.94859 20.1632 2.94859 20.4984 3.15424 20.7041C3.25403 20.8039 3.38656 20.8588 3.52754 20.8588C3.66851 20.8588 3.80104 20.8039 3.90083 20.7041L7.06144 17.5437C8.52057 18.8236 10.3918 19.5272 12.3449 19.5272C14.4891 19.5272 16.5023 18.6945 18.014 17.1826C21.14 14.0566 21.14 8.97061 18.014 5.84458Z"
                fill="#AAAAAA"
              ></path>
            </svg>
          </div>
          <span>جستجو</span>
        </div>
        <div class="item__footer__fack">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="navItemIcon-0-1-191 navItemIcon-d9-0-1-207"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.8347 9.54032C9.8347 9.97803 9.4783 10.3344 9.04032 10.3344H4.85011C4.4124 10.3344 4.056 9.97803 4.056 9.54032V5.35011C4.056 4.9124 4.4124 4.556 4.85011 4.556H9.04032C9.4783 4.556 9.8347 4.9124 9.8347 5.35011V9.54032ZM9.04032 3.5H4.85011C3.83002 3.5 3 4.33002 3 5.35011V9.54032C3 10.5604 3.83002 11.3904 4.85011 11.3904H9.04032C10.0604 11.3904 10.8907 10.5604 10.8907 9.54032V5.35011C10.8907 4.33002 10.0604 3.5 9.04032 3.5Z"
                fill="#AAAAAA"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2641 9.54032C19.2641 9.97803 18.9077 10.3344 18.47 10.3344H14.2798C13.8421 10.3344 13.4857 9.97803 13.4857 9.54032V5.35011C13.4857 4.9124 13.8421 4.556 14.2798 4.556H18.47C18.9077 4.556 19.2641 4.9124 19.2641 5.35011V9.54032ZM18.47 3.5H14.2798C13.2597 3.5 12.4297 4.33002 12.4297 5.35011V9.54032C12.4297 10.5604 13.2597 11.3904 14.2798 11.3904H18.47C19.4901 11.3904 20.3201 10.5604 20.3201 9.54032V5.35011C20.3201 4.33002 19.4901 3.5 18.47 3.5Z"
                fill="#AAAAAA"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.8347 18.9801C9.8347 19.4178 9.4783 19.7742 9.04032 19.7742H4.85011C4.4124 19.7742 4.056 19.4178 4.056 18.9801V14.7899C4.056 14.3522 4.4124 13.9958 4.85011 13.9958H9.04032C9.4783 13.9958 9.8347 14.3522 9.8347 14.7899V18.9801ZM9.04032 12.9398H4.85011C3.83002 12.9398 3 13.7698 3 14.7899V18.9801C3 20.0002 3.83002 20.8302 4.85011 20.8302H9.04032C10.0604 20.8302 10.8907 20.0002 10.8907 18.9801V14.7899C10.8907 13.7698 10.0604 12.9398 9.04032 12.9398Z"
                fill="#AAAAAA"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2641 18.9801C19.2641 19.4178 18.9077 19.7742 18.47 19.7742H14.2798C13.8421 19.7742 13.4857 19.4178 13.4857 18.9801V14.7899C13.4857 14.3522 13.8421 13.9958 14.2798 13.9958H18.47C18.9077 13.9958 19.2641 14.3522 19.2641 14.7899V18.9801ZM18.47 12.9398H14.2798C13.2597 12.9398 12.4297 13.7698 12.4297 14.7899V18.9801C12.4297 20.0002 13.2597 20.8302 14.2798 20.8302H18.47C19.4901 20.8302 20.3201 20.0002 20.3201 18.9801V14.7899C20.3201 13.7698 19.4901 12.9398 18.47 12.9398Z"
                fill="#AAAAAA"
              ></path>
            </svg>
          </div>
          <span>دسته بندی</span>
        </div>
        <div class="item__footer__fack">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="navItemIcon-0-1-191 navItemIcon-d9-0-1-207"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.0621 11.3812L18.6312 18.1285C18.4446 18.6467 17.9488 18.9949 17.3978 18.9949H16.3711H4.6701C4.6429 18.9949 4.61598 18.992 4.58905 18.9907C4.29152 18.9799 4.02356 18.8386 3.85117 18.5934C3.67165 18.3384 3.62967 18.0237 3.73527 17.7304L5.91486 11.6808C6.23509 10.7919 7.08543 10.1945 8.03055 10.1945H20.2284C20.5209 10.1945 20.7852 10.3318 20.9536 10.5712C21.1218 10.8107 21.1614 11.1058 21.0621 11.3812ZM4.76091 5.556H8.18288C8.77926 5.556 9.33999 5.87412 9.64623 6.38602C10.1418 7.21524 11.0497 7.7303 12.0156 7.7303H16.7895C17.5464 7.7303 18.1621 8.34595 18.1621 9.10258V9.13848H8.03055C6.64138 9.13848 5.39214 10.0163 4.92116 11.3228L3.056 16.5004V7.26091C3.056 6.32081 3.82081 5.556 4.76091 5.556ZM21.8174 9.96401C21.4542 9.4471 20.8602 9.13848 20.2284 9.13848H19.2181V9.10258C19.2181 7.76357 18.1288 6.6743 16.7895 6.6743H12.0156C11.4195 6.6743 10.8588 6.35618 10.5525 5.84402C10.0565 5.01506 9.14859 4.5 8.18288 4.5H4.76091C3.23842 4.5 2 5.73842 2 7.26091V17.3811C2 18.7386 3.0193 19.8603 4.3327 20.0272C4.42854 20.0414 4.52542 20.0509 4.62363 20.0509H4.6701H16.3711H17.3978C18.3928 20.0509 19.2875 19.4221 19.6249 18.4862L22.0558 11.7389C22.2697 11.1446 22.1807 10.4812 21.8174 9.96401Z"
                fill="#AAAAAA"
              ></path>
            </svg>
          </div>
          <span>لیست</span>
        </div>
        <div class="item__footer__fack">
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="navItemIcon-0-1-191 navItemIcon-d9-0-1-207"
            >
              <circle
                cx="16.5"
                cy="12.5"
                r="1.5"
                transform="rotate(90 16.5 12.5)"
                fill="#AAAAAA"
              ></circle>
              <circle
                cx="12"
                cy="12.5"
                r="1.5"
                transform="rotate(90 12 12.5)"
                fill="#AAAAAA"
              ></circle>
              <circle
                cx="7.5"
                cy="12.5"
                r="1.5"
                transform="rotate(90 7.5 12.5)"
                fill="#AAAAAA"
              ></circle>
            </svg>
          </div>
          <span>بیشتر</span>
        </div>
      </div>

`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallbak() {
    console.log("tst");
  }
}

export { Footer };
