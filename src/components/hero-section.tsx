"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* プロフィール画像（ゆるく浮遊） */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center overflow-hidden">
            <Image
              src="/IMG_9415.JPG"
              alt="プロフィール写真"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* テキスト（少し遅れて表示） */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-3xl mb-4 font-normal text-balance">
            はじめまして。
            <br className="md:hidden" />
            <span className="text-primary font-normal">内田</span>
            と申します。
          </h1>

          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-1">
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
        </motion.div>
      </div>
    </motion.section>
  );
}
