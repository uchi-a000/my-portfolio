import Image from "next/image";

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
          <h1 className="text-2xl md:text-4xl lg:text-3xl  mb-4 font-normal text-balance">
            はじめまして。
            <br className="md:hidden" />
            <span className="text-primary font-normal">内田</span>
            と申します。
          </h1>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>ご覧いただきありがとうございます！</p>
            <p>フルスタックWeb開発が可能なフリーランスエンジニアです。</p>
            <p>
              Next.js と Laravel を用いた開発に携わっており、PHP や TypeScript
              などを扱っています。
            </p>
            <p>
              このポートフォリオでは、学習記録や制作実績をご覧いただけます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
