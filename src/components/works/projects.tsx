import { ReactNode } from "react";
import { IoMdLogIn, IoMdHeart, IoMdBuild } from "react-icons/io";
import {
  FaSearch,
  FaRegQuestionCircle,
  FaQrcode,
  FaRocketchat,
  FaRegFile,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdPostAdd, MdOutlineDesignServices } from "react-icons/md";
import { BsFiletypeCsv } from "react-icons/bs";
import { PiBugDroid } from "react-icons/pi";

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
      "プログラミングスクールの学習で作成したお問い合わせ管理システムです。\nユーザ登録・ログイン・ログアウト・お問い合わせ内容のDB保存、管理画面での一覧・検索など、Webサービスとして必要な基本機能を一通り実装しました。これにより、LaravelでのMVC構造や認証機能、フォームバリデーションなどの流れを理解できました。今後はこの経験を活かし、実務レベルでの機能改善や、より使いやすいUI/UXの実装につなげていきたいと考えています。",
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
      "プログラミングスクールの課題として作成した飲食店予約システムです。\nユーザー向けには、予約機能・お気に入り・口コミ投稿・マイページでの予約変更など、実際のサービスに近い UI/UX を意識して実装しました。さらに、管理者と店舗代表者で権限を分け、表示メニューや操作範囲が異なる管理画面も構築しました。QRコードの発行やStripeによる決済機能、CSVインポートなど、学習の枠を超えて実務に近い開発を意識したプロジェクトです。",
    methodology: "個人開発",
    features: [
      { label: "予約とお気に入り機能", icon: <IoMdHeart /> },
      { label: "口コミ投稿・閲覧", icon: <MdPostAdd /> },
      { label: "QRコード発行・Stripe決済", icon: <FaQrcode /> },
      { label: "csvインポート", icon: <BsFiletypeCsv /> },
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
    title: "MyPortfolio",
    subtitle: "",
    thumbnail: "/portfolio-1.png",
    images: ["/portfolio-1.png"],
    description: "ポートフォリオ",
    fullDescription:
      "生成AI（v0）を活用して制作した本ポートフォリオです。\nデザインやレイアウトの大枠はAIに生成してもらいながら、使いづらい部分や表現が不自然な箇所は自分で調整し、随時ブラッシュアップしています。Next.jsを使用し、学習のアウトプットを兼ねてUI・UXの改善やコンポーネント設計にも取り組んでいます。",
    methodology: "個人開発",
    features: [
      { label: "アーキテクチャー図作成", icon: <MdOutlineDesignServices /> },
      { label: "GitHub と連携した自動デプロイ（Vercel）", icon: <FaRegFile /> },
      { label: "UI/UX 改善とコンポーネント設計", icon: <IoMdBuild /> },
    ],
    techStack: {
      backend: "未使用",
      frontend: "Next.js",
      tools: "v0, cursor, GitHub",
    },
    gitHub: "https://github.com/uchi-a000/my-portfolio",
  },
  {
    id: 4,
    title: "学習管理システム",
    subtitle: "実務（Sample）",
    thumbnail: "/studyAppB.png",
    images: ["/studyAppB.png", "/studyAppA.png"],
    description: "Webアプリケーション開発",
    fullDescription:
      "プログラミングスクールの教材管理システムの開発をチームで作成しております。\n受講生が教材の閲覧や学習時間の記録、コーチとの面談予約などができるシステムで、運営・コーチなどの権限によって表示項目や操作範囲も異なります。要件定義、開発、テスト、レビューなどバックエンドとフロントエンド両方の幅広い業務に携わらせていただいております。",
    methodology: "アジャイル（スクラム）開発",
    features: [
      { label: "チャット機能作成", icon: <FaRocketchat /> },
      { label: "休学などの申請フォーム作成", icon: <FaRegFile /> },
      { label: "Unitテスト実装", icon: <FaRegFile /> },
      { label: "バグ対応", icon: <PiBugDroid /> },
    ],
    techStack: {
      backend: "PHP, Laravel, MySQL, Docker & Docker Compose",
      frontend: "Node.js, TypeScript, Next.js, Tailwind CSS, HeroUI",
      tools: "VSCode, GitHub, Jira, Notion, Confluence, slack",
    },
  },
];
