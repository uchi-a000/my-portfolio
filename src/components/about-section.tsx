export function AboutSection() {
  return (
    <section className="bg-accent/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About me
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="text-lg leading-relaxed text-card-foreground">
              <p>バックエンドとフロントエンドの両方の開発経験がございます。</p>
              <p>
                2024年にプログラミングスクールで9ヶ月間、PHP・Laravelの基礎から設計・実装まで一連の開発工程を習得。
                その後は企業に従事し、Next.jsとLaravelを用いたWebアプリケーション開発にて、要件定義から設計・実装・運用まで幅広い工程を担当してまいりました。
              </p>
            </div>
            <div className="text-lg leading-relaxed text-card-foreground mt-4">
              <p>
                また、コードを書くうえで大切にしているのは、「理想的な構造」と「わかりやすさ」です。
                <br />
                一つひとつの課題に丁寧に向き合うことを意識しコミュニケーションを大切にして、信頼されるエンジニアを目指しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
