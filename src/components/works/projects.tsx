import { ReactNode } from "react";
import { IoMdLogIn } from "react-icons/io";
import { FaSearch, FaRegQuestionCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: string[];
  description: string;
  fullDescription: string;
  methodology: string;
  features: { label: string; icon: ReactNode }[];
  techStack: {
    backend: string;
    frontend: string;
    tools: string;
  };
  gitHub?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "お問い合わせフォーム",
    subtitle: "学習",
    thumbnail: "/contactForm/contact_form.png",
    images: [
      "/contactForm/contact_form.png",
      "/contactForm/login.png",
      "/contactForm/register.png",
      "/contactForm/admin1.png",
      "/contactForm/admin2.png",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの学習で作成したお問い合わせ管理システムです。ユーザ登録・ログイン・ログアウト・お問い合わせ内容のDB保存、管理画面での一覧・検索など、Webサービスとして必要な基本機能を一通り実装しました。これにより、LaravelでのMVC構造や認証機能、フォームバリデーションなどの流れを理解できました。今後はこの経験を活かし、実務レベルでの機能改善や、より使いやすいUI/UXの実装につなげていきたいと考えています。",
    methodology: "個人開発",
    features: [
      { label: "Login・Logout", icon: <IoMdLogIn /> },
      { label: "お問い合わせフォーム", icon: <FaRegQuestionCircle /> },
      { label: "管理者画面", icon: <RiAdminFill /> },
      { label: "検索機能", icon: <FaSearch /> },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "未使用",
      tools: "VSCode, GitHub",
    },
    gitHub: "https://github.com/uchi-a000/contactForm",
  },
  {
    id: 2,
    title: "飲食店予約システム",
    subtitle: "学習",
    thumbnail: "/reservation/home.png",
    images: [
      "/reservation/home.png",
      "/reservation/my_page.png",
      "/reservation/admin.png",
      "/reservation/shop.png",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの学習で作成した飲食店予約システムです。",
    methodology: "個人開発",
    features: [
      { label: "予約とお気に入り機能", icon: <IoMdLogIn /> },
      { label: "口コミ投稿・閲覧", icon: <FaRegQuestionCircle /> },
      { label: "QRコード発行・Stripe決済", icon: <RiAdminFill /> },
      { label: "csvインポート", icon: <FaSearch /> },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "未使用",
      tools: "VSCode, GitHub",
    },
    gitHub: "https://github.com/uchi-a000/ReservationSystem",
  },
  {
    id: 3,
    title: "フリマアプリ",
    subtitle: "学習",
    thumbnail: "/",
    images: [
      "/reservation/home.png",
      "/reservation/my_page.png",
      "/reservation/admin.png",
      "/reservation/shop.png",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの学習で作成した飲食店予約システムです。",
    methodology: "個人開発",
    features: [
      { label: "予約とお気に入り機能", icon: <IoMdLogIn /> },
      { label: "口コミ投稿・閲覧", icon: <FaRegQuestionCircle /> },
      { label: "QRコード発行・Stripe決済", icon: <RiAdminFill /> },
      { label: "csvインポート", icon: <FaSearch /> },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "未使用",
      tools: "VSCode, GitHub",
    },
    gitHub: "https://github.com/uchi-a000/ReservationSystem",
  },
  {
    id: 4,
    title: "Portfolio",
    subtitle: "学習",
    thumbnail: "/",
    images: [
      "/reservation/home.png",
      "/reservation/my_page.png",
      "/reservation/admin.png",
      "/reservation/shop.png",
    ],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの学習で作成した飲食店予約システムです。",
    methodology: "個人開発",
    features: [
      { label: "予約とお気に入り機能", icon: <IoMdLogIn /> },
      { label: "口コミ投稿・閲覧", icon: <FaRegQuestionCircle /> },
      { label: "QRコード発行・Stripe決済", icon: <RiAdminFill /> },
      { label: "csvインポート", icon: <FaSearch /> },
    ],
    techStack: {
      backend: "Laravel, MySQL, Docker & Docker Compose",
      frontend: "未使用",
      tools: "VSCode, GitHub",
    },
    gitHub: "https://github.com/uchi-a000/ReservationSystem",
  },
  {
    id: 5,
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
