import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center overflow-hidden">
            <Image
              src="/IMG_9415.JPG"
              alt="プロフィール写真"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-4 text-balance">
            はじめまして！
            <br className="md:hidden" />
            <span className="text-primary font-semibold">内田ありさ</span>と申します！
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            ポートフォリオをご覧いただき、
            <br className="md:hidden" />
            ありがとうございます。
            <br />
            スキューバーダイビングと美味しいお酒が好きな
            フリーランスプログラマーのポートフォリオです。
            <br />
            どうぞごゆっくりご覧ください。
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}
