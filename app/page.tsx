export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt="로고"
          src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              안녕하세요! 박대희의 홈페이지에 오신 것을 환영합니다. 이곳은 저의
              다양한 프로젝트와 작업을 소개하는 공간입니다. 함께하는 모든 순간이
              소중하며, 여러분의 방문을 진심으로 감사합니다.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="박대희"
              src="/박대희.png" // public 폴더 내의 이미지 경로
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Park Daihee</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">중부대학교 정보보호학과</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
