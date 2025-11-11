export function AboutSection() {
  return (
    <section className="bg-accent/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About me
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-card-foreground">
              バックエンドとフロントエンドの両方の開発をしています。
              <br />
              プログラミングスクールで9ヶ月間、HTML・CSS・PHP・Laravelの基礎を学び、模擬案件を通じて実践に近い経験を積みました。
              <br />
              現在は Next.js と Laravelを使用したWebアプリケーションの開発業務に従事しており、要件定義・設計・開発・運用など、実務を通して幅広い工程に取り組んでいます。
            </p>
            <p className="text-lg leading-relaxed text-card-foreground mt-4">
              コードを書くうえで大切にしているのは、「理想的な構造」と「わかりやすさ」。
              <br />
              一つひとつの課題に丁寧に向き合うことを意識し、信頼されるエンジニアを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
