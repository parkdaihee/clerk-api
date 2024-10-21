import React from 'react'
import Image from 'next/image' // next/image 임포트

function Homepage() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '0', // 마진 제거
        padding: '0', // 패딩 제거
        height: '100vh', // 화면의 전체 높이
        width: '100vw', // 화면의 전체 너비
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/water2.gif")', // 여기에 GIF 경로를 넣으세요
        backgroundSize: 'cover', // 화면에 꽉 차게
        backgroundPosition: 'center', // 이미지 중앙을 기준으로
        backgroundRepeat: 'no-repeat', // 반복 금지
      }}
    >
      <h1 style={{ fontSize: '2em', marginBottom: '10px', color: 'white' }}>
        Park Daihee&apos;s Homepage
      </h1>
      <p style={{ fontSize: '1.5em', marginBottom: '20px', color: 'white' }}>
        안녕하세요! 박대희의 홈페이지에 오신 것을 환영합니다.
      </p>
      <br />
      <p style={{ fontSize: '1.2em', marginBottom: '20px', color: 'white' }}>
        이곳은 저의 다양한 프로젝트와 작업을 소개하는 공간입니다. 함께하는 모든
        순간이 소중하며, 여러분의 방문을 진심으로 감사합니다.
      </p>
      {/* GIF 이미지 사용 시, next/image 사용 */}
      <Image
        src="/water2.gif" // GIF 이미지 경로
        alt="Water background" // 대체 텍스트
        layout="fill" // 채우기 레이아웃
        objectFit="cover" // 이미지 커버
        quality={100} // 품질 설정
      />
    </div>
  )
}

export default Homepage
