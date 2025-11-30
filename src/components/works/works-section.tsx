"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { projects } from "./projects";

export function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number>(0);

  const currentProject = projects.find((p) => p.id === selectedProject);

  // Escでモーダル閉じる
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setExpandedImageIndex(0);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-accent/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-2 shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => {
                  setSelectedProject(project.id);
                  setExpandedImageIndex(0);
                }}
              >
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* モーダル */}
          <Dialog
            open={selectedProject !== null}
            onOpenChange={() => {
              setSelectedProject(null);
            }}
          >
            {currentProject && (
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <DialogTitle className="text-2xl">
                      {currentProject.title}
                    </DialogTitle>
                    <Badge variant="outline" className="text-sm">
                      {currentProject.subtitle}
                    </Badge>
                  </div>
                  <DialogDescription className="text-lg">
                    {currentProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* メイン画像 */}
                <div className="relative w-full h-[300px] sm:h-[500px] md:h-[650px] my-4 overflow-hidden">
                  <Image
                    src={currentProject.images[expandedImageIndex]}
                    alt={`拡大画像`}
                    fill
                    sizes="(max-width: 768px) 90vw, 60vw"
                    className="object-contain"
                  />
                </div>

                {/* サムネイル */}
                <div className="flex gap-2 justify-center mb-4">
                  {currentProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`
                        relative w-14 h-16 sm:w-20 sm:h-20 border rounded cursor-pointer overflow-hidden
                        ${
                          idx === expandedImageIndex
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                      onClick={() => setExpandedImageIndex(idx)}
                    >
                      <Image
                        src={img}
                        alt={`サムネイル${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* 詳細説明 */}
                <div className="space-y-6 mt-4">
                  <p className="text-base leading-relaxed whitespace-pre-line">
                    {currentProject.fullDescription}
                  </p>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      開発手法
                    </h3>
                    <Badge className="text-sm px-4 py-2">
                      {currentProject.methodology}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      主な開発
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentProject.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                        >
                          <span className="text-xl">{feature.icon}</span>
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      使用言語
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-sm">Backend：</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          {currentProject.techStack.backend}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Frontend：</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          {currentProject.techStack.frontend}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Tools：</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          {currentProject.techStack.tools}
                        </span>
                      </div>
                    </div>

                    {currentProject.gitHub && (
                      <div>
                        <h3 className="font-semibold text-lg mt-3 mb-3 text-primary">
                          GitHub
                        </h3>
                        <div>
                          <span className="font-medium text-sm">URL：</span>
                          <span className="text-sm text-muted-foreground ml-2">
                            <a
                              href={currentProject.gitHub}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 underline ml-2 hover:opacity-80"
                            >
                              {currentProject.gitHub}
                            </a>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>
    </section>
  );
}
