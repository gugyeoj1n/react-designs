https://www.kakaocorp.com/page/

카카오 홈페이지 만들어 보기
> 상단 내비게이션 바 구현하기
> * 가운데 배너에 마우스 올릴 때 다른 배너 비활성화
> => 배너 태그마다 onMouseEnter, onMouseLeave 달아서 해결
> => 다른 배너들 회색으로 바꿔주는 코드가 너무 지저분한 것 같다
> * 오른쪽 배너 hover 효과
> => 간단하게 CSS에서 해결
> * 스크롤 내리면 내비게이션 바 밑 테두리 활성화
> => window.addEventListener('scroll') 에서 스크롤 값이 0(맨 위)가 아니면 border 활성화

<p align='center'>
  <img src='https://user-images.githubusercontent.com/65993764/169640062-0c7ea6bb-d0d9-48a4-9bff-a0364e0639d0.gif'/>
</p>
