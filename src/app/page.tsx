import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '열린교회 | 새 단장 중입니다',
  description: '새로운 모습으로 찾아뵙기 위해 준비 중입니다. 진리가 너희를 자유케 하리라 (요 8:32)',
};

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.223.654-.369.395-.226.862-.52 1.357-.886.533-.404 1.09-1.01 1.6-1.882A10.034 10.034 0 0016 10c0-5.523-4.477-10-10-10S0 4.477 0 10a10.034 10.034 0 002.19 6.332c.51 1.012 1.067 1.638 1.6 2.042.495.366 1.077.773 1.357 1.002.254.146.468.27.654.369a5.745 5.745 0 00.28.14l.018.008.006.003zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  );
}

export default function UnderConstructionPage(): JSX.Element {
  return (
    <div className="bg-stone-50 font-sans text-stone-700">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <main className="w-full max-w-lg text-center">

          <header className="mb-8">
            <CrossIcon className="mx-auto h-12 w-12 text-orange-500" />
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-800 sm:text-4xl">
              대한예수교장로회 열린교회
            </h1>
          </header>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-orange-600">
              홈페이지 새 단장 중입니다
            </h2>
            <p className="mt-4 text-stone-600">
              더욱 풍성한 은혜와 소식을 나누기 위해<br />
              홈페이지를 새롭게 준비하고 있습니다.
            </p>
          </div>

          <section className="mt-10">
            <p className="text-lg italic text-stone-800">
              &ldquo;진리가 너희를 자유케 하리라&rdquo;
            </p>
            <p className="mt-2 text-sm text-stone-500">
              (요한복음 8:32)
            </p>
          </section>

        </main>

        <footer className="mt-12 w-full max-w-lg rounded-lg bg-white p-6 text-center text-sm text-stone-600 shadow-sm">
          <h3 className="font-semibold text-stone-800">연락 및 위치 안내</h3>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <LocationIcon className="h-5 w-5 flex-shrink-0 text-stone-400" />
              <span>서울 노원구 동일로 1051, 4층</span> 
            </div>

            <div className="flex items-center justify-center gap-2">
              <MailIcon className="h-5 w-5 flex-shrink-0 text-stone-400" />
              <a href="mailto:yeollinchurch@gmail.com" className="text-orange-700 hover:underline">
                yeollinchurch@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}