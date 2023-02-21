
  // 슬라이드 메뉴
  $('div.nav ul.gnb li.on').mouseenter(function(){
    $('div.submenu').stop().slideDown();
  });
  $('div.nav ul.gnb li.on').mouseleave(function(){
    $('div.submenu').stop().slideUp();
  });

  const swiper = new Swiper('.main_swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper1 = new Swiper('.brand_swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow', // 이펙트 효과
    coverflowEffect : {
      rotate: 0, // 회전각도
      stretch: 0, // 슬라이드 간의 당김 정도
      depth: 400, // 원근감 지정
      modifier: 1, // 중첩 정도 지정
      slideShadows: false, // 슬라이드 그림자 생성
    },
    spacebetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.product_swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });