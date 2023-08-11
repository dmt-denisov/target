const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;
app.locals = 0

app.get('/', async (req, res) => {
    
    res.write(`
    <div style='display:flex;align-items:center;justify-content:center;height:85vh;flex-direction:column'>
    <a href='/away' target="_blank">
    <svg width="197" height="35" viewBox="0 0 197 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4356 6.21022C13.1989 6.21022 14.5215 6.68334 15.4033 7.62917C16.2847 8.57573 16.7255 9.96304 16.7255 11.7907V14.7259C16.7255 16.554 16.2847 17.9408 15.4033 18.887C14.5215 19.8332 13.1989 20.3064 11.4356 20.3064H9.7581V28.7898H6.21014V17.0807H9.7581H10.2957H11.4356C12.0162 17.0807 12.4517 16.9196 12.7419 16.5971C13.0323 16.2741 13.1777 15.726 13.1777 14.952V11.565C13.1777 10.7909 13.0323 10.2422 12.7419 9.91999C12.4517 9.59724 12.0162 9.43589 11.4356 9.43589H10.2957H9.7581H6.21014V6.21022H11.4356ZM166.846 16.371V9.43589V8.85926V6.21022H172.201C174.029 6.21022 175.362 6.63496 176.201 7.48424C177.039 8.33388 177.459 9.64021 177.459 11.4035V13.1774C177.459 15.5 176.685 17.0269 175.136 17.7579C175.975 18.102 176.577 18.6772 176.942 19.4839C177.308 20.2901 177.491 21.3169 177.491 22.5643V26.0478C177.491 26.6933 177.512 27.2146 177.555 27.6125C177.598 28.0103 177.706 28.4025 177.878 28.7898H174.265C174.136 28.424 174.05 28.08 174.007 27.7575C173.964 27.4351 173.943 26.8543 173.943 26.0159V22.4674C173.943 21.4351 173.76 20.6988 173.394 20.258C173.029 19.817 172.437 19.5967 171.62 19.5967H170.394V21.9459V28.7898H166.846V21.9459V16.371ZM170.394 9.43589V16.371H171.088H171.782C172.491 16.371 173.023 16.1881 173.378 15.8225C173.733 15.4569 173.91 14.8442 173.91 13.984V11.7585C173.91 10.9414 173.765 10.3499 173.475 9.98426C173.185 9.61884 172.727 9.43589 172.104 9.43589H171.088H170.394ZM0.886901 0H0V9.43589H3.54895V3.54888H192.893V31.4511H3.54895V17.0807H0V35H0.886901H3.54895H192.893H195.555H196.442V0H195.555H192.893H3.54895H0.886901ZM25.951 28.7898C25.822 28.424 25.7363 28.08 25.6933 27.7575C25.6503 27.4351 25.6282 26.8543 25.6282 26.0159V22.4674C25.6282 21.4351 25.446 20.6988 25.08 20.258C24.715 19.817 24.1231 19.5967 23.306 19.5967H22.0803V28.7898H18.532V6.21022H23.8866C25.7147 6.21022 27.0479 6.63496 27.8864 7.48424C28.7248 8.33388 29.1443 9.64021 29.1443 11.4035V13.1774C29.1443 15.5 28.3701 17.0269 26.822 17.7579C27.6604 18.102 28.2628 18.6772 28.6283 19.4839C28.9939 20.2901 29.1767 21.3169 29.1767 22.5643V26.0478C29.1767 26.6933 29.198 27.2146 29.241 27.6125C29.2841 28.0103 29.3915 28.4025 29.564 28.7898H25.951ZM22.0803 16.371H23.4675C24.177 16.371 24.7091 16.1881 25.0641 15.8225C25.4188 15.4569 25.5964 14.8442 25.5964 13.984V11.7585C25.5964 10.9414 25.451 10.3499 25.1606 9.98426C24.8708 9.61884 24.4133 9.43589 23.7897 9.43589H22.0803V16.371ZM31.209 11.6294C31.209 9.82305 31.671 8.42538 32.5955 7.43579C33.5203 6.4471 34.8538 5.95242 36.5956 5.95242C38.3372 5.95242 39.671 6.4471 40.5955 7.43579C41.52 8.42538 41.9823 9.82305 41.9823 11.6294V23.3706C41.9823 25.1768 41.52 26.5747 40.5955 27.5641C39.671 28.5529 38.3372 29.0476 36.5956 29.0476C34.8538 29.0476 33.5203 28.5529 32.5955 27.5641C31.671 26.5747 31.209 25.1768 31.209 23.3706V11.6294ZM34.7569 23.5965C34.7569 25.0801 35.3701 25.8222 36.5956 25.8222C37.8213 25.8222 38.4341 25.0801 38.4341 23.5965V11.4035C38.4341 9.91993 37.8213 9.17766 36.5956 9.17766C35.3701 9.17766 34.7569 9.91993 34.7569 11.4035V23.5965ZM54.562 16.2099V23.3706C54.562 25.1985 54.1108 26.6017 53.2074 27.5799C52.3045 28.5583 50.9928 29.0476 49.2722 29.0476C47.5516 29.0476 46.24 28.5583 45.3372 27.5799C44.434 26.6017 43.9825 25.1985 43.9825 23.3706V11.6294C43.9825 9.80136 44.434 8.3982 45.3372 7.41982C46.24 6.44163 47.5516 5.95242 49.2722 5.95242C50.9928 5.95242 52.3045 6.44163 53.2074 7.41982C54.1108 8.3982 54.562 9.80136 54.562 11.6294V13.8229H51.2076V11.4035C51.2076 9.91993 50.5948 9.17766 49.3691 9.17766C48.1436 9.17766 47.5303 9.91993 47.5303 11.4035V23.5965C47.5303 25.0587 48.1436 25.7901 49.3691 25.7901C50.5948 25.7901 51.2076 25.0587 51.2076 23.5965V19.4354H49.5951V16.2099H54.562ZM64.2713 28.7898C64.1422 28.424 64.0566 28.08 64.0135 27.7575C63.9705 27.4351 63.9488 26.8543 63.9488 26.0159V22.4674C63.9488 21.4351 63.7664 20.6988 63.4004 20.258C63.0352 19.817 62.4433 19.5967 61.6262 19.5967H60.4007V28.7898H56.8528V6.21022H62.207C64.0349 6.21022 65.3683 6.63496 66.2067 7.48424C67.0455 8.33388 67.4649 9.64021 67.4649 11.4035V13.1774C67.4649 15.5 66.6908 17.0269 65.1423 17.7579C65.9808 18.102 66.583 18.6772 66.9486 19.4839C67.3144 20.2901 67.4971 21.3169 67.4971 22.5643V26.0478C67.4971 26.6933 67.5184 27.2146 67.5614 27.6125C67.6048 28.0103 67.7122 28.4025 67.8843 28.7898H64.2713ZM60.4007 16.371H61.7879C62.4972 16.371 63.0295 16.1881 63.3844 15.8225C63.7392 15.4569 63.9166 14.8442 63.9166 13.984V11.7585C63.9166 10.9414 63.7718 10.3499 63.4814 9.98426C63.191 9.61884 62.7338 9.43589 62.1101 9.43589H60.4007V16.371ZM77.7224 28.7898L77.2295 25.497H77.2298L77.2195 25.4299L77.1093 24.6931H77.1062L76.2981 19.4412H76.2977L74.916 10.2103L73.2066 21.629H73.2089L72.6978 25.0731L72.1421 28.7898H68.884L72.4969 6.21022H77.6898L81.3028 28.7898H77.7224ZM92.8828 6.21022H97.8179V28.7898H94.4635V12.5969L92.0118 28.7898H88.6574L86.0119 12.8229V28.7898H82.9157V6.21022H87.8508L90.4634 22.2418L92.8828 6.21022ZM110.333 6.21022H115.269V28.7898H111.914V12.5969L109.462 28.7898H106.108L103.463 12.8229V28.7898H100.366V6.21022H105.301L107.914 22.2418L110.333 6.21022ZM125.752 28.7898L125.139 24.6931H125.118L124.646 21.629H124.655L122.946 10.2103L121.501 19.862L121.483 19.8647L120.675 25.3066L120.693 25.3073L120.172 28.7898H116.914L120.527 6.21022H125.72L129.332 28.7898H125.752ZM140.912 6.21022V9.43589H137.203V28.7898H133.655V9.43589H129.945V6.21022H140.912ZM146.009 6.21022V28.7898H142.461V6.21022H146.009ZM158.879 23.3706C158.879 25.1985 158.427 26.6017 157.524 27.5799C156.621 28.5583 155.31 29.0476 153.589 29.0476C151.869 29.0476 150.557 28.5583 149.654 27.5799C148.751 26.6017 148.299 25.1985 148.299 23.3706V11.6294C148.299 9.80136 148.751 8.3982 149.654 7.41982C150.557 6.44163 151.869 5.95242 153.589 5.95242C155.31 5.95242 156.621 6.44163 157.524 7.41982C158.427 8.3982 158.879 9.80136 158.879 11.6294V13.8229H155.524V11.4035C155.524 9.91993 154.912 9.17766 153.686 9.17766C152.46 9.17766 151.847 9.91993 151.847 11.4035V23.5965C151.847 25.0587 152.46 25.7901 153.686 25.7901C154.912 25.7901 155.524 25.0587 155.524 23.5965V20.3707H158.879V23.3706ZM164.266 28.7898H160.847V25.3702H164.266V28.7898ZM183.2 23.6287C183.2 25.0911 183.813 25.8222 185.039 25.8222C186.265 25.8222 186.878 25.0911 186.878 23.6287V6.21022H190.232V23.4031C190.232 25.2306 189.78 26.634 188.877 27.6125C187.974 28.5909 186.662 29.0802 184.942 29.0802C183.222 29.0802 181.91 28.5909 181.006 27.6125C180.104 26.634 179.652 25.2306 179.652 23.4031V6.21022H183.2V23.6287Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="0.999998" y1="35" x2="196" y2="-5.68793e-06" gradientUnits="userSpaceOnUse">
<stop stop-color="#6B58E0"/>
<stop offset="1" stop-color="#3F73F9"/>
</linearGradient>
</defs>
</svg>
</a>
<span style="font-size:32px;margin-top:40px">${app.locals}</span>
    </div>
    `);
    res.end()
})

app.get('/away', (req,res)=>{
    app.locals += 1;
    res.redirect('https://sandbox-lk.programmatic.ru')
})

app.listen(PORT, () => {
    console.log('Опять работа?');
});