export type Project = {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: string[];
  description: string;
  fullDescription: string;
  methodology: string;
  features: { label: string; icon: string }[];
  techStack: {
    backend: string;
    frontend: string;
    tools: string;
    // gitHubUrl: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "お問い合わせフォーム",
    subtitle: "学習",
    thumbnail: "/contactForm.png",
    images: [
      "/contactForm2.png",
      "/login2.png",
      "/register2.png",
      "/admin3.png",
      "/admin4.png",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの教材管理アプリの開発をチームで作成しておりました。受講生が教材の閲覧や学習時間の記録、コーチとの面談予約などができるアプリで要件定義、開発、テスト、レビューなどバックエンドとフロントエンド両方の幅広い業務に携わらせていただいております。",
    methodology: "アジャイル開発",
    features: [
      { label: "チャット機能", icon: "💬" },
      { label: "休学などの申請フォーム", icon: "📝" },
      { label: "テスト実装", icon: "🧪" },
      { label: "バグ対応", icon: "🐛" },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "JavaScript, TypeScript, Next.js, Tailwind CSS, HTML, HeroUI",
      tools: "VSCode, GitHub",
    },
  },
  {
    id: 2,
    title: "学習アプリ",
    subtitle: "実務Sample",
    thumbnail: "/modern-learning-management-app-interface.jpg",
    images: [
      "/modern-learning-management-app-interface.jpg",
      "/modern-learning-management-app-interface.jpg",
      "/modern-learning-management-app-interface.jpg",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの教材管理アプリの開発をチームで作成しておりました。受講生が教材の閲覧や学習時間の記録、コーチとの面談予約などができるアプリで要件定義、開発、テスト、レビューなどバックエンドとフロントエンド両方の幅広い業務に携わらせていただいております。",
    methodology: "アジャイル開発",
    features: [
      { label: "チャット機能", icon: "💬" },
      { label: "休学などの申請フォーム", icon: "📝" },
      { label: "テスト実装", icon: "🧪" },
      { label: "バグ対応", icon: "🐛" },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "JavaScript, TypeScript, Next.js, Tailwind CSS, HTML, HeroUI",
      tools: "VSCode, GitHub",
    },
  },
];
